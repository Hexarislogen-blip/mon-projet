import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting storage (in-memory, simple solution)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 3600000; // 1 hour
  const maxRequests = 3;

  const requests = rateLimitMap.get(ip) || [];
  const recentRequests = requests.filter(timestamp => now - timestamp < windowMs);

  if (recentRequests.length >= maxRequests) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Trop de requêtes. Veuillez réessayer dans une heure.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, website } = body;

    // Honeypot check
    if (website) {
      return NextResponse.json(
        { success: false, error: 'Spam détecté' },
        { status: 400 }
      );
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!name || name.length < 2 || name.length > 100) {
      errors.name = 'Le nom doit contenir entre 2 et 100 caractères';
    }

    if (!email || !validateEmail(email)) {
      errors.email = 'Adresse email invalide';
    }

    if (!subject || subject.length < 3 || subject.length > 200) {
      errors.subject = 'Le sujet doit contenir entre 3 et 200 caractères';
    }

    if (!message || message.length < 10 || message.length > 2000) {
      errors.message = 'Le message doit contenir entre 10 et 2000 caractères';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 422 }
      );
    }

    // Sanitize inputs
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanSubject = sanitizeInput(subject);
    const cleanMessage = sanitizeInput(message);

    // Send email with Resend
    const emailData = {
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend's test domain
      to: 'hectorsedo@gmail.com',
      subject: `Portfolio Contact: ${cleanSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3ecf8e; padding-bottom: 10px;">
            Nouveau message depuis le portfolio
          </h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${cleanName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${cleanEmail}</p>
            <p style="margin: 10px 0;"><strong>Sujet:</strong> ${cleanSubject}</p>
            <div style="margin-top: 20px;">
              <strong>Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #3ecf8e; margin-top: 10px; white-space: pre-wrap;">
                ${cleanMessage}
              </div>
            </div>
          </div>
          <div style="color: #666; font-size: 12px; border-top: 1px solid #ddd; padding-top: 15px;">
            <p><strong>Informations techniques:</strong></p>
            <p>IP: ${ip}</p>
            <p>Date: ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      text: `
Nouveau message depuis le portfolio

Nom: ${cleanName}
Email: ${cleanEmail}
Sujet: ${cleanSubject}

Message:
${cleanMessage}

---
IP: ${ip}
Date: ${new Date().toLocaleString('fr-FR')}
      `,
    };

    await resend.emails.send(emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message envoyé avec succès ! Je vous répondrai sous 24h.' 
      },
      { status: 200 }
    );

  } catch (error) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error('Erreur lors de l\'envoi:', error);
    }
    return NextResponse.json(
      { 
        success: false, 
        error: 'Erreur lors de l\'envoi. Veuillez réessayer ou me contacter directement par email.' 
      },
      { status: 500 }
    );
  }
}

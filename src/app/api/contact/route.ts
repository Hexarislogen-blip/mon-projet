import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validation basique
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email invalide' },
        { status: 400 }
      );
    }

    // Configuration email (à remplacer par votre service d'email)
    const emailData = {
      to: 'contact@hectorsedo.com',
      from: 'noreply@hectorsedo.com',
      subject: `Nouveau message: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis le site web</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Sujet:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 12px;">
            Ce message a été envoyé depuis le formulaire de contact de hectorsedo.com
          </p>
        </div>
      `,
    };

    // Pour l'instant, on simule l'envoi d'email
    // TODO: Configurer un vrai service d'email (Resend, SendGrid, etc.)
    console.log('Email à envoyer:', emailData);

    // Simulation d'un délai d'envoi
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Email de confirmation à l'utilisateur
    const confirmationEmail = {
      to: email,
      from: 'contact@hectorsedo.com',
      subject: 'Confirmation de réception - Hector SEDO',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Message bien reçu !</h2>
          <p>Bonjour ${name},</p>
          <p>J'ai bien reçu votre message concernant "${subject}".</p>
          <p>Je vous remercie pour votre intérêt et je reviens vers vous dans les plus brefs délais (sous 24h).</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p><strong>Votre message:</strong></p>
            <div style="background: white; padding: 10px; border-radius: 4px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p>Cordialement,<br>Hector SEDO</p>
          <p style="color: #666; font-size: 12px;">
            Site web: <a href="https://hectorsedo.com">hectorsedo.com</a><br>
            Email: contact@hectorsedo.com
          </p>
        </div>
      `,
    };

    console.log('Email de confirmation à envoyer:', confirmationEmail);

    return NextResponse.json(
      { message: 'Message envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur lors du traitement du formulaire:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}

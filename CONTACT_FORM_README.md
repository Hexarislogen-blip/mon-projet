# Formulaire de Contact - Documentation

## Vue d'ensemble

Le formulaire de contact utilise un handler PHP robuste avec validation côté serveur, protection anti-spam, et rate limiting.

## Architecture

### Frontend (`src/app/contact/page.tsx`)
- **Framework**: React avec Next.js (client component)
- **État**: useState pour gérer formData, errors, status
- **Validation**: Validation HTML5 + validation serveur
- **UX**: Messages d'erreur en temps réel, états de chargement, feedback visuel

### Backend (`public/api/contact.php`)
- **Sécurité**: Headers sécurisés, CORS configuré, sanitization des inputs
- **Validation**: Email regex, longueur des champs (2-100 pour nom, 10-2000 pour message)
- **Rate Limiting**: 3 requêtes par heure par IP (file-based)
- **Anti-spam**: Honeypot field (champ "website" caché)
- **Logging**: Logs des soumissions réussies et échouées

## Fonctionnalités de Sécurité

### 1. Protection CSRF
- Honeypot field invisible pour les bots
- Validation stricte des champs

### 2. Rate Limiting
- Maximum 3 soumissions par heure par IP
- Stockage dans `/tmp/contact_rate_limit_{hash_ip}`

### 3. Sanitization
- `htmlspecialchars()` avec `ENT_QUOTES`
- `strip_tags()` pour retirer HTML/PHP
- `trim()` pour espaces

### 4. Validation
```php
- Nom: 2-100 caractères
- Email: Format RFC valide
- Sujet: 3-200 caractères
- Message: 10-2000 caractères
```

## Configuration Requise

### Serveur
- PHP 7.4+ (recommandé 8.0+)
- Fonction `mail()` activée OU service SMTP configuré
- Permissions d'écriture sur `/tmp/` pour rate limiting et logs

### Variables d'environnement (optionnel)
Aucune variable d'environnement requise. Le PHP utilise la fonction `mail()` native.

Pour utiliser un service SMTP externe (recommandé en production), modifier le code PHP:
```php
// Remplacer mail() par PHPMailer ou similaire
```

## Endpoints

### POST `/api/contact.php`

**Request Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Audit de sécurité",
  "message": "Bonjour, je souhaite...",
  "website": "" // honeypot, doit rester vide
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message envoyé avec succès ! Je vous répondrai sous 24h."
}
```

**Error Response (422 - Validation):**
```json
{
  "success": false,
  "errors": {
    "email": "Adresse email invalide",
    "message": "Le message doit contenir entre 10 et 2000 caractères"
  }
}
```

**Error Response (429 - Rate Limit):**
```json
{
  "success": false,
  "error": "Trop de requêtes. Veuillez réessayer dans une heure."
}
```

**Error Response (500 - Server):**
```json
{
  "success": false,
  "error": "Erreur lors de l'envoi. Veuillez réessayer ou me contacter directement par email."
}
```

## Logs

### Soumissions réussies
- Fichier: `/tmp/contact_submissions.log`
- Format: `YYYY-MM-DD HH:MM:SS - Success - email - sujet`

### Erreurs
- Fichier: `/tmp/contact_errors.log`
- Format: `YYYY-MM-DD HH:MM:SS - Failed - email - sujet`

### Rate Limiting
- Fichier: `/tmp/contact_rate_limit_{md5(ip)}`
- Format: JSON avec timestamps des requêtes

## Déploiement

### En local (développement)
Le formulaire pointe vers `/api/contact.php`. Assurez-vous que:
1. PHP est installé et accessible
2. Le serveur Next.js proxy les requêtes vers PHP (ou utilisez un serveur PHP séparé)

### En production
1. **Vérifier la configuration PHP** sur le serveur
2. **Configurer CORS** dans `contact.php` avec votre domaine de production
3. **Tester l'envoi d'emails** avec la fonction `mail()` du serveur
4. **Optionnel**: Configurer un service SMTP (SendGrid, Mailgun, etc.)
5. **Vérifier les permissions** d'écriture sur `/tmp/`

### Configuration CORS Production
Dans `contact.php`, ligne 11-15:
```php
$allowed_origins = [
    'https://hectorsedo.com',
    'https://www.hectorsedo.com'
];
```

## Maintenance

### Nettoyer les logs
```bash
# Supprimer les anciens logs (> 30 jours)
find /tmp -name "contact_*.log" -mtime +30 -delete
```

### Vérifier le rate limiting
```bash
# Voir les fichiers de rate limiting actifs
ls -lh /tmp/contact_rate_limit_*
```

### Tester le formulaire
```bash
curl -X POST http://localhost:3000/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test",
    "message": "Ceci est un message de test",
    "website": ""
  }'
```

## Améliorations Futures

1. **Service Email Externe**: Intégrer SendGrid/Mailgun pour meilleure délivrabilité
2. **Base de données**: Stocker les soumissions en DB au lieu de logs
3. **reCAPTCHA**: Ajouter Google reCAPTCHA v3 pour protection avancée
4. **Notifications**: Webhook vers Slack/Discord pour notifications temps réel
5. **Analytics**: Tracker les taux de conversion du formulaire

## Support

Pour toute question ou problème:
- Email: hectorsedo@gmail.com
- WhatsApp: +229 01 15 59 50 828

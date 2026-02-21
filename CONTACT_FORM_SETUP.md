# Configuration du Formulaire de Contact

## Solution Utilisée

Le formulaire de contact utilise **Next.js API Routes** avec **Resend** pour l'envoi d'emails. Cette solution est 100% intégrée à Next.js, sans besoin de PHP ou serveur externe.

## Pourquoi Resend ?

- ✅ **Déjà installé** dans le projet (`package.json`)
- ✅ **Simple à configurer** - Une seule clé API
- ✅ **Gratuit** jusqu'à 3000 emails/mois
- ✅ **Fiable** - Créé par l'équipe de Vercel
- ✅ **Moderne** - API TypeScript native
- ✅ **Pas de serveur SMTP** à configurer

## Configuration Rapide

### 1. Créer un compte Resend

1. Aller sur [resend.com](https://resend.com)
2. Créer un compte gratuit
3. Vérifier votre email

### 2. Obtenir une clé API

1. Aller dans [API Keys](https://resend.com/api-keys)
2. Cliquer sur "Create API Key"
3. Donner un nom (ex: "Portfolio Contact Form")
4. Copier la clé générée (commence par `re_`)

### 3. Configurer les variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```bash
RESEND_API_KEY=re_votre_cle_api_ici
```

**Important:** Ne jamais committer ce fichier ! Il est déjà dans `.gitignore`.

### 4. (Optionnel) Configurer un domaine personnalisé

Par défaut, Resend utilise `onboarding@resend.dev` comme expéditeur. Pour utiliser votre propre domaine :

1. Aller dans [Domains](https://resend.com/domains)
2. Ajouter votre domaine (ex: `hectorsedo.com`)
3. Configurer les enregistrements DNS (SPF, DKIM, DMARC)
4. Modifier `src/app/api/contact/route.ts` ligne 98 :
   ```typescript
   from: 'Contact <contact@hectorsedo.com>',
   ```

## Architecture

### Frontend (`src/app/contact/page.tsx`)
- Composant React client avec gestion d'état
- Validation HTML5 + validation serveur
- Messages d'erreur en temps réel
- États : idle, loading, success, error
- Honeypot anti-spam (champ caché)

### Backend (`src/app/api/contact/route.ts`)
- Route API Next.js (App Router)
- Rate limiting : 3 requêtes/heure par IP (in-memory)
- Validation stricte des champs
- Sanitization des inputs
- Envoi via Resend API
- Logs des erreurs dans la console

## Sécurité

### 1. Rate Limiting
- Maximum 3 soumissions par heure par IP
- Stockage en mémoire (Map)
- Réinitialisation automatique après 1 heure

### 2. Validation
```typescript
- Nom: 2-100 caractères
- Email: Format RFC valide
- Sujet: 3-200 caractères
- Message: 10-2000 caractères
```

### 3. Protection Anti-Spam
- Champ honeypot invisible (`website`)
- Si rempli → rejet automatique

### 4. Sanitization
- Suppression des balises `<>` dangereuses
- Trim des espaces
- Échappement HTML dans l'email

## Test en Local

1. Démarrer le serveur de développement :
```bash
npm run dev
```

2. Aller sur `http://localhost:3000/contact`

3. Remplir et soumettre le formulaire

4. Vérifier :
   - Message de succès affiché
   - Email reçu dans votre boîte (hectorsedo@gmail.com)
   - Logs dans la console du serveur

## Test de la Rate Limiting

Soumettre 4 formulaires rapidement. Le 4ème devrait être rejeté avec :
```json
{
  "success": false,
  "error": "Trop de requêtes. Veuillez réessayer dans une heure."
}
```

## Déploiement sur Vercel

1. Ajouter la variable d'environnement dans Vercel :
   - Aller dans Settings → Environment Variables
   - Ajouter `RESEND_API_KEY` avec votre clé

2. Redéployer l'application

3. Tester le formulaire en production

## Limites du Plan Gratuit Resend

- ✅ 3,000 emails/mois
- ✅ 100 emails/jour
- ✅ API illimitée
- ✅ Support email

Pour un portfolio personnel, c'est largement suffisant !

## Alternatives Considérées

### ❌ PHP + mail()
- Nécessite serveur PHP séparé
- Configuration SMTP complexe
- Problèmes de délivrabilité
- Pas adapté à Vercel/Next.js

### ❌ Nodemailer + SMTP
- Configuration SMTP complexe
- Besoin d'un serveur email
- Problèmes de sécurité (credentials)
- Rate limiting difficile

### ❌ SendGrid
- Plus complexe à configurer
- Interface moins moderne
- Moins intégré à Next.js

### ✅ Resend (Solution choisie)
- Simple, moderne, fiable
- Parfaitement intégré à Next.js
- Créé par l'équipe Vercel
- Excellent DX (Developer Experience)

## Dépannage

### Erreur : "RESEND_API_KEY is not defined"
→ Vérifier que `.env.local` existe et contient la clé

### Erreur 500 lors de l'envoi
→ Vérifier les logs du serveur (`npm run dev`)
→ Vérifier que la clé API est valide

### Email non reçu
→ Vérifier les spams
→ Vérifier que l'email de destination est correct dans `route.ts`
→ Vérifier les logs Resend : [resend.com/emails](https://resend.com/emails)

### Rate limiting trop strict en dev
→ Redémarrer le serveur (efface le cache en mémoire)
→ Ou augmenter `maxRequests` dans `route.ts` ligne 13

## Support

Pour toute question :
- Email: hectorsedo@gmail.com
- WhatsApp: +229 01 55 95 08 28
- Documentation Resend: [resend.com/docs](https://resend.com/docs)

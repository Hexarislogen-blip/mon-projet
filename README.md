# Portfolio Hector SEDO

Portfolio professionnel d'ingénieur logiciel et pentester, construit avec Next.js 16, React 19, TypeScript et Tailwind CSS.

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 20+
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.local.example .env.local

# Configurer la clé API Resend (pour le formulaire de contact)
# Éditer .env.local et ajouter votre clé API
```

### Développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build Production

```bash
npm run build
npm start
```

## 📧 Configuration du Formulaire de Contact

Le formulaire de contact utilise [Resend](https://resend.com) pour l'envoi d'emails.

1. Créer un compte sur [resend.com](https://resend.com)
2. Obtenir une clé API
3. Ajouter la clé dans `.env.local`:
   ```
   RESEND_API_KEY=re_votre_cle_api
   ```

Voir [CONTACT_FORM_SETUP.md](./CONTACT_FORM_SETUP.md) pour plus de détails.

## 🛠️ Stack Technique

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, TypeScript
- **Styling**: Tailwind CSS 4
- **Email**: Resend
- **Déploiement**: Vercel

## 📁 Structure

```
src/
├── app/              # Pages et routes API
│   ├── api/         # Routes API (contact form)
│   ├── blog/        # Articles de blog
│   ├── projets/     # Pages projets
│   └── contact/     # Page contact
├── components/       # Composants réutilisables
└── app/globals.css  # Styles globaux
```

## 🚢 Déploiement

Le site est déployé sur [Vercel](https://vercel.com).

Pour déployer votre propre version:
1. Fork ce repository
2. Connecter à Vercel
3. Ajouter `RESEND_API_KEY` dans les variables d'environnement
4. Déployer

## 📝 License

© 2026 Hector SEDO. Tous droits réservés.

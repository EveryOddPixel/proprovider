# Precision Credentialing Services

A comprehensive web application for healthcare provider credentialing administrative support services.

## 🌟 Features

- **Public Website**
  - Professional homepage with hero section, benefits, and FAQ
  - Detailed services page with package descriptions
  - Multi-step intake form with validation
  - Calendly integration for discovery calls
  - About page with mission and values
  - Privacy policy and terms pages

- **Admin Dashboard**
  - Secure admin authentication
  - View and filter leads from intake form
  - Export leads to CSV
  - Status tracking (new, contacted, qualified, closed)

- **Technical Features**
  - React 18 with React Router
  - TailwindCSS for styling
  - PocketBase for backend and database
  - Form validation with react-hook-form and Zod
  - Responsive design with mobile menu
  - Google Analytics 4 integration
  - SEO optimized with react-helmet

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router 7
- **Styling**: TailwindCSS, shadcn/ui components
- **Backend**: PocketBase (SQLite database)
- **Forms**: react-hook-form, Zod validation
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Static hosting compatible

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn
- PocketBase (included in project)

## 🚀 Setup Instructions

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd <project-directory>
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Configure Environment Variables

Copy the example environment file:

\`\`\`bash
cp apps/web/.env.example apps/web/.env
\`\`\`

Edit \`apps/web/.env\` and configure:

\`\`\`env
# PocketBase URL (default for local development)
VITE_POCKETBASE_URL=http://127.0.0.1:8090

# Optional: Calendly URL for booking integration
VITE_CALENDLY_URL=https://calendly.com/your-username/discovery-call

# Optional: Google Analytics 4 Measurement ID
VITE_GA_ID=G-XXXXXXXXXX

# Admin credentials (must match PocketBase user)
VITE_ADMIN_EMAIL=admin@precisioncredentialing.com
VITE_ADMIN_PASSWORD=your-secure-password
\`\`\`

### 4. Start PocketBase

PocketBase should start automatically with the project. If not, start it manually:

\`\`\`bash
# The PocketBase server runs on http://127.0.0.1:8090
\`\`\`

### 5. Create Admin User in PocketBase

1. Open PocketBase Admin UI: http://127.0.0.1:8090/_/
2. Create an admin account for the PocketBase dashboard
3. Navigate to Collections → users
4. Create a new user with:
   - Email: Same as VITE_ADMIN_EMAIL in .env
   - Password: Same as VITE_ADMIN_PASSWORD in .env
   - Verified: Check this box

This user will be able to log in to the admin dashboard at /admin/login.

### 6. Run the Development Server

\`\`\`bash
npm run dev
\`\`\`

The application will be available at http://localhost:3000

## 📊 Database Schema

### Leads Collection

The \`leads\` collection stores intake form submissions:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | text | Yes | Provider's full name |
| email | email | Yes | Contact email |
| phone | text | No | Contact phone number |
| providerType | text | Yes | Type of healthcare provider |
| states | json | No | Array of states needing credentialing |
| needs | json | No | Array of services needed |
| urgency | text | No | Timeline urgency |
| message | editor | No | Additional notes |
| consent | boolean | Yes | Consent to be contacted |
| source | text | No | Lead source (auto-set to 'website') |
| status | text | No | Lead status (new/contacted/qualified/closed) |

**Access Rules:**
- Create: Public (anyone can submit)
- List/View/Update/Delete: Authenticated users only

## 🔐 Admin Access

### Login

1. Navigate to `/admin/login`
2. Enter the email and password configured in .env
3. Access the dashboard at `/admin/dashboard`

### Dashboard Features

- View all leads in a table
- Filter by status (new, contacted, qualified, closed)
- Export leads to CSV
- See submission details (states, needs, urgency)

## 📅 Calendly Integration

### Setup

1. Create a Calendly account at https://calendly.com
2. Set up an event type (e.g., "Discovery Call")
3. Copy your scheduling link
4. Add it to .env as VITE_CALENDLY_URL

The booking page will automatically embed your Calendly scheduler.

## 📈 Google Analytics Setup

1. Create a GA4 property in Google Analytics
2. Copy your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to .env as VITE_GA_ID

The tracking script will be automatically injected.

## 🎨 Customization Guide

### Changing Company Branding

Edit \`apps/web/src/config/branding.js\`:

\`\`\`javascript
export const branding = {
  companyName: 'Your Company Name',
  tagline: 'Your tagline',
  primaryColor: 'teal',  // or 'blue', 'purple', etc.
  accentColor: 'slate',
  contactEmail: 'info@yourcompany.com',
  contactPhone: '(555) 123-4567',
  complianceDisclaimer: 'Your disclaimer text'
};
\`\`\`

This file is imported across all pages, making rebranding simple.

### Customizing Colors

The app uses TailwindCSS with teal as the primary color. To change:

1. Edit \`apps/web/tailwind.config.js\`
2. Update color references in components
3. Or use the branding config to set theme colors

## 🚀 Deployment

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in \`dist/apps/web/\`.

### Deployment Options

**Static Hosting (Recommended):**
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

**PocketBase Deployment:**
- Deploy PocketBase to a VPS or cloud server
- Update VITE_POCKETBASE_URL to your production PocketBase URL
- Ensure PocketBase is accessible from your frontend domain

### Environment Variables for Production

Set these in your hosting platform:
- VITE_POCKETBASE_URL
- VITE_CALENDLY_URL (optional)
- VITE_GA_ID (optional)

## 📧 Email Setup (Future Enhancement)

The .env includes email configuration for future use:
- EMAIL_FROM: Sender email address
- RESEND_API_KEY: API key for Resend email service

Currently, email functionality would need to be implemented via PocketBase hooks or a separate backend service.

## ⚖️ Compliance Notes

This application is designed for credentialing administrative support with strict compliance considerations:

- **No PHI**: The system does not collect or store Protected Health Information
- **No Legal Advice**: Clear disclaimers that services are administrative only
- **No Influence**: Explicit statements that decisions are made by third parties
- **Transparency**: Clear privacy policy and terms of service
- **Consent**: Required consent checkbox on intake form

## 🔒 Security Best Practices

1. **Admin Credentials**: Use strong passwords for admin accounts
2. **PocketBase**: Keep PocketBase updated to latest version
3. **HTTPS**: Always use HTTPS in production
4. **Environment Variables**: Never commit .env files to version control
5. **Access Rules**: Review PocketBase collection access rules regularly

## 📝 License

[Your License Here]

## 🤝 Support

For questions or support:
- Email: info@precisioncredentialing.com
- Phone: (555) 123-4567

---

Built with ❤️ for healthcare providers
\`\`\`
# AR Engineering - Premium Industrial Website

A premium industrial manufacturing company website for AR Engineering with an integrated admin dashboard. Built with Next.js 15, TypeScript, TailwindCSS, and Prisma.

## Features

### Public Website
- **Home Page**: Hero section, company introduction, machine categories, industries served, features, manufacturing process, certifications
- **Products**: Dynamic product listing with search and category filters
- **Product Details**: Comprehensive product pages with specifications, features, applications, images, videos, and downloadable catalogs
- **About**: Company story, mission, vision, values, timeline, factory information
- **Services**: Detailed service offerings including manufacturing, installation, maintenance, technical support, training
- **Industries**: Industries served with specific applications
- **Gallery**: Factory images, machine photos, installation photos, and videos
- **Contact**: Contact form with inquiry management

### Admin Dashboard
- **Dashboard**: Overview with stats for products and inquiries
- **Products**: Full CRUD operations for product management with image uploads
- **Categories**: Category management with drag-and-drop reordering
- **Inquiries**: Inquiry management with status tracking
- **Settings**: Company information, contact details, and SEO settings

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **UI Components**: ShadCN UI (Radix UI)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with role-based access control
- **Image Management**: Cloudinary
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion

## Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Cloudinary account (for image uploads)

## Setup Instructions

### 1. Clone and Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/ar_engineering"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# Cloudinary (optional, for image uploads)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

### 3. Database Setup

Generate Prisma client and run migrations:

```bash
npx prisma generate
npx prisma db push
```

### 4. Seed Database

Run the seed script to create initial data:

```bash
npm run seed
```

This creates:
- Admin user (email: `admin@arengineering.com`, password: `admin123`)
- 6 product categories
- 2 sample products
- Default settings

### 5. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### 6. Access Admin Panel

Navigate to [http://localhost:3000/admin/login](http://localhost:3000/admin/login) and log in with:
- Email: `admin@arengineering.com`
- Password: `admin123`

## Project Structure

```
src/
├── app/
│   ├── admin/              # Admin dashboard pages
│   ├── products/           # Public product pages
│   ├── api/                # API routes
│   ├── actions/            # Server actions
│   ├── components/         # React components
│   ├── lib/                # Utility functions
│   └── layout.tsx          # Root layout
├── components/
│   ├── admin/              # Admin-specific components
│   ├── layout/             # Layout components (Header, Footer)
│   └── ui/                 # ShadCN UI components
prisma/
├── schema.prisma           # Database schema
└── seed.ts                 # Database seed script
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run seed` - Seed database with initial data

## Database Schema

The application uses the following main models:
- **User**: Admin users with role-based access
- **Category**: Product categories
- **Product**: Products with specifications, features, images, videos
- **Inquiry**: Customer inquiries from contact forms
- **Settings**: Website-wide settings

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Start production server: `npm run start`

## Customization

### Colors and Typography

Edit colors in `src/app/globals.css`:
- Primary blue: `#0056b3`
- Secondary cyan: `#00a8cc`
- Graphite: `#1a1a2e`
- Background: `#F8FAFC`
- Text: `#111827`

### Fonts

The project uses Manrope (headings) and Inter (body) from Google Fonts.

## Security Notes

- Change the default admin password after first login
- Keep `NEXTAUTH_SECRET` secure in production
- Use environment variables for all sensitive data
- Enable HTTPS in production

## Support

For issues or questions, please contact the development team.

## License

Copyright © 2024 AR Engineering. All rights reserved.

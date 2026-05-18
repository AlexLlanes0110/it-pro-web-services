# Technical Context — ITPro Web Services

## Current technical decision

The V1 website will be built with:

- Astro.
- Tailwind CSS.
- TypeScript.
- Static output.

## Deployment target

The planned deployment target is:

- Static build.
- AWS S3 for static hosting.
- AWS CloudFront as CDN.
- Cloudflare for DNS and domain management.
- HTTPS.
- Basic redirects if needed.
- Basic performance optimization.

## Local development

The local development workflow should use standard Node.js and npm commands.

Common commands:

    npm install
    npm run dev
    npm run build
    npm run preview

## Docker

Docker is not part of V1.

Do not propose, create, configure, or document Docker-related files unless the user explicitly requests it in the future.

Do not create Docker-related files such as:

- Dockerfile
- docker-compose.yml
- .dockerignore
- Container scripts
- Docker deployment instructions

## Expected project structure

Expected source structure:

    src/
    ├── components/
    │   ├── layout/
    │   ├── sections/
    │   └── ui/
    ├── config/
    ├── content/
    ├── layouts/
    ├── pages/
    ├── styles/
    └── utils/

## Content strategy

Business and website content should be centralized before building visual sections.

Recommended files:

    src/config/site.ts
    src/config/navigation.ts
    src/config/contact.ts
    src/content/itpro.es.ts

Avoid hardcoding repeated business content directly inside components.

## V1 technical scope

V1 includes:

- Static one-page landing page.
- Internal navigation.
- Responsive layout.
- Floating WhatsApp button.
- Basic SEO metadata.
- Basic Open Graph metadata.
- Static assets.

V1 does not include:

- Backend API.
- Database.
- CMS.
- Login.
- Client portal.
- Ticket system.
- Payment system.
- Chatbot.
- Advanced form handling.
- Multi-language implementation.
- Docker.

## Technical principles

- Keep the project simple.
- Prefer static generation.
- Prefer reusable content and config files.
- Avoid unnecessary dependencies.
- Keep components readable.
- Avoid over-engineering.
- Run npm run build after meaningful implementation changes.

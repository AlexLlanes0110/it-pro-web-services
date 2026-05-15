# Project Context — ITPro Web

## Project

Official website for ITPro — Inteligencia Tecnológica Profesional.

ITPro is a technology services brand for small and medium businesses.

The website is a Spanish one-page landing page for commercial presentation, QR usage on business cards, professional credibility, lead generation, and WhatsApp conversion.

## Main positioning

ITPro is not a computer repair shop.

ITPro must be positioned as a technology partner focused on:

- Software
- Automation
- Managed operational platforms
- Continuous technology operations
- Infrastructure as complementary support

## Main message

Software y automatización para empresas que quieren operar mejor.

## Subtitle

En ITPro ayudamos a PyMEs a ordenar procesos, implementar herramientas tecnológicas y mantener su operación funcionando mediante acompañamiento continuo.

## Website goals

The V1 website must support:

- Commercial presentation
- Physical business card QR destination
- Professional credibility
- New client contact
- Bridge between ITPro and Alejandro Aguilar as founder
- WhatsApp conversion

## V1 scope

Included:

- Fixed header
- Internal anchor navigation
- Floating WhatsApp button
- Hero
- Problem section
- Services section
- How we work section
- Generic real case section
- Technology philosophy section
- Founder section
- Contact section
- Footer
- Responsive layout
- Basic SEO
- Basic Open Graph
- AWS deploy readiness

Not included:

- Blog
- CMS
- Client portal
- Login
- Tickets
- Database
- Payments
- Complex forms
- Chatbot
- Active multi-language support
- Docker

## Repository

GitHub repository:

git@github.com:AlexLlanes0110/it-pro-web-services.git

## Deployment architecture

Expected production flow:

GitHub → GitHub Actions → Astro build → AWS S3 → CloudFront → Cloudflare DNS → End user

Docker is intentionally out of scope for now.

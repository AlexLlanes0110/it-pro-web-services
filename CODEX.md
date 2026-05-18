# CODEX.md — ITPro Web Services

This file defines the main working rules for AI coding assistants working on this repository.

## Project identity

This repository contains the official website for ITPro, also known as Inteligencia Tecnológica Profesional.

ITPro is a technology partner for small and medium-sized businesses, focused on software, automation, managed operational platforms, continuous technology operations, and specialized infrastructure support.

The website is not a generic computer repair page, not a cheap web agency site, and not a complex SaaS platform.

## Main goal

Build a professional one-page landing page in Spanish that helps visitors quickly understand:

- What ITPro is.
- Who ITPro helps.
- What problems ITPro solves.
- What services ITPro offers.
- How ITPro works.
- That ITPro already has a real initial client case.
- Who is behind the company.
- How to contact ITPro through WhatsApp.

## Required reading order

Before modifying code, read these files in order:

1. .ai/README.md
2. .ai/project-context.md
3. .ai/product-context.md
4. .ai/technical-context.md
5. .ai/design-context.md
6. .ai/roadmap.md
7. .ai/decisions.md
8. .ai/working-log.md
9. .ai/prompts/codex-system-prompt.md

If there is a conflict between files, follow this priority:

1. Direct user instruction.
2. CODEX.md
3. .ai/decisions.md
4. .ai/project-context.md
5. .ai/product-context.md
6. .ai/technical-context.md
7. .ai/design-context.md
8. .ai/roadmap.md
9. .ai/working-log.md

## Current scope

The current version is V1.

V1 must be a static or semi-static landing page built with:

- Astro.
- Tailwind CSS.
- TypeScript.
- Static deployment.

The site must be Spanish-first.

## V1 includes

- One-page landing page.
- Header with internal navigation.
- Hero section.
- Problem section.
- Services section.
- Work process section.
- Real case / founder client section.
- Technology philosophy section.
- Founder section.
- Contact section.
- Footer.
- Floating WhatsApp CTA.
- Responsive design.
- Basic SEO.
- Basic Open Graph metadata.

## V1 does not include

Do not add these features unless the user explicitly requests them later:

- Blog.
- CMS.
- Login.
- Client portal.
- Ticket system.
- Database.
- Backend API.
- Payment system.
- Complex forms.
- Chatbot.
- Admin dashboard.
- Multi-language implementation.
- Docker.
- Container configuration.
- Server-side application logic.

## Docker rule

This project will not use Docker in V1.

Do not propose, create, configure, or document Docker-related files unless the user explicitly asks for it in the future.

Do not create:

- Dockerfile
- docker-compose.yml
- .dockerignore
- Container scripts
- Docker deployment instructions

## Brand rules

ITPro must be presented as a professional technology partner for SMBs.

The message should focus on:

- Operational improvement.
- Software.
- Automation.
- Managed platforms.
- Continuous support.
- Infrastructure as a technical foundation.

Avoid making ITPro look like:

- A generic computer repair business.
- A cheap web design agency.
- A purely reactive tech support service.
- A software reseller without support.
- An unlimited custom development provider.

## Uniformes Pre and client case rules

Uniformes Pre is the expected founder client case for ITPro.

The website may prepare content sections, placeholders, structure, and copy for this founder client case.

However, do not publish or hardcode final public use of the Uniformes Pre name, logo, screenshots, internal data, prices, credentials, configurations, or sensitive operational details unless the user explicitly confirms that this is approved.

If approval is not confirmed in the current task, use generic wording such as:

- empresa del sector textil
- cliente fundador del sector textil
- caso real en una empresa textil

If the user provides approved assets or explicitly confirms approval, the website may use:

- Uniformes Pre name.
- Uniformes Pre logo.
- Approved public case study copy.
- Approved public images or brand assets.

Never invent client results, metrics, testimonials, screenshots, or private operational details.

## Content rules

Keep the content clear, professional, and understandable for business owners and operations managers.

The website should sound:

- Professional.
- Clear.
- Technical but not confusing.
- Trustworthy.
- Close and human.
- Focused on business operations.

Do not overuse technical tool names in customer-facing sections.

Tools like Linux, AWS, Cloudflare, Taiga, NetBox or GitHub may appear subtly, but they should not dominate the commercial message.

## Development rules

Prefer small, controlled changes.

Before implementing visual sections, centralize reusable information in:

- src/config/site.ts
- src/config/navigation.ts
- src/config/contact.ts
- src/content/itpro.es.ts

Avoid hardcoding repeated business content directly inside components.

Use reusable components when useful, but do not over-engineer.

Keep the project simple, readable, and easy to maintain.

## Image rules

Do not generate or assume final images.

Use placeholders when needed.

The user will manually add or approve:

- Logo.
- Founder photo.
- Hero visuals.
- Open Graph image.
- Favicon.
- Client-approved assets.

## Working log rule

After meaningful changes, update:

.ai/working-log.md

The working log must stay clean and useful.

Do not accumulate unnecessary logs forever.

When a new session or meaningful milestone happens, replace old irrelevant notes with the current status, latest changes, and next steps.

The log should include:

- Current status.
- Files changed.
- What changed.
- Why it changed.
- Pending next step.

## Final reminder

Do not start building advanced features.

This repository is currently focused on creating a strong, clean, professional V1 landing page for ITPro.

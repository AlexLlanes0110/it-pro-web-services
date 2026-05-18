# Decisions — ITPro Web Services

This file records important project decisions.

## Decision 001 — Website type

The first version of the ITPro website will be a one-page landing page with internal navigation.

Reason:

The current goal is to communicate clearly, build trust, and generate WhatsApp contact without overcomplicating the project.

## Decision 002 — Language

The first version will be Spanish-first.

Reason:

The initial target audience is SMBs in Yucatán and Quintana Roo.

## Decision 003 — Stack

The project will use:

- Astro.
- Tailwind CSS.
- TypeScript.

Reason:

This stack is lightweight, modern, static-friendly, and easy to maintain for a landing page.

## Decision 004 — Static deployment

The project will target static deployment.

Planned infrastructure:

- AWS S3.
- AWS CloudFront.
- Cloudflare DNS.

Reason:

The site does not require backend logic in V1.

## Decision 005 — No backend in V1

V1 will not include backend logic, database, authentication, admin panel, or server-side application features.

Reason:

The current goal is a simple, reliable, professional landing page.

## Decision 006 — No Docker in V1

Docker will not be used in V1.

Reason:

The project does not need containerization for the current scope. Keeping the workflow simple reduces maintenance overhead and avoids unnecessary complexity.

## Decision 007 — WhatsApp as main CTA

The main call to action will be WhatsApp.

Reason:

The commercial flow starts with a direct conversation and initial diagnosis.

## Decision 008 — No public pricing in V1

The website will not show rigid public pricing.

Reason:

ITPro will offer personalized solutions depending on the client's operation, needs, budget, and growth stage.

## Decision 009 — Generic client case until authorization

The first real client case will be presented generically as a textile-sector company until explicit authorization is provided.

Reason:

Client name, logo, screenshots, internal data, and sensitive details must not be published without approval.

## Decision 010 — Content before design implementation

Before building full visual sections, the project should centralize site configuration and content.

Recommended files:

- src/config/site.ts
- src/config/navigation.ts
- src/config/contact.ts
- src/content/itpro.es.ts

Reason:

This keeps business content reusable, easier to edit, and less likely to be duplicated across components.

## Decision 011 — Images will be manual

Final images will not be generated or assumed by AI.

The user will manually add:

- Logo.
- Founder photo.
- Hero visuals.
- Favicon.
- Open Graph image.
- Client-approved assets, if authorized later.

Reason:

Images should be intentional, reviewed, and approved manually.

## Decision 012 — Codex usage should be controlled

Codex should be used only for specific, well-scoped implementation tasks.

Reason:

The project should save Codex credits and keep learning value high. Documentation, content, structure, and review can be handled manually before asking Codex to implement.

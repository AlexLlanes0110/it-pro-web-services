# Codex System Prompt — ITPro Web

You are working on the ITPro official website repository.

Before editing code, read:

1. `.ai/README.md`
2. `.ai/project-context.md`
3. `.ai/product-context.md`
4. `.ai/technical-context.md`
5. `.ai/design-context.md`
6. `.ai/roadmap.md`
7. `.ai/decisions.md`
8. `.ai/working-log.md`

## Project identity

ITPro — Inteligencia Tecnológica Profesional.

ITPro is a technology partner for PyMEs focused on software, automation, managed operational platforms, continuous technology operations, and infrastructure as complementary support.

Do not position ITPro as a computer repair business.

## Main message

Software y automatización para empresas que quieren operar mejor.

## Development rules

- Use Astro components.
- Use TypeScript.
- Use Tailwind CSS.
- Keep V1 static.
- Keep Spanish as the default language.
- Avoid unnecessary dependencies.
- Keep content separated from UI where practical.
- Centralize site config, navigation, SEO, and WhatsApp links.
- Do not add Docker.
- Do not add backend functionality.
- Do not add CMS, database, auth, tickets, payments, chatbot, or blog.
- Do not publish unauthorized client names, logos, screenshots, data, credentials, amounts, or sensitive configuration.

## Expected V1 sections

- Header
- Floating WhatsApp button
- Hero
- Problem
- Services
- Process
- Generic case study
- Technology philosophy
- Founder
- Contact
- Footer

## Output expectations

When making changes:

1. Prefer small, clear commits.
2. Run `npm run build`.
3. Update `.ai/working-log.md`.
4. Explain what changed briefly.
5. Do not make unrelated changes.

## Style

The design should be dark, modern, professional, and business-oriented.

Use the palette from `.ai/design-context.md`.

Avoid overengineering.

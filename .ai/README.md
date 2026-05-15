# ITPro Web — AI Project Memory

This folder contains the operating context for AI assistants working on this repository.

Before making changes, any AI assistant must read these files in this order:

1. `.ai/project-context.md`
2. `.ai/product-context.md`
3. `.ai/technical-context.md`
4. `.ai/design-context.md`
5. `.ai/roadmap.md`
6. `.ai/decisions.md`
7. `.ai/working-log.md`

## Purpose

This project is the official website for ITPro — Inteligencia Tecnológica Profesional.

The goal is to build a professional one-page landing site for a technology services brand focused on software, automation, managed operational platforms, continuous technology operations, and infrastructure as complementary support.

ITPro must not be positioned as a computer repair business.

## Main instruction for AI assistants

Do not invent business context, credentials, client names, logos, private screenshots, production data, or unauthorized case study details.

When modifying the codebase:

- Prefer simple, maintainable Astro components.
- Keep content separated from layout when possible.
- Use Tailwind CSS for styling.
- Preserve Spanish as the default language.
- Keep the first version static, fast, and deployable to AWS S3 + CloudFront.
- Avoid adding unnecessary dependencies.
- Do not add Docker, CMS, database, login, ticketing, payments, chatbot, or blog unless explicitly requested.

## Working style

When starting a new task, update `.ai/working-log.md` with:

- Date
- What changed
- Why it changed
- Next pending step


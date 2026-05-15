# Working Log — ITPro Web

This file tracks project progress so future AI sessions can continue without losing context.

## 2026-05-15

### Completed

- Confirmed Git is installed on the server.
- Installed Node and npm through nvm.
- Configured SSH access from the server to GitHub.
- Created an ED25519 SSH key for the server.
- Added the server public key as a GitHub deploy key.
- Confirmed SSH authentication with GitHub.
- Cloned repository into `/opt/apps/itpro-web`.
- Initialized Astro project.
- Installed project dependencies.
- Installed Tailwind CSS.
- Confirmed `npm run build` works.
- Configured Git identity:
  - Name: Alejandro Aguilar
  - Email: alexx983llanes@gmail.com
- Pushed changes to GitHub from the server.

### Current status

The project is ready for structured V1 development.

### Next recommended steps

1. Create the intended source folder structure.
2. Add content files:
   - `src/config/site.ts`
   - `src/config/navigation.ts`
   - `src/content/itpro.es.ts`
3. Build base layout:
   - `src/layouts/MainLayout.astro`
4. Build UI primitives:
   - Container
   - Button
   - SectionHeading
   - Badge
5. Build landing sections.
6. Validate `npm run build`.
7. Commit and push.

### Notes

The project should stay static for V1.

Do not add Docker, backend, database, CMS, login, tickets, payments, chatbot, or blog unless explicitly requested.

# DIVYA AGRO FARMS ERP — Starter

A React + TypeScript ERP application shell for DIVYA AGRO FARMS. This first delivery establishes the project structure, Supabase email/password authentication, and the approved responsive sidebar. Individual module workflows are intentionally not implemented until their specifications are supplied and approved.

## Approved sidebar

The sidebar contains these modules in the exact requested order:

1. Dashboard
2. Customers
3. Quotations
4. Invoices
5. Sales & Purchases
6. Export Center
7. Bank Details
8. Settings
9. Audit Logs
10. Users

Logout is fixed at the bottom of the sidebar. No additional sidebar modules have been added.

## Requirements

- Node.js 20.19 or newer, or 22.12 or newer
- npm
- A Supabase project

## Run locally

1. Clone or download this repository.
2. Install packages:

   ```bash
   npm install
   ```

3. Create a local environment file:

   ```bash
   cp .env.example .env
   ```

   On Windows PowerShell, use `Copy-Item .env.example .env`.

4. In Supabase, open **Project Settings → API** and copy the Project URL and the anon/publishable browser key into `.env`:

   ```dotenv
   VITE_SUPABASE_URL=https://YOUR_PROJECT_REF.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY
   ```

5. Create an authorised user under **Supabase → Authentication → Users**. Public sign-up is not implemented in this starter.
6. Start the development server:

   ```bash
   npm run dev
   ```

7. Create a production build:

   ```bash
   npm run build
   ```

## Supabase security notes

- The browser client uses only the anon/publishable key. **Never** put the Supabase service-role key in a `VITE_` variable or in frontend code.
- The anon/publishable key is not a substitute for database security. Every application table must have appropriately designed PostgreSQL Row Level Security (RLS) policies before business data is introduced.
- This starter authenticates users and protects the workspace behind a valid Supabase session. The role list, permissions matrix, profile table, audit event model, and RLS policies are deliberately not invented here; they depend on your approved user/role requirements and module data model.
- No business tables or migrations are included yet. They will be added with the first approved module so fields, constraints, relationships, and access rules match your actual workflow.

## Deploy from GitHub

### Vercel

1. Push the project to a GitHub repository.
2. Import the repository in Vercel.
3. Set the project environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
4. Use the defaults: build command `npm run build`, output directory `dist`.
5. Deploy. `vercel.json` includes the SPA rewrite for direct navigation to module routes.

### Netlify

1. Connect the GitHub repository in Netlify.
2. Set build command `npm run build` and publish directory `dist`.
3. Add the same two environment variables.
4. Deploy. `public/_redirects` handles single-page application route fallback.

## Project structure

```text
src/
  components/
    auth/        Sign-in screen
    layout/      Responsive sidebar, top bar, workspace layout
    modules/     Specification-pending module page shell
  config/        The single approved sidebar module list
  contexts/      Supabase authentication context
  lib/           Supabase browser client
  types/         Vite environment types
  App.tsx        Auth gate and module routes
  index.css      Tailwind layers and application design tokens
  main.tsx       React entry point
```

## Current scope and next step

This delivery is only the initial project architecture and navigation shell. It does not create dashboard KPIs, customer fields, quotation or invoice forms, invoice calculations, export formats, bank fields, settings, audit events, or user roles. Those require your module-specific instructions and reference formats.

Send the detailed requirements for the first module when ready. The module will be reviewed before its database schema and full implementation are added.

## Frontend toolchain

The starter uses Vite 8, React 19, TypeScript, Tailwind CSS 4, React Router, Lucide icons, and Supabase JavaScript v2. Vite 8 requires a supported modern Node.js runtime; this project declares Node.js 20.19 or newer, or 22.12 or newer.

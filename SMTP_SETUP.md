# SMTP2GO Contact Form Setup

This project uses a Next.js Route Handler to send contact form submissions through the SMTP2GO API.

## Files involved

### Core contact form functionality

1. `/app/api/contact/route.ts`

- Server-side endpoint for contact form submissions
- Validates `name`, `email` and `message`
- Rejects obvious bot submissions through a honeypot field
- Calls the SMTP2GO `POST /v3/email/send` API
- Returns structured JSON success and error responses

2. `/components/contact-form.tsx`

- Client-side contact form component
- Prevents default form behavior
- Sends the form data to `/api/contact`
- Shows loading, success and error states
- Resets the form after a successful submission

3. `/app/o-nas-a-kontakt/page.tsx`

- Contact page containing the live form
- Renders office details and the contact section
- Anchors the form under `#formular`

### SEO and site setup

4. `/app/layout.tsx`

- Global metadata
- Open Graph and Twitter defaults
- JSON-LD structured data for `LegalService` and `WebSite`
- Loads Fraunces and Raleway with `next/font/google`

5. `/lib/seo.ts`

- Shared SEO helpers
- Canonical metadata helper for each page
- Shared keywords and site URL

6. `/app/sitemap.ts`

- Generates the XML sitemap for all public pages

7. `/app/robots.ts`

- Generates the `robots.txt` file and references the sitemap

8. `/app/manifest.ts`

- Web app manifest for search and browser metadata

9. `/.env.example`

- Lists all required environment variables

## Required environment variables

Add these values to your deployment environment:

- `CONTACT_FORM_RECIPIENT`
- `SMTP2GO_API_KEY`
- `SMTP2GO_SENDER`
- `NEXT_PUBLIC_SITE_URL`

## SMTP2GO requirements

- `SMTP2GO_API_KEY` must be a valid API key created in SMTP2GO
- `SMTP2GO_SENDER` must be an address your SMTP2GO account is authorized to send from
- `CONTACT_FORM_RECIPIENT` is where the site should receive contact requests

## Submission flow

1. User fills the form on `/o-nas-a-kontakt`
2. `components/contact-form.tsx` sends JSON to `/api/contact`
3. `app/api/contact/route.ts` validates the data
4. The route sends the message to `https://api.smtp2go.com/v3/email/send`
5. The UI shows success or error feedback to the user

## Local testing

1. Copy `/.env.example` to `.env.local`
2. Fill in the SMTP2GO values
3. Run `npm run dev`
4. Open `/o-nas-a-kontakt`
5. Send a test message

## Notes

- The form currently sends directly through SMTP2GO's standard email API
- No extra email dependency such as Nodemailer is required
- If the sender address is not verified in SMTP2GO, the request will fail
- The site SEO setup assumes the production URL is `https://www.prevereniefirmy.sk` unless overridden by `NEXT_PUBLIC_SITE_URL`

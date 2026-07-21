# Red Leaf Head Spa & Massage

Mobile-first Next.js 16 / React 19 / Tailwind CSS 4 website.

## What was fixed

- The image overlay exists only on the home page.
- About, Services, Pricing, Memberships, Gift Cards and Contact use separate image and text regions.
- Text always remains fully opaque.
- Mobile layouts use one-column stacking and do not cut words or overflow horizontally.
- GitHub Actions uses Node.js 24-compatible actions.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Deploy to GitHub Pages

1. Upload all files to your repository.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **GitHub Actions**.
4. Push to `main`.
5. Open the **Actions** tab and wait for the deploy workflow to finish.

Do not use “Deploy from a branch” for this Next.js version. Use **GitHub Actions**.

## Add Square links

Go to:

**Repository → Settings → Secrets and variables → Actions → New repository secret**

Create:

- `NEXT_PUBLIC_SQUARE_BOOKING_URL`
- `NEXT_PUBLIC_SQUARE_GIFT_CARD_URL`

Paste the full Square URLs as the secret values.

## Update business details

Search the project for:

- `Your spa address`
- `(000) 000-0000`
- `hello@redleafheadspa.com`

Replace these placeholders before launch.

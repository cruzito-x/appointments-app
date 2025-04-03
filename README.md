This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

```
appointments-management-app
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ prisma
│  ├─ migrations
│  │  ├─ 20250325180020_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  └─ schema.prisma
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  └─ auth
│  │  │     └─ [...nextauth]
│  │  │        └─ route.ts
│  │  ├─ dashboard
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ help
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ assets
│  │  └─ images
│  │     └─ logo.png
│  ├─ components
│  │  ├─ footer
│  │  │  └─ Footer.tsx
│  │  ├─ header
│  │  │  └─ Header.tsx
│  │  ├─ loading
│  │  │  └─ Loading.tsx
│  │  ├─ sidebar
│  │  │  ├─ Items.tsx
│  │  │  └─ Sidebar.tsx
│  │  └─ table
│  │     └─ Table.tsx
│  └─ lib
│     └─ prisma.ts
├─ tailwind.config.ts
└─ tsconfig.json

```

```
appointments-management-app
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ prisma
│  ├─ migrations
│  │  ├─ 20250328213111_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  ├─ schema.prisma
│  └─ seed.ts
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  ├─ auth
│  │  │  │  └─ [...nextauth]
│  │  │  │     └─ route.ts
│  │  │  ├─ dashboard
│  │  │  │  └─ reminders
│  │  │  │     └─ route.ts
│  │  │  ├─ doctors
│  │  │  │  └─ route.ts
│  │  │  └─ patients
│  │  │     ├─ details
│  │  │     │  └─ [id]
│  │  │     │     └─ route.ts
│  │  │     └─ route.ts
│  │  ├─ appointments
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ billing
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ dashboard
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ doctors
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ globals.css
│  │  ├─ help
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ login
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ not-found.tsx
│  │  ├─ page.tsx
│  │  └─ patients
│  │     ├─ layout.tsx
│  │     ├─ page.tsx
│  │     └─ patient_details
│  │        └─ [id]
│  │           └─ page.tsx
│  ├─ assets
│  │  └─ images
│  │     ├─ doctor.webp
│  │     ├─ doctor1.png
│  │     ├─ empty.png
│  │     ├─ logo.png
│  │     ├─ paciente1.png
│  │     └─ personal.webp
│  ├─ components
│  │  ├─ breadcrumbs
│  │  │  └─ Breadcrumbs.tsx
│  │  ├─ buttons
│  │  │  └─ seeMore
│  │  │     └─ SeeMore.tsx
│  │  ├─ cards
│  │  │  ├─ appointments
│  │  │  │  └─ Appointments.tsx
│  │  │  ├─ dashboard
│  │  │  │  ├─ Appointments.tsx
│  │  │  │  ├─ Attentions.tsx
│  │  │  │  ├─ Files.tsx
│  │  │  │  ├─ Personal.tsx
│  │  │  │  ├─ Reminders.tsx
│  │  │  │  └─ Reviews.tsx
│  │  │  ├─ doctors
│  │  │  │  └─ Profile.tsx
│  │  │  └─ patients
│  │  │     └─ File.tsx
│  │  ├─ charts
│  │  │  └─ dashboard
│  │  │     ├─ DoughnutChart.tsx
│  │  │     ├─ HorizontalBarChart.tsx
│  │  │     └─ PieChart.tsx
│  │  ├─ footer
│  │  │  └─ Footer.tsx
│  │  ├─ header
│  │  │  └─ Header.tsx
│  │  ├─ loading
│  │  │  └─ Loading.tsx
│  │  ├─ modals
│  │  │  └─ appointments
│  │  │     └─ AppointmentDetails.tsx
│  │  ├─ results
│  │  │  └─ noData
│  │  │     └─ NoData.tsx
│  │  ├─ searchbars
│  │  │  ├─ appointments
│  │  │  │  └─ Searchbar.tsx
│  │  │  ├─ doctors
│  │  │  │  └─ Searchbar.tsx
│  │  │  └─ patients
│  │  │     └─ Searchbar.tsx
│  │  ├─ sidebar
│  │  │  ├─ Items.tsx
│  │  │  └─ Sidebar.tsx
│  │  └─ table
│  │     └─ Table.tsx
│  ├─ functions
│  │  ├─ dashboard
│  │  │  └─ dashboard.tsx
│  │  └─ patients
│  │     └─ patients.tsx
│  └─ lib
│     └─ prisma.ts
├─ tailwind.config.ts
└─ tsconfig.json

```
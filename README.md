# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



## Kullanılan Teknolojiler
- **Nuxt.js**: Vue.js tabanlı bir framework.
- **Vue.js**: Bileşen tabanlı mimari.
- **Tailwind CSS**: Stil için kullanılan bir CSS framework'ü.
- **Font Awesome**: İkonlar için kullanılır.
- **@nuxt/image**: Resim optimizasyonu için kullanılır.

## Proje Yapısı
- **components/**: Uygulamanın bileşenleri.
  - **home/**: Ana sayfa bileşenleri (Hero, DealsOfTheDay, FeaturedDishes, vb.)
  - **layout/**: Sayfa düzeni bileşenleri (Navbar, Footer).
  - **ui/**: Kullanıcı arayüzü bileşenleri (Button, Card, CategoryCard, ProductCard).
- **data/**: Mock verilerin bulunduğu dosya (data.js).
- **layouts/**: Sayfa düzeni bileşenleri.
- **pages/**: Uygulamanın sayfaları.
- **plugins/**: Eklentiler (Font Awesome entegrasyonu).
- **styles/**: Global stiller.

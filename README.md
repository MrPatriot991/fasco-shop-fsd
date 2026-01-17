# FASCO E-commerce Platform

![FASCO Banner](./docs/preview.png)

A modern, high-performance e-commerce storefront based on the FASCO design system. This project is built to demonstrate professional frontend architecture, secure state management, and scalable coding patterns.

[🚀 Live Preview Link](https://fasco-shop-fsd.vercel.app/) | [🎨 Design Reference (Figma)](https://www.figma.com/design/dM9Uuam4Qyxm70eHZzHPwE/Online-Shopping-Website-Design---eCommerce-Store-Website---UI-Kit--Community-?node-id=114-231&t=CKebb5B5ZkBcr9st-0)

## 🚀 Tech Steck

- **Framework**: React 19 + Vite
- **Language**: TypeScript (Strict Mode)
- **State Management**: Redux Toolkit (RTK)
- **Architecture**: Feature-Sliced Design (FSD)
- **Validation**: Zod (Runtime Schema Validation)
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod Resolvers
- **API**: FakeStoreAPI / Axios

## 🛠️ Architecture Highlights (FSD)

This project strictly follows the Feature-Sliced Design methodology to ensure high maintainability:

- **App**: Global providers, styles, and initialization.
- **Pages**: Composition of widgets into full-scale routes.
- **Widgets**: Complex, self-contained UI blocks (e.g., ProductGrid, Navbar).
- **Features**: User actions (e.g., AddToCart, FilterProducts).
- **Entities**: Business logic and data models (Product, User, Cart).
- **Shared**: Reusable UI components, API clients, and utility functions.

## 🛡️ Security Features

- **Runtime Validation**: All data from external APIs is validated via Zod schemas before entering the Redux store to prevent state corruption.
- **Safe CRUD**: Immutable state updates and protected data flow.
- **Input Sanitization**: Built-in protection against common web vulnerabilities.

## 📈 Roadmap

- Stage 1: Project setup & FSD structure (Current)
- Stage 2: Product Entity & Catalog Thunks
- Stage 3: Shopping Cart logic with EntityAdapter
- Stage 4: Interactive UI & Responsive Layout (Tailwind v4)
- Stage 5: User Profile & Admin Dashboard
- Stage 6: Final SEO & Performance optimization

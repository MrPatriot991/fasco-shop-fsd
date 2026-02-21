# Project Style Preset (FSD + Explicit Public API)

Use this preset as a baseline for new projects.

## 1) Structure Rules

- Folders in slices: `kebab-case`
  - Example: `product-card`, `wishlist-toolbar`, `info-layout`
- Model files: `camelCase`
  - Prefer entity/feature prefix in name
  - Example: `productSchema.ts`, `wishlistSlice.ts`, `checkoutActions.ts`
- UI component files: `PascalCase.tsx`
  - Example: `ProductCard.tsx`, `WishlistHeader.tsx`

## 2) Public API Rules

- Keep exactly one public API file per slice root: `index.ts`
- Use explicit exports only
  - Good: `export { ProductCard } from "./ui/product-card/ProductCard";`
  - Bad: `export * from "./ui";`
- Avoid nested barrel files (`model/index.ts`, `ui/index.ts`) unless absolutely needed
- Avoid root aggregators like `src/widgets/index.ts`

## 3) Import Rules

- Import from slice public API when possible
  - Good: `import { ProductCard } from "@/entities/product";`
- Avoid deep import to internal model/ui from other slices
  - Bad: `@/entities/product/model/...`
- Inside the same slice, direct relative imports are allowed

## 4) Naming Conventions

- Actions/selectors/types in model should be readable by name
  - Example: `toggleGiftWrap`, `removeFromWishlist`
- Avoid typos in API names (they quickly spread through codebase)

## 5) ESLint Baseline

Add at least this rule:

```js
'no-restricted-syntax': [
  'error',
  {
    selector: 'ExportAllDeclaration',
    message: 'Use explicit exports instead of `export *`.',
  },
]
```

## 6) Refactor Checklist (Per Slice)

1. Remove `export *` from root `index.ts`
2. Replace with explicit exports
3. Remove unnecessary nested `ui/index.ts` and `model/index.ts`
4. Normalize `model/*` filenames to `camelCase`
5. Update all imports
6. Run:
   - `npm run lint`
   - `npm run build`

## 7) Commit Format

Use:

`<type>(<scope>): <description>`

Examples:

- `refactor(entities-product): migrate model files to camelCase`
- `refactor(widget-info-layout): remove ui barrel and flatten public api`
- `fix(catalog): replace legacy shared ui imports`

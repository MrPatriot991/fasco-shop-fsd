/**
 * 1. Source of Truth: Define sections with 'as const' to lock values
 * as literal types instead of generic strings.
 */
export const INFO_SECTIONS = [
  { id: "support", label: "Support Center" },
  { id: "invoicing", label: "Invoicing" },
  { id: "contract", label: "Contract" },
  { id: "careers", label: "Careers" },
  { id: "blog", label: "Blog" },
  { id: "faq", label: "FAQ" },
] as const;

/**
 * 2. Derived Union Type: Automatically creates a type of all allowed IDs
 * (e.g., "support" | "invoicing" | ...). Updates if INFO_SECTIONS changes.
 */
export type InfoType = (typeof INFO_SECTIONS)[number]["id"];

/**
 * 3. Validation Set: Create a ReadonlySet for O(1) lookups during runtime validation.
 */
export const INFO_TYPE_SET: ReadonlySet<InfoType> = new Set(INFO_SECTIONS.map((s) => s.id));

/**
 * 4. Fallback Value: Type-safe default value for the application state.
 */
export const DEFAULT_INFO_TYPE: InfoType = "faq";

/**
 * 5. Type Guard: Runtime check to safely narrow a string down to an InfoType.
 * Useful for validating API responses or URL parameters.
 */
export const isInfoType = (v: string): v is InfoType => INFO_TYPE_SET.has(v as InfoType);

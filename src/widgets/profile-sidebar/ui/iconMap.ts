import { Lock, PackageOpen, Settings, ShoppingBag } from "lucide-react";
import type { ProfileSection } from "@/entities/profile";

export const PROFILE_ICON_MAP: Record<ProfileSection, React.ComponentType<{ size?: number }>> = {
  orders: ShoppingBag,
  wishlist: PackageOpen,
  settings: Settings,
  security: Lock,
};

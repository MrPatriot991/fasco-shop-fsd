import type { ProfileSection } from "@/entities/profile";
import {
  OrdersSection,
  WishlistSection,
  SettingsSection,
  SecuritySection,
} from "@/widgets/profile-sections";

interface ProfileSectionData {
  wishlistCount: number;
  email?: string;
}

export const renderProfileSection = (section: ProfileSection, data: ProfileSectionData) => {
  switch (section) {
    case "orders":
      return <OrdersSection />;

    case "wishlist":
      return <WishlistSection count={data.wishlistCount} />;

    case "settings":
      return <SettingsSection />;

    case "security":
      return <SecuritySection email={data.email} />;
  }
};

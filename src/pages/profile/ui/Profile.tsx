import { useAppSelector } from "@/shared/lib/hooks";
import { SectionTitle } from "@/shared/ui/section-title";
import { useProfileSection } from "@/features/profile-navigation";
import { selectWishlistCount } from "@/entities/wishlist";
import { selectSession } from "@/entities/session";
import { ProfileNav } from "@/widgets/profile-sidebar";
import { ProfileLayout } from "@/widgets/profile-layout";
import { renderProfileSection } from "../model/renderProfileSection";

export const Profile = () => {
  const { section } = useProfileSection();

  const wishlistCount = useAppSelector(selectWishlistCount);
  const session = useAppSelector(selectSession);
  const content = renderProfileSection(section, {
    wishlistCount,
    email: session?.email,
  });

  return (
    <ProfileLayout
      headerSlot={
        <SectionTitle
          as="h1"
          align="left"
          variant="section"
          subContent={
            <p className="text-sm md:text-base">Manage your demo account and shortcuts.</p>
          }
          classNameWrapper="items-start text-start lg:gap-4 pb-6 md:pb-8"
        >
          Profile
        </SectionTitle>
      }
      sidebarSlot={<ProfileNav className="rounded-2xl border border-neutral-200 bg-white p-3" />}
      contentSlot={content}
    />
  );
};

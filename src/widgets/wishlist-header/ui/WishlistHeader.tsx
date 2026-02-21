import type { ReactNode } from "react";
import { Button } from "@/shared/ui/button";
import { Container } from "@/shared/ui/container";
import { SectionTitle } from "@/shared/ui/section-title";

type WishlistHeaderProps = {
  title: string;
  count: number;
  description?: string;
  actionsSlot?: ReactNode;
  onMoveAllToCart?: () => void;
  onClearWishlist?: () => void;
  isMoveAllDisabled?: boolean;
  isClearDisabled?: boolean;
};

export const WishlistHeader = ({
  title,
  description,
  count,
  actionsSlot,
  onMoveAllToCart,
  onClearWishlist,
  isMoveAllDisabled = false,
  isClearDisabled = false,
}: WishlistHeaderProps) => {
  return (
    <header className="py-8 md:py-12 lg:py-16">
      <Container>
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-col gap-8 md:gap-12 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionTitle
                variant="hero"
                as="h1"
                classNameSubContent="text-sm"
                subContent={
                  <div className="flex flex-col gap-1">
                    {description ? <p className="text-neutral-600">{description}</p> : null}
                    <p className="text-neutral-600">
                      <span className="font-medium text-brand-dark">{count}</span> items saved
                    </p>
                  </div>
                }
              >
                {title}
              </SectionTitle>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {actionsSlot ?? (
                <>
                  <Button
                    variant="outlineDark"
                    size="medium"
                    type="button"
                    disabled={isMoveAllDisabled}
                    onClick={onMoveAllToCart}
                  >
                    Move all to cart
                  </Button>

                  <Button
                    variant="ghost"
                    size="medium"
                    type="button"
                    disabled={isClearDisabled}
                    onClick={onClearWishlist}
                  >
                    Clear wishlist
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-neutral-200/80" />
        </div>
      </Container>
    </header>
  );
};

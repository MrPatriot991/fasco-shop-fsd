import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/shared/ui/button";
import { EmptyState } from "@/shared/ui/empty-state";

export const OrdersSection = () => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
      <EmptyState
        icon={<ShoppingBag size={22} className="text-neutral-700" />}
        size="sm"
        title="No orders yet"
        description="This is demo mode. Your future orders will appear here."
        action={
          <Button asChild variant="outlineDark">
            <Link to="/shop">Start shopping</Link>
          </Button>
        }
      />
    </div>
  );
};

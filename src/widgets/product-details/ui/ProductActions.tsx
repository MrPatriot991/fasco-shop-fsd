import { Link } from "react-router-dom";
import { ArrowUpDown, CircleQuestionMark, Share2 } from "lucide-react";
import { Button } from "@/shared/ui";

const PRODUCT_ACTIONS = [
  { to: "/compare", icon: ArrowUpDown, label: "Compare" },
  { to: "/help", icon: CircleQuestionMark, label: "Ask a question" },
  { to: "/share", icon: Share2, label: "Share" },
];

export const ProductActions = () => {
  return (
    <>
      <div className="flex flex-wrap gap-8 text-brand-black mb-3">
        {PRODUCT_ACTIONS.map(({ to, icon: Icon, label }) => (
          <Button key={label} asChild variant="linkPlain" size="none">
            <Link to={to} className="flex items-center gap-2">
              <Icon size={20} />
              <span>{label}</span>
            </Link>
          </Button>
        ))}
      </div>
      <hr className="border-gray-200 mb-8" />
    </>
  );
};

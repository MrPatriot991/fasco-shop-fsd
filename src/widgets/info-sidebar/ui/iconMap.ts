import { MessageCircle, Receipt, FileText, Briefcase, BookOpen, HelpCircle } from "lucide-react";
import type { InfoType } from "@/entities/info";

export const INFO_ICON_MAP: Record<
  InfoType,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  support: MessageCircle,
  invoicing: Receipt,
  contract: FileText,
  careers: Briefcase,
  blog: BookOpen,
  faq: HelpCircle,
};

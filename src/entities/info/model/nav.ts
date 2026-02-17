import { MessageCircle, Receipt, FileText, Briefcase, BookOpen, HelpCircle } from "lucide-react";
import type { NavItem } from "./types";

export const FOOTER_NAV: NavItem[] = [
  { label: "Support Center", path: "/support", type: "route", icon: MessageCircle },
  { label: "Invoicing", path: "/invoicing", type: "route", icon: Receipt },
  { label: "Contract", path: "/contract", type: "route", icon: FileText },
  { label: "Careers", path: "/careers", type: "route", icon: Briefcase },
  { label: "Blog", path: "/blog", type: "route", icon: BookOpen },
  { label: "FAQ", path: "/faq", type: "route", icon: HelpCircle },
];

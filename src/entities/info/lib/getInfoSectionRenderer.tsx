import type { ReactNode } from "react";
import type {
  AccordionContent,
  BlogContent,
  CareersContent,
  DocumentContent,
  InfoContent,
  InfoType,
} from "@/entities/info/model/types";
import {
  AccordionSection,
  BlogSection,
  CareersSection,
  DocumentSection,
} from "@/entities/info/ui/section";

type Renderer = (content: InfoContent) => ReactNode;

const SECTION_COMPONENTS: Record<InfoType, Renderer> = {
  faq: (content) => <AccordionSection items={(content as AccordionContent).items} />,
  support: (content) => <AccordionSection items={(content as AccordionContent).items} />,
  invoicing: (content) => <DocumentSection sections={(content as DocumentContent).sections} />,
  contract: (content) => <DocumentSection sections={(content as DocumentContent).sections} />,
  careers: (content) => <CareersSection jobs={(content as CareersContent).jobs} />,
  blog: (content) => <BlogSection posts={(content as BlogContent).posts} />,
};

export const getInfoSectionRenderer = (type: InfoType): Renderer =>
  SECTION_COMPONENTS[type] ?? SECTION_COMPONENTS.faq;

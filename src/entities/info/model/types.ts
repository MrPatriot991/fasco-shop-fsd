export type InfoType = "faq" | "support" | "invoicing" | "contract" | "careers" | "blog";

export interface NavItem {
  label: string;
  path: string;
  type: "route";
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface DocumentSectionItem {
  heading: string;
  body: string;
}

export interface Job {
  title: string;
  type: string;
  location: string;
  desc: string;
}

export interface BlogPost {
  img: string;
  date: string;
  tag: string;
  title: string;
}

export interface InfoContentBase {
  title: string;
  description: string;
}

export interface AccordionContent extends InfoContentBase {
  items: FaqItem[];
}

export interface DocumentContent extends InfoContentBase {
  sections: DocumentSectionItem[];
}

export interface CareersContent extends InfoContentBase {
  jobs: Job[];
}

export interface BlogContent extends InfoContentBase {
  posts: BlogPost[];
}

export type InfoContent = AccordionContent | DocumentContent | CareersContent | BlogContent;

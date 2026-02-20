import { BlogSection } from "@/widgets/blog-grid";
import { CareersSection } from "@/widgets/careers-list";
import { DocumentSection } from "@/widgets/document-viewer";
import { AccordionSection } from "@/widgets/faq-accordion";
import type { InfoContent } from "@/entities/info";

export const renderInfoSection = (content: InfoContent) => {
  switch (content.type) {
    case "faq":
    case "support":
      return <AccordionSection items={content.items} />;

    case "invoicing":
    case "contract":
      return <DocumentSection sections={content.sections} />;

    case "careers":
      return <CareersSection jobs={content.jobs} />;

    case "blog":
      return <BlogSection posts={content.posts} />;
  }
};

import { Download } from "lucide-react";
import { Button } from "@/shared/ui";
import type { DocumentSectionItem } from "@/entities/info/model/types";

interface DocumentSectionProps {
  sections: DocumentSectionItem[];
  downloadHref?: string;
  onDownload?: () => void;
  downloadLabel?: string;
}

export const DocumentSection = ({
  sections,
  downloadHref,
  onDownload,
  downloadLabel = "Download as PDF",
}: DocumentSectionProps) => {
  return (
    <section aria-label="Document details" className="space-y-8">
      <div className="space-y-8">
        {sections.map((section) => (
          <article key={section.heading} className="group">
            <h3 className="mb-2 text-lg font-semibold tracking-tight text-slate-800">{section.heading}</h3>
            <p className="text-[15px] leading-[1.85] text-slate-600">{section.body}</p>
          </article>
        ))}
      </div>

      <footer className="border-slate-200 mt-10 border-t pt-8">
        {downloadHref ? (
          <Button asChild variant="outlineBlue" size="medium" className="gap-2">
            <a href={downloadHref} download>
              <Download size={16} />
              {downloadLabel}
            </a>
          </Button>
        ) : (
          <Button variant="outlineBlue" size="medium" className="gap-2" onClick={onDownload}>
            <Download size={16} />
            {downloadLabel}
          </Button>
        )}
      </footer>
    </section>
  );
};

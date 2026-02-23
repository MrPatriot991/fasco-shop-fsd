import { SectionTitle } from "@/shared/ui/section-title";

interface SecuritySectionProps {
  email?: string;
}

export const SecuritySection = ({ email }: SecuritySectionProps) => {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6 md:p-8">
      <SectionTitle
        as="h2"
        align="left"
        variant="section"
        subContent={
          <p className="text-sm md:text-base">Current authentication status in this demo app.</p>
        }
        classNameWrapper="gap-3"
      >
        Security
      </SectionTitle>
      <div className="mt-6 rounded-xl border border-dashed border-neutral-300 bg-surface-muted p-4">
        <p className="font-medium text-brand-dark">Demo auth mode (no backend)</p>
        <p className="mt-2 text-sm text-brand-gray">
          Session is stored in browser storage and expires locally.
        </p>
        <p className="mt-3 text-sm text-brand-dark">Signed in as: {email ?? "Guest"}</p>
      </div>
    </div>
  );
};

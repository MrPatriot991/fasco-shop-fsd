import type { ReactNode } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";
import { InfoNav } from "@/widgets/info-sidebar";

interface InfoLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  sidebar?: ReactNode;
  className?: string;
  onContactSupport?: () => void;
  supportCardLabel?: string;
  supportCardTitle?: string;
  supportCardText?: string;
}

export const InfoLayout = ({
  title,
  description,
  children,
  sidebar,
  className,
  onContactSupport,
  supportCardLabel = "Contact Us",
  supportCardTitle = "Need help?",
  supportCardText = "Our team replies within 24 hours on business days.",
}: InfoLayoutProps) => {
  return (
    <div className={cn("min-h-screen bg-white", className)}>
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 py-12 md:flex-row">
        <aside className="shrink-0 md:w-1/4">
          <div className="sticky top-6">
            <p className="mb-4 pl-1 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              Navigation
            </p>

            {sidebar ?? <InfoNav />}

            <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
              <p className="mb-1 text-xs font-semibold text-indigo-700">{supportCardTitle}</p>
              <p className="text-xs leading-relaxed text-indigo-500">{supportCardText}</p>

              <Button
                variant="linkPlain"
                size="none"
                className="mt-3 inline-flex gap-1 px-0 py-0 text-xs font-medium text-indigo-600 hover:text-indigo-800"
                onClick={onContactSupport}
              >
                {supportCardLabel}
                <ArrowRight size={11} />
              </Button>
            </div>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="mb-8 border-b border-slate-200 pb-6">
            <h1 className="mb-2 text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-500">{description}</p>
          </header>

          <div>{children}</div>

          <footer className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">Did not find what you were looking for?</p>
            <Button
              variant="surface"
              size="medium"
              className="gap-2 rounded-xl"
              onClick={onContactSupport}
            >
              <MessageCircle size={15} />
              {supportCardLabel}
            </Button>
          </footer>
        </main>
      </div>
    </div>
  );
};

import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/shared/ui/button";
import type { Job } from "@/entities/info";

interface CareersSectionProps {
  jobs: Job[];
  onApply?: (job: Job) => void;
  applyLabel?: string;
}

export const CareersSection = ({
  jobs,
  onApply,
  applyLabel = "Apply Now",
}: CareersSectionProps) => {
  if (jobs.length === 0) {
    return <p className="text-sm text-slate-500">No open positions right now.</p>;
  }

  return (
    <section aria-label="Open positions" className="flex flex-col gap-5">
      {jobs.map((job) => (
        <article
          key={`${job.title}-${job.location}`}
          className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-indigo-300 hover:shadow-md"
        >
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-indigo-600">
                {job.title}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Clock size={13} />
                  {job.type}
                </span>
                <span className="inline-flex items-center gap-1">
                  <MapPin size={13} />
                  {job.location}
                </span>
              </div>
            </div>

            <Button
              variant="outlineBlue"
              size="medium"
              className="shrink-0 gap-1.5"
              onClick={() => onApply?.(job)}
            >
              {applyLabel}
              <ArrowRight size={14} />
            </Button>
          </div>

          <p className="text-sm leading-relaxed text-slate-600">{job.desc}</p>
        </article>
      ))}
    </section>
  );
};


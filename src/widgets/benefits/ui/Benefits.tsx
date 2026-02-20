import { Section } from "@/shared/ui/section";
import { Quality } from "@/shared/ui/icons";
import { Protection } from "@/shared/ui/icons";
import { Shipping } from "@/shared/ui/icons";
import { Support } from "@/shared/ui/icons";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const benefits: Benefit[] = [
  { icon: <Quality />, title: "High Quality", desc: "crafted from top materials" },
  { icon: <Protection />, title: "Warrany Protection", desc: "Over 2 years" },
  { icon: <Shipping />, title: "Free Shipping", desc: "Order over 150 $" },
  { icon: <Support />, title: "24 / 7 Support", desc: "Dedicated support" },
];

export const Benefits = () => {
  return (
    <Section spacing="compact" className="bg-brand-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="flex items-center  gap-3  rounded p-4 bg-brand-white shadow-subtle lg:shadow-none"
          >
            <div>{icon}</div>
            <div>
              <div className="text-brand-dark">{title}</div>
              <div className="text-brand-dark">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};


import { Container } from "@/shared/ui";
import { Quality } from "@/shared/ui";
import { Protection } from "@/shared/ui";
import { Shipping } from "@/shared/ui";
import { Support } from "@/shared/ui";

const benefits = [
  { icon: <Quality />, title: "High Quality", desc: "crafted from top materials" },
  { icon: <Protection />, title: "Warrany Protection", desc: "Over 2 years" },
  { icon: <Shipping />, title: "Free Shipping", desc: "Order over 150 $" },
  { icon: <Support />, title: "24 / 7 Support", desc: "Dedicated support" },
];

export const Benefits = () => {
  return (
    <section className="bg-brand-white py-8 md:py-10 shadow-section-float">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="flex items-center  gap-3  rounded p-4 bg-brand-white shadow-subtle"
            >
              <div>{icon}</div>
              <div>
                <div className="text-brand-dark">{title}</div>
                <div className="text-brand-dark">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

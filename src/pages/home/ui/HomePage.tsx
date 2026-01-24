import { Deals } from "@/widgets/deals";
import { Hero } from "@/widgets/hero";
import { Packages } from "@/widgets/packages";
import { Benefits } from "@/widgets/benefits";
import { InstagramFeed } from "@/widgets/instagram-feed";
import { Reviews } from "@/widgets/reviews";
import { NewsLetter } from "@/widgets/news-latter";
import { Footer } from "@/widgets/footer";
import { NewArrivals } from "@/widgets/new-arrivals";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Deals />
      <NewArrivals/>
      <Packages />
      <Benefits />
      <InstagramFeed />
      <Reviews />
      <NewsLetter />
      <Footer />
    </>
  );
};

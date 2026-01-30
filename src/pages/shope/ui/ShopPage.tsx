import { Packages } from "@/widgets/packages";
import { Benefits } from "@/widgets/benefits";
import { InstagramFeed } from "@/widgets/instagram-feed";
import { NewsLetter } from "@/widgets/news-latter";
import { Footer } from "@/widgets/footer";

export const ShopPage = () => {
  return (
    <>
      <Packages />
      <Benefits />
      <InstagramFeed />
      <NewsLetter />
      <Footer />
    </>
  );
};

import VideoPortfolio from "@/components/portofolio";
import Hero from "../../components/hero";
import { Testimonials } from "@/components/testimonials";
import { AdsTesttimonials } from "@/constants/ads/adstestimonials";
import { pricingTiersAds } from "@/constants/ads/pricing";
import { Pricing } from "../../components/price";
import Footer from "@/components/footer";
import VideoTestimonials from "@/components/videoTestimonials";
import { VideoAdsTesttimonials } from "@/constants/ads/videoTestimonials";
import Dami from "@/components/dami";
import Faq from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Youtube() {
  const videos = [
    {
      id: "1",
      title: "Sample Video 1",
      driveId: "1yY9ATgtBhRHF68NyfaFeyXDeSOYyPhWE",
    },
    {
      id: "2",
      title: "Sample Video 2",
      driveId: "182cQxVjQvurA71goWLocR7AzUmNeRhOW",
    },
    {
      id: "3",
      title: "Sample Video 3",
      driveId: "13ijHMujM8icgH4tG-1VKFHsMHM91ndI3",
    },
    {
      id: "4",
      title: "Sample Video 4",
      driveId: "1vfVlYtkalV9URTTuytYG92-t0y4MxV2l",
    },
    {
      id: "5",
      title: "Sample Video 5",
      driveId: "1WOwNa40sqjnL9iFEpM_DWW4rWEK1i-Kt",
    },
    {
      id: "6",
      title: "Sample Video 6",
      driveId: "1PgxJkeEQJ-Uy31JJrPtjktY__kGpJUMg",
    },
  ];

  return (
    <div>
      <Hero
        headerText="The secret to higher conversion rates?"
        titleText="Engaging editing"
        ctaText="Sit back and relax as I generate you sales"
        buttonText="Order a Video"
      />
      <VideoPortfolio
        title="Here's what I've done for other clients:"
        videos={videos}
      />

      <Testimonials testimonials={AdsTesttimonials} />
      <VideoTestimonials successStories={VideoAdsTesttimonials} />
      <Dami />
      <Pricing pricingTiers={pricingTiersAds} />
      <CTA
        title="My guarantee to you"
        subtitle="Unlimited revisions until you exceed your expectations "
        buttonText="Contact me"
        trustText="Trusted by 50+ clients"
      />
      <Faq />
      <Footer />
    </div>
  );
}

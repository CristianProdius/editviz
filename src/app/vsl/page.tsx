import VideoPortfolio from "@/components/portofolio";
import Hero from "../../components/hero";
import { Testimonials } from "@/components/testimonials";
import { YouTubeTesttimonials } from "@/constants/youtube/youtubetestimonials";
import { pricingTiersVSL } from "@/constants/VSL/pricing";
import { Pricing } from "../../components/price";
import Footer from "@/components/footer";
import VideoTestimonials from "@/components/videoTestimonials";
import { VideoYouTubeTesttimonials } from "@/constants/youtube/videoTestimonials";
import Dami from "@/components/dami";
import Faq from "@/components/faq";
import { CTA } from "@/components/cta";

export default function Youtube() {
  const videos = [
    {
      id: "1",
      title: "Online Course VSL trailer",
      driveId: "1EQtzOatKR9Y2l49pllOrClZZc59CAPeC",
    },
    {
      id: "2",
      title: "Academy of the swipe VSL",
      driveId: "1tasfY5P6Rs4Qabb3O6x-g_EpQihJ9c3k",
    },
    {
      id: "3",
      title: "Ken AI VSL",
      driveId: "1EHWWRtyeKTp5OM-_lUK-MopThAiniYpV",
    },
  ];

  return (
    <div>
      <Hero
        headerText="The secret to closing more sales?"
        titleText="Engaging VSLs"
        ctaText="Sit back and relax as I generate you sales"
        buttonText="Order a video"
      />
      <VideoPortfolio
        title="Here's what I've done for other clients:"
        videos={videos}
      />

      <Testimonials testimonials={YouTubeTesttimonials} />
      <VideoTestimonials successStories={VideoYouTubeTesttimonials} />
      <Dami />
      <Pricing pricingTiers={pricingTiersVSL} />
      <CTA
        title="Get sales through emotions"
        subtitle="Order a VSL Edit today"
        buttonText="Contact me"
        trustText="25+ VSLs edited"
      />
      <Faq />
      <Footer />
    </div>
  );
}

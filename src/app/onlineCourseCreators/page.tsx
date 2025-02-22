import VideoPortfolio from "@/components/portofolio";
import Hero from "../../components/hero";
import { Testimonials } from "@/components/testimonials";
import { YouTubeTesttimonials } from "@/constants/youtube/youtubetestimonials";
import { pricingTiersCurs } from "@/constants/onlineCourseCreators/pricing";
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
      title: "How to use auto-captions in CapCut",
      driveId: "11BCyBf1dC8QZQjmm-l_tUYwfGGXBCWit",
    },
    {
      id: "2",
      title: "Building an Email Automation",
      driveId: "1mDuo5VMb6x6TZhPg41P8bBU-l4biaSQC",
    },
    {
      id: "3",
      title: "Transferring Domains",
      driveId: "18WVr7rXFMvJjT-MFdzwo6QqfwVHqyh0W",
    },
  ];

  return (
    <div>
      <Hero
        headerText="The secret to more online course sales?"
        titleText="Engaging editing"
        ctaText="Sit back and relax as I blow up your online course"
        buttonText="order a video"
      />
      <VideoPortfolio
        title="Here's what I've done for other clients:"
        videos={videos}
      />

      <Testimonials testimonials={YouTubeTesttimonials} />
      <VideoTestimonials successStories={VideoYouTubeTesttimonials} />
      <Dami />
      <Pricing pricingTiers={pricingTiersCurs} />
      <CTA
        title="My guarantee to you"
        subtitle="Unlimited revisions until you exceed your expectations "
        buttonText="Contact me"
        trustText="Trusted by 13+ clients"
      />
      <Faq />
      <Footer />
    </div>
  );
}

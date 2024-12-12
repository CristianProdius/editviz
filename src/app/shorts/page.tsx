import VideoPortfolio from "@/components/portofolio";
import Hero from "../../components/hero";
import { Testimonials } from "@/components/testimonials";
import { YouTubeTesttimonials } from "@/constants/youtube/youtubetestimonials";
import { pricingTiersSh } from "@/constants/shorts/pricing";
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
      title: "Do Online Courses need editing?",
      driveId: "1YH2BmQnK1LNLnHVHNCSE9QgH4QhIaMkm",
    },
    {
      id: "2",
      title: "How to Learn Programing",
      driveId: "1Qk3-rNz3m9-ygf1gjUbc9V7c9CFNlk0Z",
    },
    {
      id: "3",
      title: "making money from python",
      driveId: "1r_a4mACDNn6xIBCWWd4GDSWk4kqygYz5",
    },
    {
      id: "4",
      title: "Harsh truth",
      driveId: "1aXDAVDIxm0KSjdmd9ajS1E4XU4hbGNzk",
    },

    {
      id: "5",
      title: "Where I get my mentors",
      driveId: "1MSNSC-1VU_yxt69-0t3o3NYkFJR6fc1N",
    },
  ];

  return (
    <div>
      <Hero
        headerText="The secret to blowing up TikToks / Reels / Shorts?"
        titleText="Engaging editing"
        ctaText="Sit back and relax as I blow up your shorts"
        buttonText="Order a video"
      />
      <VideoPortfolio
        title="Here's what I've done for other clients:"
        videos={videos}
      />

      <Testimonials testimonials={YouTubeTesttimonials} />
      <VideoTestimonials successStories={VideoYouTubeTesttimonials} />
      <Dami />
      <Pricing pricingTiers={pricingTiersSh} />
      <CTA
        title="Go Viral By Tomorrow"
        subtitle="Get me to edit your next video"
        buttonText="Order a video"
        trustText="Edited over 358 shorts"
      />
      <Faq />
      <Footer />
    </div>
  );
}

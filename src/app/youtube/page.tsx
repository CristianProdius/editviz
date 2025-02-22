import VideoPortfolio from "@/components/portofolio";
import Hero from "../../components/hero";
import { Testimonials } from "@/components/testimonials";
import { YouTubeTesttimonials } from "@/constants/youtube/youtubetestimonials";
import { pricingTiersYT } from "@/constants/youtube/pricing";
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
      title: "9 things I learned in my 20s \n(Iman Gadzhi style)",
      driveId: "1ZW0SzmvqeRoYM74MLqR0e4zNb-kS_GzH",
    },
    {
      id: "2",
      title: "How to become a sales appointment setter \n(Iman Gadzhi style)",
      driveId: "1WuirKd9KNUiHJkDi7-t_ToYALT0rddow",
    },
    {
      id: "3",
      title: "Is online teaching worth it? \n(talking head style)",
      driveId: "1nb8TUJwxf9AOe62OrVXmtBT8ZmtMsVlf",
    },
    {
      id: "4",
      title: "How to create a walmart shipment \n(Iman Gadzhi style)",
      driveId: "1z2FXaSsfzG_gxXXd38VI8keSCbdrdbHp",
    },
    {
      id: "5",
      title: "How to create horror stories with AI \n(Iman Gadzhi style)",
      driveId: "1sKYESgYZpABjHAmCZv7Tg8Z9Bk8Aj_hl",
    },
    {
      id: "6",
      title: "How I made 60k with dropshipping \n(talking head style)",
      driveId: "1PgxJkeEQJ-Uy31JJrPtjktY__kGpJUMg",
    },
  ];

  return (
    <div>
      <Hero
        headerText="The secret to blowing up YouTube videos?"
        titleText="UNIQUE EDITING STYLE."
        ctaText="Sit back and relax as I blow up your YouTube channel"
        buttonText="Message me"
      />
      <VideoPortfolio
        title="Here's what I've done for other clients:"
        videos={videos}
      />

      <Testimonials testimonials={YouTubeTesttimonials} />
      <VideoTestimonials successStories={VideoYouTubeTesttimonials} />
      <Dami />
      <Pricing pricingTiers={pricingTiersYT} />
      <CTA
        title="Create bangers without having to worry about editing"
        subtitle=" I'll take care of the editing so you can focus on creating"
        buttonText="Get in contact"
        trustText="Trusted by 27+ clients"
      />
      <Faq />
      <Footer />
    </div>
  );
}

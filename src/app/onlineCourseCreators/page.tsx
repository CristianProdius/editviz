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
      title: "Sample Video 1",
      driveId: "1ZW0SzmvqeRoYM74MLqR0e4zNb-kS_GzH",
    },
    {
      id: "2",
      title: "Sample Video 2",
      driveId: "1WuirKd9KNUiHJkDi7-t_ToYALT0rddow",
    },
    {
      id: "3",
      title: "Sample Video 3",
      driveId: "1nb8TUJwxf9AOe62OrVXmtBT8ZmtMsVlf",
    },
    {
      id: "4",
      title: "Sample Video 4",
      driveId: "1z2FXaSsfzG_gxXXd38VI8keSCbdrdbHp",
    },
    {
      id: "5",
      title: "Sample Video 5",
      driveId: "1sKYESgYZpABjHAmCZv7Tg8Z9Bk8Aj_hl",
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
        title="Custom Title Here"
        subtitle="Custom subtitle text here"
        buttonText="Custom Button Text"
        trustText="Custom trust message"
      />
      <Faq />
      <Footer />
    </div>
  );
}

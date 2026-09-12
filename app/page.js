import Hero from "@/components/Hero";
import PassionBanner from "@/components/PassionBanner";
import ShapingArtists from "@/components/ShapingArtists";
import DoodleBand from "@/components/DoodleBand";
import WhatToExpect from "@/components/WhatToExpect";
import RightForYourChild from "@/components/RightForYourChild";
import JourneyPath from "@/components/JourneyPath";
import SeriousAmbitions from "@/components/SeriousAmbitions";
import Partners from "@/components/Partners";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <PassionBanner />
      <ShapingArtists />
      <DoodleBand base="#d60000" doodle="#e57878" offset="87.34vw" className="h-6 sm:h-8 lg:h-[5.9vw]" />
      <WhatToExpect />
      <RightForYourChild />
      <JourneyPath />
      <SeriousAmbitions />
      <Partners />
      <Faq />
      <div className="relative z-20">
        <CtaBanner />
      </div>
      <SiteFooter />
    </main>
  );
}

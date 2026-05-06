import { Navbar } from "@/components/layout/Navbar";
import { MobileScrollWhatsAppFab } from "@/components/layout/MobileScrollWhatsAppFab";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Authority } from "@/components/sections/Authority";
import { Services } from "@/components/sections/Services";
import { Personas } from "@/components/sections/Personas";
import { OperationFlow } from "@/components/sections/OperationFlow";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MobileScrollWhatsAppFab />
      <main id="main">
        <Hero />
        <Authority />
        <Services />
        <Personas />
        <OperationFlow />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

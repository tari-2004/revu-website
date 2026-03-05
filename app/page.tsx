import RevuNavbar from "./components/RevuNavbar"; // Re-adapted for Revu
import RevuHero from "./components/RevuHero";
import RevuServices from "./components/RevuServices";
import WhyRevu from "./components/WhyRevu";
import RevuAbout from "./components/RevuAbout";
import HowItWorks from "./components/HowItWorks";
import RevuCTA from "./components/RevuCTA";
import RevuContact from "./components/RevuContact";
import RevuFooter from "./components/RevuFooter"; // Re-adapted for Revu

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* NAVBAR: Using the refined Revu brand colors
      */}
      <RevuNavbar />

      {/* HERO: The "First 5 Seconds" hook 
      */}
      <RevuHero />

      {/* SERVICES: The 3-Column digital solutions grid 
      */}
      <RevuServices />

      {/* WHY CHOOSE US: Highlighting trust and speed 
      */}
      <WhyRevu />

      {/* ABOUT SECTION: The "Narrative" of the brand 
      */}
      <RevuAbout />

      {/* PROCESS: How it works (The 1-2-3 Steps) 
      */}
      <HowItWorks />

      {/* CTA: The final conversion push 
      */}
      <RevuCTA />

      {/* CONTACT: Lead generation and support 
      */}
      <RevuContact />

      {/* FOOTER: Full navigation and legal links 
      */}
      <RevuFooter />
    </main>
  );
}
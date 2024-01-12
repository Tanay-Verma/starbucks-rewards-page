import GettingStartedSection from "@/components/getting-started/getting-started";
import HeroImageBanner from "@/components/main/hero-image";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main className="absolute">
      <Navbar />
      <HeroImageBanner />
      <GettingStartedSection />
    </main>
  );
}

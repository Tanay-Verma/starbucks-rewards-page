import GettingStartedSection from "@/components/getting-started/getting-started";
import HeroImageBanner from "@/components/main/hero-image";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HeroImageBanner />
      <GettingStartedSection />
    </main>
  );
}

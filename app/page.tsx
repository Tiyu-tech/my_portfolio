import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <HeroSection />
      <AboutSection />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import NavBar from "@/components/NavBar";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main>
      <NavBar></NavBar>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}

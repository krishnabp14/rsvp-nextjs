import { ConnectWithMe } from "@/components/portfolio/ConnectWithMe";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { NavBar } from "@/components/portfolio/Navbar";
import { Skills } from "@/components/portfolio/SkillsSection";

const Portfolio = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="w-full mx-auto md:max-w-[700px] px-4">
        <NavBar />
        <HeroSection />
        <Skills />
        <ConnectWithMe />
      </div>
    </div>
  );
};

export default Portfolio;

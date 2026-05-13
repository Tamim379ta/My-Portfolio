import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/Education";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <SkillSection/>
      <EducationSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
  );
}

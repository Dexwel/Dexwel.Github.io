import { Hero } from "@/components/Hero";
import { ResearchInterests } from "@/components/ResearchInterests";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Publications } from "@/components/Publications";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ResearchInterests />
      <Education />
      <Experience />
      <Publications />
    </div>
  );
};

export default Index;
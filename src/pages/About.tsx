import { AboutHeader } from "@/components/about/AboutHeader";
import { CoreFeatures } from "@/components/about/CoreFeatures";
import { TeamSection } from "@/components/about/TeamSection";
import { CTASection } from "@/components/about/CTASection";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHeader />
      <CoreFeatures />
      <TeamSection />
      <CTASection />
    </div>
  );
}
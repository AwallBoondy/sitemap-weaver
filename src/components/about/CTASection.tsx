import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's discuss how we can help you achieve your brand's full potential through innovative design and strategic thinking.
        </p>
        <Button size="lg" className="gap-2">
          Get in Touch <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

export function AboutHeader() {
  return (
    <section className="pt-24 pb-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary mb-6">
          MB Brand Studio
        </h1>
        <p className="text-xl text-muted-foreground">
          Transforming visions into impactful brand experiences through innovative design and strategic thinking.
        </p>
      </div>
    </section>
  );
}
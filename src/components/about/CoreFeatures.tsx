import { Card, CardContent } from "@/components/ui/card";
import { Brain, Palette, Target } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Strategic Design Thinking",
    description: "Our design approach goes beyond aesthetics—it's a powerful tool for cultural and strategic renewal."
  },
  {
    icon: Palette,
    title: "European Design Heritage",
    description: "Unique fusion of European design principles, sacred geometry, and technological innovation."
  },
  {
    icon: Target,
    title: "Transformative Results",
    description: "Our multidisciplinary approach integrates design and financial strategies for lasting impact."
  }
];

export function CoreFeatures() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <Icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
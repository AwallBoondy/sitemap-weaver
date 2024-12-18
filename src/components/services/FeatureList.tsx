import { Card, CardContent } from "@/components/ui/card";
import { Palette, Target, Users, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design-driven Growth",
    description: "Strategic design solutions that drive business success"
  },
  {
    icon: Target,
    title: "Market Positioning",
    description: "Precise positioning strategies for market leadership"
  },
  {
    icon: Users,
    title: "Board Involvement",
    description: "Direct collaboration with key stakeholders"
  },
  {
    icon: Lightbulb,
    title: "DNA Reconstruction",
    description: "Complete brand DNA analysis and optimization"
  }
];

export function FeatureList() {
  return (
    <div>
      <h2 className="heading-2 text-center mb-12">Why Choose Us</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
}
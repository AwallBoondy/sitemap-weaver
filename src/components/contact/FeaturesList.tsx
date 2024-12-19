import { Check } from "lucide-react";

export function FeaturesList() {
  const features = [
    "Brand transformation expertise",
    "Strategic partnership opportunities",
    "Custom design solutions",
    "Market research and analysis",
    "Digital innovation consulting",
    "Creative direction services",
  ];

  return (
    <section className="container-padding section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="heading-2 text-center mb-12">Why Work With Us</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <div className="mt-1">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <p className="body-text">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
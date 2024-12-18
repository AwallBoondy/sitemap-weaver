import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/components/services/ServiceCard";
import { TestimonialCard } from "@/components/services/TestimonialCard";
import { FeatureList } from "@/components/services/FeatureList";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Essential Identity",
    description: "A foundational brand refresh service that establishes your core identity elements.",
    priceRange: "€15,000-€25,000",
    features: [
      "Brand strategy development",
      "Visual identity design",
      "Basic brand guidelines",
      "Essential brand assets"
    ]
  },
  {
    title: "Complete Brand System",
    description: "Comprehensive identity and strategic development process for established businesses.",
    priceRange: "€30,000-€50,000",
    features: [
      "Full brand strategy",
      "Comprehensive visual system",
      "Detailed brand guidelines",
      "Marketing collateral design"
    ]
  },
  {
    title: "Enterprise Brand Evolution",
    description: "Holistic brand transformation with comprehensive market research and strategic planning.",
    priceRange: "€60,000-€120,000+",
    features: [
      "Market research & analysis",
      "Complete brand transformation",
      "Global brand architecture",
      "Implementation strategy"
    ]
  }
];

const testimonials = [
  {
    quote: "The transformation of our brand exceeded all expectations. MB Brand Studio delivered exceptional value.",
    author: "Marie Laurent",
    company: "Luxury Maison",
    role: "Creative Director"
  },
  {
    text: "Their strategic approach to branding helped us achieve remarkable market growth.",
    author: "Thomas Weber",
    company: "Tech Innovations GmbH",
    role: "CEO"
  }
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Header Section */}
      <section className="section-padding pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center"
        >
          <h1 className="heading-1 mb-6">Brand Transformation Services</h1>
          <p className="body-text max-w-2xl mx-auto">
            Elevate your brand with our comprehensive suite of strategic design services,
            crafted to transform your business identity with European precision and elegance.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="section-padding bg-white/50">
        <div className="container">
          <FeatureList />
        </div>
      </section>

      {/* Investment Section */}
      <section className="section-padding">
        <div className="container">
          <Card className="border-none">
            <CardContent className="p-8">
              <h2 className="heading-2 mb-6 text-center">Investment & Returns</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="heading-3 mb-4">Transformation Model</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li>• Initial diagnostic fee: €5,000-€25,000</li>
                    <li>• Project timeline: 3-6 months</li>
                    <li>• Potential equity stakes: 20-40%</li>
                    <li>• Projected 5-year ROI: 25-40%</li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-3 mb-4">Value Creation</h3>
                  <p className="body-text">
                    Our strategic approach combines design excellence with business acumen,
                    delivering measurable results and sustainable growth for your brand.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white/50">
        <div className="container">
          <h2 className="heading-2 text-center mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Ready to Transform Your Brand?</h2>
          <p className="body-text max-w-2xl mx-auto mb-8">
            Let's discuss how we can elevate your brand to new heights with our strategic design services.
          </p>
          <Button asChild size="lg" className="gap-2">
            <Link to="/contact">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
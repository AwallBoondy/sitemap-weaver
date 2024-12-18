import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Strategic Design",
    description: "Transform your brand with our innovative design solutions.",
  },
  {
    title: "Business Growth",
    description: "Accelerate your business growth with data-driven strategies.",
  },
  {
    title: "Digital Innovation",
    description: "Stay ahead with cutting-edge digital transformation.",
  },
  {
    title: "Expert Consultation",
    description: "Get insights from our experienced team of consultants.",
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        {/* Hero Section */}
        <section className="section-padding pt-32 md:pt-40">
          <div className="container-padding mx-auto text-center">
            <h1 className="heading-1 max-w-3xl mx-auto">
              Transform Your Business with Strategic Design
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              We help businesses evolve through innovative design solutions and strategic transformation strategies.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-padding mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-2">Our Services</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-padding mx-auto text-center">
            <h2 className="heading-2">Ready to Transform Your Business?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your business goals through strategic design and innovation.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link to="/contact" className="flex items-center gap-2">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
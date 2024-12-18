import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  testimonial: {
    quote: string;
    author: string;
    company: string;
    role: string;
  };
}

export function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <Card className="border-none hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-primary mb-4" />
        <p className="text-lg italic mb-4">{testimonial.quote}</p>
        <div>
          <p className="font-medium">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
        </div>
      </CardContent>
    </Card>
  );
}
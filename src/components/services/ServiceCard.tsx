import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceProps {
  service: {
    title: string;
    description: string;
    priceRange: string;
    features: string[];
  };
  index: number;
}

export function ServiceCard({ service, index }: ServiceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full border-none hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-light">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">{service.description}</p>
          <p className="text-lg font-medium text-primary mb-4">{service.priceRange}</p>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-muted-foreground">
                • {feature}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function BlogHeader() {
  return (
    <section className="container-padding section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="heading-1 mb-6">Our Blog</h1>
        <p className="body-text mb-8 max-w-2xl mx-auto">
          Discover insights, trends, and expert perspectives on design, innovation, and creative solutions. Stay informed with our latest articles and industry updates.
        </p>
        <div className="relative max-w-md mx-auto">
          <Input
            type="search"
            placeholder="Search articles..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        </div>
      </div>
    </section>
  );
}
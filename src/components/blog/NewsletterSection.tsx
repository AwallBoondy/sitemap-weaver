import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export function NewsletterSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <section className="container-padding py-16 bg-muted/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="heading-2 mb-4">Subscribe to Our Newsletter</h2>
        <p className="body-text mb-8">
          Stay updated with our latest insights and articles delivered directly to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1"
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
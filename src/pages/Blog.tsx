import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogList } from "@/components/blog/BlogList";
import { NewsletterSection } from "@/components/blog/NewsletterSection";

export default function Blog() {
  return (
    <main className="pt-16">
      <BlogHeader />
      <BlogList />
      <NewsletterSection />
    </main>
  );
}
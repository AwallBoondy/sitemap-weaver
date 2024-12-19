import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Evolution of Modern Design",
    excerpt: "Explore how design trends have evolved and what it means for the future of digital experiences.",
    date: "March 15, 2024",
    category: "Design Trends",
  },
  {
    id: 2,
    title: "Sustainable Design Practices",
    excerpt: "Learn about eco-friendly design approaches and their impact on the environment.",
    date: "March 10, 2024",
    category: "Sustainability",
  },
  {
    id: 3,
    title: "User-Centered Design Principles",
    excerpt: "Discover key principles that put users at the heart of the design process.",
    date: "March 5, 2024",
    category: "UX Design",
  },
];

export function BlogList() {
  return (
    <section className="container-padding py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Card key={post.id} className="card">
            <CardHeader className="space-y-2">
              <div className="text-sm text-muted-foreground">{post.date}</div>
              <h3 className="heading-3">{post.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="body-text mb-4">{post.excerpt}</p>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
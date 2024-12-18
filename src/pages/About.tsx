import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Lightbulb, Users, Palette, Brain, Target, LineChart, MessageSquare, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-24 pb-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-primary mb-6">
            MB Brand Studio
          </h1>
          <p className="text-xl text-muted-foreground">
            Transforming visions into impactful brand experiences through innovative design and strategic thinking.
          </p>
        </div>
      </section>

      {/* Core Philosophy Feature Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Core Philosophy</h2>
                  <p className="text-muted-foreground">
                    We believe that brand design is more than aesthetics—it's a tool for cultural and strategic renewal. Our approach combines creativity with purpose, delivering designs that drive meaningful transformation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* European Design Feature Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Palette className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">European Design Heritage</h2>
                  <p className="text-muted-foreground">
                    Our unique fusion of European design principles, sacred geometry, and technological innovation sets us apart. We blend traditional craftsmanship with modern innovation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <p className="text-muted-foreground mb-4">
                From our humble beginnings to becoming a leading design studio, our journey has been marked by continuous innovation and unwavering commitment to excellence.
              </p>
              <p className="text-muted-foreground">
                Through years of dedication and countless successful projects, we've built a reputation for delivering transformative design solutions that exceed expectations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Founded in 2015</h3>
                  <p className="text-sm text-muted-foreground">Started with a vision to transform brand design</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Global Team</h3>
                  <p className="text-sm text-muted-foreground">Expanded to serve clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah Johnson",
                role: "Creative Director",
                bio: "10+ years of experience in brand strategy and design leadership"
              },
              {
                name: "Michael Chen",
                role: "Design Lead",
                bio: "Specialist in European design principles and sacred geometry"
              },
              {
                name: "Emma Williams",
                role: "Technology Director",
                bio: "Expert in integrating AI and design tools for innovative solutions"
              }
            ].map((member) => (
              <Card key={member.name} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Feature Sections */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Multidisciplinary Approach */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Brain className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Multidisciplinary Approach</h2>
                  <p className="text-muted-foreground">
                    Our integrated approach combines design thinking with financial strategies, delivering transformative results that impact both aesthetics and business outcomes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Diagnostic Tools */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <LineChart className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Advanced Analytics</h2>
                  <p className="text-muted-foreground">
                    We employ sophisticated diagnostic tools and AI-assisted market analysis to ensure data-driven design decisions that deliver measurable results.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote: "MB Brand Studio transformed our brand identity, leading to a 40% increase in market engagement.",
                author: "David Miller",
                company: "Tech Innovations Inc."
              },
              {
                quote: "Their unique approach to design strategy helped us reimagine our entire customer experience.",
                author: "Lisa Zhang",
                company: "Global Solutions Ltd."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <MessageSquare className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg mb-4 italic">{testimonial.quote}</p>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Promise Section */}
      <section className="py-12 px-4 md:px-6 lg:px-8 bg-accent/10">
        <div className="max-w-7xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Heart className="h-8 w-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Cultural Promise</h2>
                  <p className="text-muted-foreground">
                    We empower organizations to reimagine themselves through innovative design thinking and cultural transformation, creating lasting impact and meaningful change.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Brand?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help you achieve your brand's full potential through innovative design and strategic thinking.
          </p>
          <Button size="lg" className="gap-2">
            Get in Touch <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
}
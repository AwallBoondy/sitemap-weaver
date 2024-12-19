import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
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
];

export function TeamSection() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-none hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
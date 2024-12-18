import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "logos" | "branding" | "case-studies";
  imageUrl: string;
  client: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Elegant Minimalism",
    description: "A sophisticated brand identity for a luxury fashion house",
    category: "logos",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    client: "Maison de Mode",
    year: "2023"
  },
  {
    id: 2,
    title: "Heritage Redefined",
    description: "Complete brand transformation for a historic institution",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    client: "Royal Academy",
    year: "2023"
  },
  {
    id: 3,
    title: "Digital Evolution",
    description: "Strategic rebranding for a tech innovator",
    category: "case-studies",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    client: "TechVision",
    year: "2023"
  },
  {
    id: 4,
    title: "Modern Classic",
    description: "Logo design for a contemporary art gallery",
    category: "logos",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    client: "Artisan Gallery",
    year: "2023"
  }
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { toast } = useToast();

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const handleProjectClick = (project: Project) => {
    toast({
      title: project.title,
      description: `${project.description} - Created for ${project.client} in ${project.year}`,
    });
  };

  return (
    <main className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="heading-1 mb-6">Our Portfolio</h1>
        <p className="body-text max-w-2xl mx-auto">
          Discover our collection of thoughtfully crafted brands, logos, and success stories that showcase our commitment to excellence in design and strategy.
        </p>
      </motion.div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex justify-center mb-12">
          <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>
            All Work
          </TabsTrigger>
          <TabsTrigger value="logos" onClick={() => setSelectedCategory("logos")}>
            Logos
          </TabsTrigger>
          <TabsTrigger value="branding" onClick={() => setSelectedCategory("branding")}>
            Branding
          </TabsTrigger>
          <TabsTrigger value="case-studies" onClick={() => setSelectedCategory("case-studies")}>
            Case Studies
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="heading-3 mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="body-text">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="logos" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => project.category === "logos").map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="heading-3 mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="body-text">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="branding" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => project.category === "branding").map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="heading-3 mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="body-text">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="case-studies" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.filter(project => project.category === "case-studies").map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="heading-3 mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="body-text">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
const Portfolio = () => {
  const projects = [{
    title: "Job Portal Website",
    description: "A comprehensive job portal platform featuring user authentication, job posting capabilities, application management, and candidate profile creation. Built with modern web technologies for optimal user experience.",
    technologies: ["Django", "React", "HTML", "CSS", "JavaScript", "MySQL"],
    features: ["User authentication system", "Job posting and management", "Application tracking", "Candidate profiles", "Search and filtering"],
    gradient: "from-primary to-primary-light"
  }, {
    title: "E-commerce Website",
    description: "Interactive shopping experience platform with product catalog, shopping cart functionality, user accounts, and secure payment integration. Responsive design ensuring seamless experience across devices.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: ["Product catalog", "Shopping cart system", "User accounts", "Responsive design", "Interactive UI elements"],
    gradient: "from-secondary to-secondary-light"
  }, {
    title: "Alert Management System",
    description: "Real-time alert management system built with .NET framework, featuring notification handling, alert categorization, user role management, and dashboard analytics for monitoring system performance.",
    technologies: [".NET", "C#", "HTML", "CSS", "JavaScript", "MSSQL"],
    features: ["Real-time notifications", "Alert categorization", "User role management", "Dashboard analytics", "System monitoring"],
    gradient: "from-primary to-secondary"
  }];
  return <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my recent projects and technical implementations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => <Card key={project.title} className="group card-gradient shadow-soft border-0 transition-smooth hover:shadow-strong hover:scale-105 overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map(feature => <li key={feature} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>)}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth text-xs">
                        {tech}
                      </Badge>)}
                  </div>
                </div>

              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Portfolio;
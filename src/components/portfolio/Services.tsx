import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Smartphone, Server, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust server-side applications using Python Django with clean architecture and scalable design patterns.",
      features: ["Django Framework", "REST APIs", "Database Integration", "Authentication Systems"]
    },
    {
      icon: Globe,
      title: "Frontend Development", 
      description: "Modern, responsive user interfaces using React and contemporary web technologies for exceptional user experience.",
      features: ["React Development", "Responsive Design", "Modern CSS", "Interactive Components"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Efficient database architecture and optimization for MySQL and MSSQL with proper indexing and relationships.",
      features: ["MySQL & MSSQL", "Database Optimization", "Data Modeling", "Query Performance"]
    },
    {
      icon: Server,
      title: "API Integration",
      description: "Seamless third-party API integration and custom API development for enhanced application functionality.",
      features: ["RESTful APIs", "Third-party Integration", "API Documentation", "Data Synchronization"]
    },
    {
      icon: Smartphone,
      title: "Responsive UI",
      description: "Mobile-first responsive designs that work perfectly across all devices and screen sizes with modern frameworks.",
      features: ["Mobile-First Design", "Cross-Browser Compatible", "Bootstrap Integration", "Modern CSS Grid"]
    },
    {
      icon: Wrench,
      title: "Full Stack Solutions",
      description: "End-to-end web development solutions from concept to deployment with modern development practices.",
      features: ["Complete Solutions", "Modern Tech Stack", "Deployment Ready", "Maintenance Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive full-stack development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group card-gradient shadow-soft border-0 transition-smooth hover:shadow-medium hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-smooth mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={feature} 
                      className="flex items-center justify-center text-sm text-foreground/70"
                      style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05}s` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto card-gradient shadow-medium border-0">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-4 text-gradient">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's collaborate to build something amazing together. I'm committed to delivering 
                high-quality solutions that exceed your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-primary mb-1">Full Stack Development</p>
                  <p className="text-sm text-muted-foreground">Complete web solutions from start to finish</p>
                </div>
                <div className="hidden sm:block w-px bg-border mx-8"></div>
                <div className="text-center sm:text-left">
                  <p className="font-semibold text-secondary mb-1">Modern Technologies</p>
                  <p className="text-sm text-muted-foreground">Latest frameworks and best practices</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
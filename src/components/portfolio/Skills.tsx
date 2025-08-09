import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 75 },
        { name: "Java", level: 70 },
        { name: "C#", level: 65 }
      ],
      color: "primary"
    },
    {
      title: "Frameworks & Libraries",
      icon: Wrench,
      skills: [
        { name: "Django", level: 88 },
        { name: "React", level: 82 },
        { name: "Bootstrap", level: 85 },
        { name: ".NET", level: 70 },
        { name: "jQuery", level: 75 }
      ],
      color: "secondary"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Responsive Design", level: 88 },
        { name: "REST APIs", level: 80 }
      ],
      color: "primary"
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MSSQL", level: 75 },
        { name: "T-SQL", level: 70 },
        { name: "Database Design", level: 80 }
      ],
      color: "secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="card-gradient shadow-soft border-0 transition-smooth hover:shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'} mr-4`}>
                    <category.icon className={`h-6 w-6 ${category.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                            category.color === 'primary' 
                              ? 'bg-gradient-to-r from-primary to-primary-light' 
                              : 'bg-gradient-to-r from-secondary to-secondary-light'
                          }`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Full Stack Development Highlight */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto card-gradient shadow-medium border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Full Stack Development</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Specialized in end-to-end web development solutions
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Backend Development', 'Frontend Development', 'Database Design', 'API Integration', 'Responsive UI'].map((service) => (
                  <Badge 
                    key={service} 
                    variant="outline" 
                    className="border-primary/20 text-primary hover:bg-primary/10 transition-smooth px-4 py-2"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
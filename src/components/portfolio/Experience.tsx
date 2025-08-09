import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>
            
            <Card className="relative ml-20 card-gradient shadow-soft border-0 transition-smooth hover:shadow-medium">
              {/* Timeline Dot */}
              <div className="absolute -left-[4.75rem] top-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-soft"></div>
              
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Software Developer Trainee</h3>
                    <p className="text-lg font-semibold text-foreground">IPSR Solutions Ltd</p>
                  </div>
                  
                  <div className="flex flex-col md:items-end space-y-2 mt-4 md:mt-0">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Aug 2022 – Feb 2023</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Kochi, India</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <Trophy className="h-5 w-5 text-secondary mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3 text-foreground/80 leading-relaxed">
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Developed comprehensive Blood Banking System using Django framework with MySQL database integration
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Built Job Portal Website featuring user authentication, job posting, and application management
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Applied object-oriented programming principles to create scalable and maintainable code
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                        Collaborated with team members for effective troubleshooting and successful project delivery
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'OOP'].map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-primary/10 text-primary hover:bg-primary/20 transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
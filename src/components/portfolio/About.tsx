import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a keen eye for detail and a drive to create exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/80">
              I'm a detail-oriented Python Developer with 6 months of hands-on experience in Python Django web development. 
              My journey in tech began with a strong foundation in computer science, and I've since evolved into a versatile 
              full-stack developer.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/80">
              I specialize in back-end and front-end technologies, with expertise in object-oriented programming and 
              full stack development. My adaptability and problem-solving skills, combined with an eagerness to learn, 
              drive me to constantly push the boundaries of what's possible in web development.
            </p>

            <div className="flex items-center space-x-4 text-primary">
              <Heart className="h-6 w-6" />
              <span className="font-medium">Passionate about clean, efficient code</span>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="card-gradient shadow-soft border-0 transition-smooth hover:shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Education</h3>
                    <p className="text-muted-foreground">B.Sc Computer Science</p>
                    <p className="text-sm text-muted-foreground">Kannur University, Kasaragod (2019–2022)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-soft border-0 transition-smooth hover:shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Specialization</h3>
                    <p className="text-muted-foreground">Full Stack Development</p>
                    <p className="text-sm text-muted-foreground">Python Django • React • Database Design</p>
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

export default About;
import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/20 float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 rounded-lg bg-primary-light/20 float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-full bg-secondary-light/30 float" style={{ animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm <br />
            <span className="text-gradient bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Jaffar Sadiq K M
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 font-medium">
            Python Full Stack Developer
          </p>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed">
            Crafting innovative web solutions with 6 months of hands-on experience in Python Django, 
            React, and modern full-stack development. Passionate about clean code and user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-xl transition-smooth shadow-medium"
              onClick={() => scrollToSection('portfolio')}
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-smooth"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown 
              className="mx-auto h-8 w-8 text-white/60 cursor-pointer transition-smooth hover:text-white" 
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
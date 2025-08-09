import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Jaffar Sadiq K M</h3>
            <p className="text-primary-foreground/80 max-w-md mx-auto">
              Python Full Stack Developer passionate about creating innovative web solutions
            </p>
          </div>

          <div className="flex justify-center items-center space-x-2 text-sm text-primary-foreground/60 mb-6">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-secondary animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Jaffar Sadiq K M. All rights reserved.
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <Button
          onClick={scrollToTop}
          size="sm"
          className="absolute right-6 top-6 bg-secondary hover:bg-secondary-light transition-smooth shadow-medium"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
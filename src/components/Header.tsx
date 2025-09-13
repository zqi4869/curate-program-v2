import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import wiasanoLogo from "@/assets/wiasano-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={wiasanoLogo} 
              alt="wiasano logo" 
              className="h-10 md:h-12 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
              Pricing & Plans
            </a>
            <a href="#case-studies" className="text-foreground hover:text-primary transition-colors">
              Case Studies
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors cursor-pointer">
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">DE</span>
            </div>
            <Button variant="outline" className="hidden md:inline-flex">
              Login
            </Button>
            <Button>
              Try now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-foreground">
              wiasano
              <span className="inline-block w-2 h-2 bg-brand-red rounded-full ml-1"></span>
            </span>
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
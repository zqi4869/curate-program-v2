const Footer = () => {
  return (
    <footer className="w-full py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-muted-foreground">
            © wiasano
          </div>
          
          <nav className="flex items-center space-x-6 text-sm">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="#case-studies" className="text-muted-foreground hover:text-foreground transition-colors">
              Case Studies
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
            <span className="text-muted-foreground">·</span>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-white">
      {/* Top CTA Section */}
      <div className="bg-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
          <p className="text-slate-300 mb-6">Join thousands of businesses already growing with wiasano</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold">
            Try it free
          </Button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Column 1: Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <div className="space-y-2 text-slate-300">
                <p className="font-medium">wiasano GmbH</p>
                <p>Innsbruck, Austria</p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#features" className="block text-slate-300 hover:text-white transition-colors">
                  Functions
                </a>
                <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#demo" className="block text-slate-300 hover:text-white transition-colors">
                  Demo Call
                </a>
                <a href="#login" className="block text-slate-300 hover:text-white transition-colors">
                  Login
                </a>
              </nav>
            </div>

            {/* Column 3: Connect */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect</h4>
              <div className="space-y-3">
                <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </a>
                <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
              </div>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Stay updated</h4>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-slate-400">We respect your privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm">
            © 2025 wiasano GmbH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Clock } from "lucide-react";
import laptopScheduler from "@/assets/laptop-scheduler.png";
import laptopBlog from "@/assets/laptop-blog.png";
import tabletDashboard from "@/assets/tablet-dashboard.png";

const Hero = () => {
  return (
    <section className="w-full bg-hero-gradient py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Overline */}
            <div className="text-sm font-medium text-primary uppercase tracking-wider">
              AI platform for organic online marketing
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Automate online marketing
              <br />
              with your own AI
            </h1>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">Monthly marketing costs cut in half</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">Time effort reduced by half</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">5× more engagement</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                View demo now
              </Button>
            </div>
          </div>

          {/* Right Content - Images */}
          <div className="relative">
            {/* Main laptop image */}
            <div className="relative z-10">
              <img
                src={laptopScheduler}
                alt="Marketing scheduler interface on laptop showing calendar view and task management dashboard"
                className="w-full h-auto rounded-lg shadow-medium"
              />
            </div>

            {/* Secondary laptop image */}
            <div className="absolute -bottom-8 -left-8 lg:-left-12 z-20 w-3/4">
              <img
                src={laptopBlog}
                alt="Blog content management interface showing article editor and publishing tools"
                className="w-full h-auto rounded-lg shadow-medium"
              />
            </div>

            {/* Small tablet/device in top right */}
            <div className="absolute -top-4 -right-4 lg:-right-8 z-30 w-1/3">
              <img
                src={tabletDashboard}
                alt="Marketing dashboard on tablet showing analytics and widgets"
                className="w-full h-auto rounded-lg shadow-soft"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
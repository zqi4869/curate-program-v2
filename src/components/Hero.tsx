import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Clock } from "lucide-react";
import dashboardTasksGoals from "@/assets/dashboard-tasks-goals.png";

const Hero = () => {
  return (
    <section className="w-full bg-hero-gradient py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-relaxed lg:leading-loose">
              From strategy to execution: Your AI-powered marketing assistant.
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Save 50–70% of your time and up to €3000 in agency costs — proven by our customers.
            </p>

            {/* Proof of Value */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">50–70% time saved</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">~€3000 agency cost reduced</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                Based on customer median results
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg font-semibold">
                Watch Demo Video
              </Button>
            </div>
          </div>

          {/* Right Content - Dashboard Image */}
          <div className="relative lg:col-span-3">
            <img
              src={dashboardTasksGoals}
              alt="Dashboard interface showing task management, goals tracking, and productivity analytics"
              className="w-full h-auto rounded-lg shadow-medium"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
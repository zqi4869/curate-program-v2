import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Sparkles, TrendingUp, MessageCircle } from "lucide-react";
import editorialPlanImage from "@/assets/feature-editorial-plan.png";
import aiTemplatesImage from "@/assets/feature-ai-templates.png";
import analyticsImage from "@/assets/feature-analytics-dashboard.png";
import chatbotImage from "@/assets/feature-chatbot.png";

const FeatureOverview = () => {
  const features = [
    {
      icon: Calendar,
      title: "Strategic Marketing Planning",
      description: "Create a personalized marketing strategy and editorial plan in minutes.",
      image: editorialPlanImage,
      alt: "Editorial calendar with weekly plan",
    },
    {
      icon: Sparkles,
      title: "AI Content Generation",
      description: "Generate high-quality posts, captions, and images with one click.",
      image: aiTemplatesImage,
      alt: "AI templates setup for channel-specific tone",
    },
    {
      icon: TrendingUp,
      title: "Optimal Posting & Performance Insights",
      description: "AI suggests the best posting times and shows insights to boost engagement.",
      image: analyticsImage,
      alt: "Goals and 30-day performance insights dashboard",
    },
    {
      icon: MessageCircle,
      title: "Pro Exclusive: Website Chatbot",
      description: "Engage visitors instantly with an AI chatbot available only in Pro.",
      image: chatbotImage,
      alt: "In-site AI chatbot assisting users",
    },
  ];

  return (
    <section id="feature-overview" className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Everything you need, in one AI-powered platform.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                      <img
                        src={feature.image}
                        alt={feature.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverview;
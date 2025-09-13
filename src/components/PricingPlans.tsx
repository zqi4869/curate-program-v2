import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingPlans = () => {
  const benefits = [
    "481% more engagement",
    "67% lower monthly marketing costs", 
    "56% time savings"
  ];

  const plans = [
    {
      name: "Free",
      price: "€0",
      period: "month",
      features: [
        "1 channel",
        "1 user",
        "10 AI credits",
        "Text AI (basic)",
        "Image AI (basic)",
        "Help Center"
      ],
      cta: "Start for free",
      ctaVariant: "outline" as const,
      popular: false
    },
    {
      name: "Smart Light",
      price: "€90.75",
      period: "month",
      features: [
        "2 channels",
        "2 users", 
        "Own text AI",
        "Basic image AI",
        "Help Center"
      ],
      cta: "Get Started",
      ctaVariant: "outline" as const,
      popular: false
    },
    {
      name: "Smart",
      price: "€150.33",
      period: "month",
      features: [
        "2 channels",
        "2 users",
        "Own text AI",
        "Premium image AI", 
        "User-generated content tool",
        "Inbox for Instagram & Facebook",
        "AI assistant for Inbox",
        "Personal onboarding & follow-up",
        "Help Center with chat support"
      ],
      cta: "Subscribe now",
      ctaVariant: "default" as const,
      popular: true
    },
    {
      name: "Smart Pro",
      price: "€228.25",
      period: "month",
      features: [
        "2 channels",
        "2 users",
        "Own text AI",
        "Premium image AI",
        "User-generated content tool", 
        "Inbox for Instagram & Facebook",
        "AI assistant for Inbox",
        "Website chatbot",
        "Personal onboarding & follow-up",
        "Help Center with chat support"
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const,
      popular: false
    }
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Plans & Pricing
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Choose the plan that fits your team — save time and grow smarter with AI.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground"> / {plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.ctaVariant}
                  className="w-full mt-6"
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-muted-foreground">
          All prices exclude VAT. Subscription period: 12 months. Cancel anytime before renewal.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
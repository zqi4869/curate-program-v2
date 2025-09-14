import { Card, CardContent } from "@/components/ui/card";
import step1Image from "@/assets/step1-create-account.png";
import step2Image from "@/assets/step2-enter-info-goals.png";
import step3Image from "@/assets/step3-ai-plan-posting.png";

const GetStarted = () => {
  const steps = [
    {
      number: 1,
      title: "Create your account",
      description: "Sign up for free and explore wiasano without obligation.",
      image: step1Image,
      alt: "Account creation signup form",
    },
    {
      number: 2,
      title: "Enter your business info & goals",
      description: "Tell us about your company and objectives — our AI builds a tailored strategy for you.",
      image: step2Image,
      alt: "Business information and goals setup interface",
    },
    {
      number: 3,
      title: "Get your AI plan & start posting",
      description: "Your editorial calendar and AI content plan are ready. Start posting and growing today.",
      image: step3Image,
      alt: "Dashboard showing AI-generated plan and posting schedule",
    },
  ];

  return (
    <section className="w-full py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Get started in just 3 steps
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 min-w-[2.5rem] min-h-[2.5rem] bg-primary text-primary-foreground rounded-full flex items-center justify-center text-base font-bold aspect-square">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
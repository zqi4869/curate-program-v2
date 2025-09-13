import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import piusImage from "@/assets/testimonial_pius.png";
import evaImage from "@/assets/testimonial_eva.png";
import oliverImage from "@/assets/testimonial_oliver.png";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Pius Fischer",
      company: "TDM GmbH",
      image: piusImage,
      headline: "The best investment in marketing.",
      text: "Thanks to its ease of use and personalized posts, wiasano saves me a lot of time and stress. My posts are created instantly and planned even faster. Managing multiple channels is no longer a problem. Honestly, wiasano puts my thoughts into words better than I could myself.",
    },
    {
      id: 2,
      name: "Eva-Maria Eigenstiller",
      company: "CryoOxy Wellness & Performance Center",
      image: evaImage,
      headline: "A simple and practical tool.",
      text: "I no longer need to worry about constantly changing platform rules and social media updates. Wiasano handles it all for me. Content planning has never been this easy and efficient.",
    },
    {
      id: 3,
      name: "Oliver Ortis",
      company: "STOAK WEAR",
      image: oliverImage,
      headline: "Growing independently and organically with AI support.",
      text: "We've been looking for a solution that gives us back control of our organic marketing. After years of outsourcing and ineffective tools, wiasano finally puts us in charge again—and it works better than ever.",
    },
  ];

  const StarRating = () => (
    <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg">⭐</span>
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why marketers love wiasano
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="relative group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />
                  
                  <StarRating />
                  
                  <h3 className="text-lg font-bold text-foreground leading-relaxed">
                    "{testimonial.headline}"
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {testimonial.text}
                  </p>
                  
                  <div className="flex items-center space-x-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} profile photo`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.company}
                      </p>
                    </div>
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

export default Testimonials;
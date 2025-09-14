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
    <div className="flex space-x-1 mb-2">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">⭐</span>
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 bg-testimonials">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why marketers love wiasano
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="space-y-4">
              {/* Profile Section */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} profile photo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary mb-1">
                    {testimonial.name}
                  </h3>
                  <StarRating />
                  <p className="text-muted-foreground text-sm">
                    {testimonial.company}
                  </p>
                </div>
                <Quote className="h-8 w-8 text-muted-foreground/30 flex-shrink-0" />
              </div>
              
              {/* Quote Content */}
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-foreground leading-relaxed">
                  {testimonial.headline}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
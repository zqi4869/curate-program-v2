import { useState, useEffect } from "react";
import { MessageCircle, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const FloatingCTA = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showExitIntent, setShowExitIntent] = useState(false);
  const { toast } = useToast();

  // Check session storage on mount
  useEffect(() => {
    const hiddenUntil = sessionStorage.getItem('floatingCTA-hidden');
    const animationShown = sessionStorage.getItem('floatingCTA-animation-shown');
    const exitIntentShown = sessionStorage.getItem('floatingCTA-exit-intent-shown');
    
    if (hiddenUntil) {
      setIsHidden(true);
    }
    
    // Show attention animation after 10s if not shown before
    if (!animationShown && !hiddenUntil) {
      const timer = setTimeout(() => {
        setShowAnimation(true);
        sessionStorage.setItem('floatingCTA-animation-shown', 'true');
        // Remove animation after 2s
        setTimeout(() => setShowAnimation(false), 2000);
      }, 10000);
      
      return () => clearTimeout(timer);
    }

    // Exit intent detection (desktop only)
    const handleMouseLeave = (e: MouseEvent) => {
      if (!exitIntentShown && e.clientY <= 0 && window.innerWidth >= 768) {
        setShowExitIntent(true);
        sessionStorage.setItem('floatingCTA-exit-intent-shown', 'true');
      }
    };

    if (!exitIntentShown && window.innerWidth >= 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, []);

  const handleFloatingButtonClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleNoThanks = () => {
    setIsCardOpen(false);
    setIsHidden(true);
    sessionStorage.setItem('floatingCTA-hidden', 'true');
  };

  const handleTryItFree = () => {
    toast({
      title: "Thanks! We'll be in touch.",
      duration: 2000,
    });
    
    setTimeout(() => {
      setIsCardOpen(false);
      setIsHidden(true);
      sessionStorage.setItem('floatingCTA-hidden', 'true');
    }, 1500);
  };

  const handleExitIntentClose = () => {
    setShowExitIntent(false);
  };

  const handleExitIntentStart = () => {
    toast({
      title: "Thanks! We'll be in touch.",
      duration: 2000,
    });
    setShowExitIntent(false);
  };

  if (isHidden) return null;

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={handleFloatingButtonClick}
          className={cn(
            "w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105",
            showAnimation && "animate-bounce"
          )}
          size="icon"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        </Button>
      </div>

      {/* Popover Card */}
      {isCardOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 md:hidden" 
            onClick={handleCloseCard}
          />
          
          {/* Card */}
          <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-[360px] md:w-[360px]">
            <Card className="bg-white shadow-xl border-0 animate-slide-in-right">
              <CardContent className="p-6 relative">
                {/* Close Button */}
                <Button
                  onClick={handleCloseCard}
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 w-8 h-8 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Content */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-lg font-bold text-foreground">
                    Ready to grow faster with AI?
                  </h3>
                  
                  {/* Bullet Points */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-sm text-foreground">Save 50–70% of your time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-sm text-foreground">Lower monthly marketing costs</span>
                    </div>
                  </div>

                  {/* Email Input (Visual Only) */}
                  <Input 
                    type="email" 
                    placeholder="Your email"
                    className="w-full"
                    readOnly
                  />

                  {/* Primary Button */}
                  <Button 
                    onClick={handleTryItFree}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Try it free
                  </Button>

                  {/* Secondary Link */}
                  <div className="text-center">
                    <button
                      onClick={handleNoThanks}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      No thanks
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}

      {/* Exit Intent Modal (Desktop Only) */}
      {showExitIntent && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 z-50 hidden md:flex items-center justify-center">
            <Card className="w-full max-w-md mx-4 bg-white shadow-2xl animate-scale-in">
              <CardContent className="p-6 relative">
                {/* Close Button */}
                <Button
                  onClick={handleExitIntentClose}
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 w-8 h-8 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </Button>

                {/* Content */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Before you go — get your 14-day free trial
                  </h3>
                  
                  <p className="text-muted-foreground">
                    Save time, cut costs, and post consistently with your own AI.
                  </p>

                  {/* Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button 
                      onClick={handleExitIntentStart}
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Start free trial
                    </Button>
                    <Button 
                      onClick={handleExitIntentClose}
                      variant="outline"
                      className="flex-1"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingCTA;
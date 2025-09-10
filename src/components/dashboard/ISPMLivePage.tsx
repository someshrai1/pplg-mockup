import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface ISPMLivePageProps {
  onTrialClick: () => void;
}

export function ISPMLivePage({ onTrialClick }: ISPMLivePageProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const buttonTexts = [
    "Trial Ending in 3 Days", 
    "Learn More!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, [buttonTexts.length]);

  return (
    <div className="w-full h-[calc(100vh-4rem)] overflow-auto relative">
      {/* Background Image Container */}
      <div 
        className="w-full bg-no-repeat bg-top"
        style={{
          backgroundImage: 'url(/ISPM_long.png)',
          backgroundSize: 'contain',
          minHeight: '949px',
          aspectRatio: '1382/949'
        }}
      >
        {/* Trial Ending Soon Button Overlay */}
        <Button 
          onClick={onTrialClick}
          className="absolute top-6 right-6 bg-warning/90 text-warning-foreground border-warning/20 hover:bg-warning shadow-lg backdrop-blur-sm transition-all duration-300 min-w-[180px] z-10"
          variant="outline"
        >
          {buttonTexts[currentTextIndex]}
        </Button>
      </div>
    </div>
  );
}
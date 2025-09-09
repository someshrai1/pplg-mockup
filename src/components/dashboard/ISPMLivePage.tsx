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
    <div className="w-full h-full -m-6 overflow-auto relative">
      <div className="min-h-full">
        <img 
          src="/ISPM_long.png" 
          alt="ISPM Live Dashboard" 
          className="w-full h-auto object-contain"
          style={{ 
            minHeight: 'calc(100vh - 64px)' // Account for header only
          }}
        />
        {/* Trial Ending Soon Button Overlay */}
        <Button 
          onClick={onTrialClick}
          className="absolute top-4 right-4 bg-warning/90 text-warning-foreground border-warning/20 hover:bg-warning shadow-lg backdrop-blur-sm transition-all duration-300 min-w-[180px]"
          variant="outline"
        >
          {buttonTexts[currentTextIndex]}
        </Button>
      </div>
    </div>
  );
}
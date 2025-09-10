import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";

interface ActivationSuccessProps {
  packageName: string;
  onContinue: () => void;
}

export function ActivationSuccess({ packageName, onContinue }: ActivationSuccessProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <CardTitle className="text-2xl">Congratulations!</CardTitle>
            <CardDescription className="text-lg">
              Your {packageName} is now active
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Your purchase order has been processed successfully and your license is now active.
              </p>
              <p className="text-muted-foreground">
                You can now access all the features included in your {packageName} package.
              </p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">What's Next?</h3>
              <ul className="text-sm text-left space-y-1">
                <li>• Access your full dashboard with all licensed features</li>
                <li>• Configure your security policies and integrations</li>
                <li>• Set up automated monitoring and alerts</li>
                <li>• Review your comprehensive security posture</li>
              </ul>
            </div>

            <Button onClick={onContinue} size="lg" className="w-full">
              Continue to Dashboard
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
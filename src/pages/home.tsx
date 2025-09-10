import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <img src="/Saviynt.png" alt="Saviynt" className="h-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-2">Saviynt Mockups</h1>
          <p className="text-muted-foreground">Choose which dashboard to explore</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Savi Security Essentials
              </CardTitle>
              <CardDescription>
                Monitor consumption across users and applications with Savi Security Essentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/usage">
                <Button className="w-full">
                  View Usage Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                ISPM Trial
              </CardTitle>
              <CardDescription>
                Identity Security Posture Management trial with 3 days remaining
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link to="/ispm">
                <Button className="w-full">
                  View Trial Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
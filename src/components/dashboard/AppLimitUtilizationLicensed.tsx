import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Monitor, Users } from "lucide-react";

interface AppLimitUtilizationLicensedProps {
  packageName: string;
}

export function AppLimitUtilizationLicensed({ packageName }: AppLimitUtilizationLicensedProps) {
  // Determine app limit and license display based on package
  console.log('Package name received:', packageName);
  
  const getAppConfig = () => {
    if (packageName.includes("Additional App Bundle") || packageName.includes("App Bundle")) {
      return {
        limit: 40,
        displayLimit: "40",
        licenseName: "Savi Security Essentials",
        isUnlimited: false
      };
    }
    if (packageName.includes("Pro") || packageName.includes("Premium")) {
      return {
        limit: Infinity,
        displayLimit: "-",
        licenseName: packageName,
        isUnlimited: true
      };
    }
    // Default fallback - should not happen
    return {
      limit: 40,
      displayLimit: "40",
      licenseName: "Savi Security Essentials",
      isUnlimited: false
    };
  };

  const appConfig = getAppConfig();
  const connectedApps = 18;
  const utilization = appConfig.isUnlimited ? 0 : (connectedApps / appConfig.limit) * 100;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Connected Apps</CardTitle>
          <Monitor className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{connectedApps} / {appConfig.displayLimit}</div>
          {!appConfig.isUnlimited && <Progress value={utilization} className="mt-2" />}
          <p className="text-xs text-muted-foreground mt-2">
            {appConfig.isUnlimited ? "Unlimited apps" : `${utilization.toFixed(1)}% of app limit used`}
          </p>
          <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/20 text-xs">
            Within Limits
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">September Trend</CardTitle>
          <TrendingUp className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+6.7%</div>
          <p className="text-xs text-muted-foreground">
            vs previous month
          </p>
          <div className="text-sm mt-2">
            <span className="text-success">↗ {connectedApps}</span> connected apps
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">YTD Utilization</CardTitle>
          <TrendingUp className="h-4 w-4 text-info" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">81.7%</div>
          <p className="text-xs text-muted-foreground">
            Average this year
          </p>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">Q1: 70%</Badge>
            <Badge variant="secondary" className="text-xs">Q2: 80%</Badge>
            <Badge variant="secondary" className="text-xs">Q3: 90%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Onboarding Status</CardTitle>
          <CheckCircle className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">89%</div>
          <p className="text-xs text-muted-foreground">
            Apps fully configured
          </p>
          <div className="text-sm mt-2 space-x-2">
            <Badge variant="secondary">16 Complete</Badge>
            <Badge variant="outline" className="bg-warning/10 text-warning">2 Pending</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
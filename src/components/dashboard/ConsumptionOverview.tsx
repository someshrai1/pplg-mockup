import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle } from "lucide-react";

export function ConsumptionOverview() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Users</CardTitle>
          <CheckCircle className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">42,150 / 50,000</div>
          <Progress value={84.3} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            84.3% utilization
          </p>
          <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/20">
            Within Limits
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{currentMonth} Trend</CardTitle>
          <TrendingUp className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+12.5%</div>
          <p className="text-xs text-muted-foreground">
            vs previous month
          </p>
          <div className="text-sm mt-2">
            <span className="text-success">↗ 42,150</span> active users
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">YTD Utilization</CardTitle>
          <TrendingUp className="h-4 w-4 text-info" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">78.3%</div>
          <p className="text-xs text-muted-foreground">
            Average this year
          </p>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">Q1: 71%</Badge>
            <Badge variant="secondary" className="text-xs">Q2: 78%</Badge>
            <Badge variant="secondary" className="text-xs">Q3: 85%</Badge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">End-of-Term Forecast</CardTitle>
          <AlertTriangle className="h-4 w-4 text-warning" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">47,500</div>
          <p className="text-xs text-muted-foreground">
            Projected peak usage
          </p>
          <Badge variant="outline" className="mt-2 bg-warning/10 text-warning border-warning/20">
            95% Capacity
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}
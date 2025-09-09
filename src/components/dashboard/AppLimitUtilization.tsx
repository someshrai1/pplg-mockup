import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Monitor, Users } from "lucide-react";
import { IGAQuoteForm } from "./IGAQuoteForm";

export function AppLimitUtilization() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Connected Apps</CardTitle>
          <Monitor className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">47 / 50</div>
          <Progress value={94} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            94% of app limit used
          </p>
          <div className="flex items-center justify-between mt-2">
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
              Near Limit
            </Badge>
            <Dialog>
              <DialogTrigger asChild>
                <Badge className="bg-success/10 text-success border-success/20 cursor-pointer hover:bg-success/20 transition-colors">
                  Extend Now!
                </Badge>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Request IGA License Quote</DialogTitle>
                </DialogHeader>
                <IGAQuoteForm />
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">September Trend</CardTitle>
          <TrendingUp className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+8.3%</div>
          <p className="text-xs text-muted-foreground">
            vs previous month
          </p>
          <div className="text-sm mt-2">
            <span className="text-success">↗ 47</span> connected apps
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">YTD Utilization</CardTitle>
          <TrendingUp className="h-4 w-4 text-info" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">82.4%</div>
          <p className="text-xs text-muted-foreground">
            Average this year
          </p>
          <div className="flex gap-1 mt-2">
            <Badge variant="secondary" className="text-xs">Q1: 76%</Badge>
            <Badge variant="secondary" className="text-xs">Q2: 84%</Badge>
            <Badge variant="secondary" className="text-xs">Q3: 87%</Badge>
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
            <Badge variant="secondary">42 Complete</Badge>
            <Badge variant="outline" className="bg-warning/10 text-warning">5 Pending</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
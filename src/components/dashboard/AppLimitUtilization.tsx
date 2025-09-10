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
          <div className="text-2xl font-bold">18 / 20</div>
          <Progress value={90} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            90% of app limit used
          </p>
          <div className="flex items-center justify-between mt-2">
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
              Near Limit
            </Badge>
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors cursor-pointer">
                  Buy Now!
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Request a Quote</DialogTitle>
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
          <div className="text-2xl font-bold">+6.7%</div>
          <p className="text-xs text-muted-foreground">
            vs previous month
          </p>
          <div className="text-sm mt-2">
            <span className="text-success">↗ 18</span> connected apps
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
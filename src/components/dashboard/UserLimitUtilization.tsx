import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Users, UserPlus, UserMinus, Crown } from "lucide-react";

export function UserLimitUtilization() {
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pro Users</CardTitle>
          <Crown className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">155 / 250</div>
          <Progress value={62} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            62% of Pro license used
          </p>
          <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/20">
            Within Limits
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Lite Users</CardTitle>
          <Users className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">687 / 750</div>
          <Progress value={91.6} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            91.6% of Lite license used
          </p>
          <Badge variant="outline" className="mt-2 bg-warning/10 text-warning border-warning/20">
            Near Limit
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{currentMonth} Activity</CardTitle>
          <TrendingUp className="h-4 w-4 text-info" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">+15</div>
          <p className="text-xs text-muted-foreground">
            Net user growth
          </p>
          <div className="text-sm mt-2 space-x-2">
            <span className="text-success">+23 added</span>
            <span className="text-muted-foreground">-8 removed</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Access Requests</CardTitle>
          <CheckCircle className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">127</div>
          <p className="text-xs text-muted-foreground">
            Pending approvals
          </p>
          <div className="text-sm mt-2">
            <Badge variant="outline" className="bg-info/10 text-info">12 Critical</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
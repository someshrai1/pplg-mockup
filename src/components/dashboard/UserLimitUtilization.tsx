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
          <div className="text-2xl font-bold">8,450 / 10,000</div>
          <Progress value={84.5} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            84.5% of Pro limit used
          </p>
          <Badge variant="outline" className="mt-2 bg-warning/10 text-warning border-warning/20">
            Near Limit
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Lite Users</CardTitle>
          <Users className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">33,700 / 40,000</div>
          <Progress value={84.25} className="mt-2" />
          <p className="text-xs text-muted-foreground mt-2">
            84.25% of Lite limit used
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
          <div className="text-2xl font-bold">+1,250</div>
          <p className="text-xs text-muted-foreground">
            Net user growth
          </p>
          <div className="text-sm mt-2 space-x-2">
            <span className="text-success">+1,420 added</span>
            <span className="text-muted-foreground">-170 removed</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Access Requests</CardTitle>
          <CheckCircle className="h-4 w-4 text-success" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,340</div>
          <p className="text-xs text-muted-foreground">
            Pending approvals
          </p>
          <div className="text-sm mt-2">
            <Badge variant="outline" className="bg-info/10 text-info">156 Critical</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
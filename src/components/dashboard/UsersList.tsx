import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Crown, Shield, AlertTriangle, CheckCircle } from "lucide-react";

export function UsersList() {
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@acmecorp.com",
      type: "Pro",
      department: "Engineering",
      lastActive: "2 hours ago",
      accessRequests: 3,
      riskLevel: "low",
      status: "active"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@acmecorp.com",
      type: "Pro",
      department: "Finance",
      lastActive: "1 day ago",
      accessRequests: 0,
      riskLevel: "medium",
      status: "active"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@acmecorp.com",
      type: "Lite",
      department: "Marketing",
      lastActive: "3 hours ago",
      accessRequests: 1,
      riskLevel: "low",
      status: "active"
    },
    {
      id: 4,
      name: "David Kim",
      email: "david.kim@acmecorp.com",
      type: "Pro",
      department: "IT Security",
      lastActive: "30 minutes ago",
      accessRequests: 5,
      riskLevel: "high",
      status: "active"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      email: "lisa.thompson@acmecorp.com",
      type: "Lite",
      department: "HR",
      lastActive: "5 hours ago",
      accessRequests: 0,
      riskLevel: "low",
      status: "inactive"
    }
  ];

  const getUserTypeIcon = (type: string) => {
    return type === "Pro" ? <Crown className="h-4 w-4 text-primary" /> : <Users className="h-4 w-4 text-muted-foreground" />;
  };

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "high": return <Badge className="bg-destructive/10 text-destructive border-destructive/20">High Risk</Badge>;
      case "medium": return <Badge className="bg-warning/10 text-warning border-warning/20">Medium Risk</Badge>;
      case "low": return <Badge className="bg-success/10 text-success border-success/20">Low Risk</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    return status === "active" ? 
      <CheckCircle className="h-4 w-4 text-success" /> : 
      <AlertTriangle className="h-4 w-4 text-warning" />;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Recent User Activity
        </CardTitle>
        <CardDescription>
          Latest user activities and access patterns
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{user.name}</span>
                    {getUserTypeIcon(user.type)}
                    {getStatusIcon(user.status)}
                  </div>
                  <div className="text-sm text-muted-foreground">{user.email}</div>
                  <div className="text-xs text-muted-foreground">
                    {user.department} • Last active {user.lastActive}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium">
                    {user.accessRequests} requests
                  </div>
                  {getRiskBadge(user.riskLevel)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
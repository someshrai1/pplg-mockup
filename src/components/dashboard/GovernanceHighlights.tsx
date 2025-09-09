import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, AlertTriangle, CheckCircle, Clock } from "lucide-react";

interface GovernanceHighlightsProps {
  detailed?: boolean;
}

export function GovernanceHighlights({ detailed = false }: GovernanceHighlightsProps) {
  const highlights = [
    {
      title: "Access Reviews",
      status: "completed",
      count: 23,
      description: "Quarterly reviews completed",
      icon: CheckCircle,
      color: "success"
    },
    {
      title: "Policy Violations",
      status: "warning",
      count: 7,
      description: "Require immediate attention",
      icon: AlertTriangle,
      color: "warning"
    },
    {
      title: "Pending Approvals",
      status: "pending",
      count: 12,
      description: "Access requests awaiting approval",
      icon: Clock,
      color: "info"
    },
    {
      title: "Compliance Score",
      status: "good",
      count: 94,
      description: "Overall governance health",
      icon: Shield,
      color: "success"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Governance Highlights
        </CardTitle>
        <CardDescription>
          Key governance metrics and compliance status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Icon className={`h-5 w-5 text-${item.color}`} />
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
                <Badge 
                  variant="outline" 
                  className={`bg-${item.color}/10 text-${item.color} border-${item.color}/20`}
                >
                  {item.count}{item.title === "Compliance Score" ? "%" : ""}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
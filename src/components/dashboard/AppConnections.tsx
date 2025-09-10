import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

export function AppConnections() {
  const apps = [
    { name: "Salesforce", status: "connected", users: 234, icon: "🏢" },
    { name: "Office 365", status: "connected", users: 842, icon: "📧" },
    { name: "AWS Console", status: "warning", users: 67, icon: "☁️" },
    { name: "GitHub", status: "connected", users: 156, icon: "🐙" },
    { name: "Slack", status: "error", users: 0, icon: "💬" },
    { name: "Jira", status: "connected", users: 89, icon: "🎯" },
    { name: "ServiceNow", status: "connected", users: 145, icon: "⚙️" },
    { name: "Workday", status: "connected", users: 298, icon: "👥" },
    { name: "Okta", status: "connected", users: 567, icon: "🔐" },
    { name: "Tableau", status: "connected", users: 78, icon: "📊" },
    { name: "Zoom", status: "connected", users: 423, icon: "📹" },
    { name: "Confluence", status: "connected", users: 134, icon: "📝" },
    { name: "DocuSign", status: "connected", users: 89, icon: "✍️" },
    { name: "Box", status: "connected", users: 167, icon: "📦" },
    { name: "Dropbox", status: "connected", users: 203, icon: "☁️" },
    { name: "Adobe Creative", status: "connected", users: 45, icon: "🎨" },
    { name: "HubSpot", status: "connected", users: 112, icon: "📈" },
    { name: "Zendesk", status: "connected", users: 89, icon: "🎟️" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return <CheckCircle className="h-4 w-4 text-success" />;
      case "warning": return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "error": return <XCircle className="h-4 w-4 text-destructive" />;
      default: return <Monitor className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "connected": return <Badge className="bg-success/10 text-success border-success/20">Connected</Badge>;
      case "warning": return <Badge className="bg-warning/10 text-warning border-warning/20">Warning</Badge>;
      case "error": return <Badge className="bg-destructive/10 text-destructive border-destructive/20">Error</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Monitor className="h-5 w-5" />
          Apps Connected
        </CardTitle>
        <CardDescription>
          Connected applications and their user provisioning status
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {apps.map((app) => (
            <div key={app.name} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-medium">{app.name}</div>
                  <div className="text-sm text-muted-foreground">{app.users} users provisioned</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {getStatusIcon(app.status)}
                {getStatusBadge(app.status)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Monitor, Settings, Bell, User, Menu } from "lucide-react";
import { ConsumptionOverview } from "./ConsumptionOverview";
import { AppLimitUtilizationLicensed } from "./AppLimitUtilizationLicensed";
import { UserMetrics } from "./UserMetrics";
import { AppConnections } from "./AppConnections";
import { GovernanceHighlights } from "./GovernanceHighlights";
import { Link } from "react-router-dom";

interface UsageLicensedDashboardProps {
  packageName: string;
}

export function UsageLicensedDashboard({ packageName }: UsageLicensedDashboardProps) {
  const [usageSubTab, setUsageSubTab] = useState("overview");
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);
  
  const getHeaderBadgeText = () => {
    if (packageName.includes("Additional App Bundle") || packageName.includes("App Bundle")) {
      return "Savi Security Essentials";
    }
    return packageName;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/Saviynt.png" alt="Saviynt" className="h-8 cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              {getHeaderBadgeText()}
            </Badge>
            <Button variant="ghost" size="sm">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isMenuCollapsed ? 'w-16' : 'w-64'} border-r bg-card min-h-[calc(100vh-4rem)] transition-all duration-300`}>
          <nav className="p-4 space-y-2">
            <div className="px-3 py-2 flex items-center justify-between">
              {!isMenuCollapsed && <h2 className="mb-2 px-4 text-lg font-semibold">Usage Dashboard</h2>}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
                className="ml-auto"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
            <Button
              variant="ghost"
              className={`w-full ${isMenuCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setUsageSubTab("overview")}
            >
              <BarChart3 className={`h-4 w-4 ${!isMenuCollapsed ? 'mr-2' : ''}`} />
              {!isMenuCollapsed && "Overview"}
            </Button>
            <Button
              variant="ghost"
              className={`w-full ${isMenuCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setUsageSubTab("users")}
            >
              <Users className={`h-4 w-4 ${!isMenuCollapsed ? 'mr-2' : ''}`} />
              {!isMenuCollapsed && "Users"}
            </Button>
            <Button
              variant="ghost"
              className={`w-full ${isMenuCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setUsageSubTab("apps")}
            >
              <Monitor className={`h-4 w-4 ${!isMenuCollapsed ? 'mr-2' : ''}`} />
              {!isMenuCollapsed && "Apps"}
            </Button>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Usage Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Monitor consumption across users and applications with your licensed package
            </p>
          </div>

          {usageSubTab === "overview" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">User Limit Consumption</h3>
                <ConsumptionOverview />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">App Limit Consumption</h3>
                <AppLimitUtilizationLicensed packageName={packageName} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Governance Highlights</h3>
                <GovernanceHighlights />
              </div>
            </div>
          )}

          {usageSubTab === "users" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">User Limit Consumption</h3>
                <ConsumptionOverview />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">App Limit Consumption</h3>
                <AppLimitUtilizationLicensed packageName={packageName} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Governance Highlights</h3>
                <GovernanceHighlights />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">User Details</h3>
                <UserMetrics detailed={true} />
              </div>
            </div>
          )}

          {usageSubTab === "apps" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">App Limit Consumption</h3>
                <AppLimitUtilizationLicensed packageName={packageName} />
              </div>
              <div>
                <AppConnections />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
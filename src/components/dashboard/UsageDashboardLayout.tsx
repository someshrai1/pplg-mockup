import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3, Users, Monitor, Settings, Bell, User } from "lucide-react";
import { ConsumptionOverview } from "./ConsumptionOverview";
import { AppLimitUtilization } from "./AppLimitUtilization";
import { UserMetrics } from "./UserMetrics";
import { AppConnections } from "./AppConnections";
import { GovernanceHighlights } from "./GovernanceHighlights";

export function UsageDashboardLayout() {
  const [usageSubTab, setUsageSubTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-4">
            <img src="/Saviynt.png" alt="Saviynt" className="h-8" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              Savi Security Essentials
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
        <aside className="w-64 border-r bg-card min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            <div className="px-3 py-2">
              <h2 className="mb-2 px-4 text-lg font-semibold">Usage Dashboard</h2>
            </div>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setUsageSubTab("overview")}
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setUsageSubTab("users")}
            >
              <Users className="mr-2 h-4 w-4" />
              Users
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => setUsageSubTab("apps")}
            >
              <Monitor className="mr-2 h-4 w-4" />
              Apps
            </Button>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Usage Dashboard</h1>
            <p className="text-muted-foreground mt-2">
              Monitor consumption across users and applications
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
                <AppLimitUtilization />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Governance Highlights</h3>
                <GovernanceHighlights />
              </div>
            </div>
          )}

          {usageSubTab === "users" && (
            <div className="space-y-6">
              <UserMetrics detailed={true} />
            </div>
          )}

          {usageSubTab === "apps" && (
            <div className="space-y-6">
              <AppConnections />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
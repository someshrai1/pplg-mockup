import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Settings, User, Shield, BarChart3, Users, Monitor, Menu, ChevronLeft } from "lucide-react";
import { ConsumptionOverview } from "./ConsumptionOverview";
import { UserMetrics } from "./UserMetrics";
import { AppConnections } from "./AppConnections";
import { AppLimitUtilization } from "./AppLimitUtilization";
import { ISPMLivePage } from "./ISPMLivePage";
import { ISPMTrialSection } from "./ISPMTrialSection";

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("usage");
  const [usageSubTab, setUsageSubTab] = useState("overview");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center">
            <img 
              src="/Saviynt.png" 
              alt="Saviynt" 
              className="h-8"
            />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              Savi Security Essentials
            </Badge>
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Left Sidebar Navigation - Full Height */}
        <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-card border-r flex-shrink-0 transition-all duration-300`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              {!sidebarCollapsed && (
                <div>
                  <h2 className="text-lg font-semibold">Navigation</h2>
                  <p className="text-sm text-muted-foreground">Dashboard sections</p>
                </div>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="ml-auto"
              >
                {sidebarCollapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </Button>
            </div>
            <nav className="space-y-2">
              <div className="space-y-1">
                <button
                  onClick={() => {
                    setActiveTab("usage");
                    setUsageSubTab("overview");
                  }}
                  className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3'} px-3 py-3 text-left rounded-md transition-colors ${
                    activeTab === "usage" && usageSubTab === "overview"
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  title={sidebarCollapsed ? "Usage" : ""}
                >
                  <BarChart3 className="h-5 w-5" />
                  {!sidebarCollapsed && <span className="font-medium">Usage</span>}
                </button>
                {!sidebarCollapsed && (
                  <div className="ml-6 space-y-1">
                    <button
                      onClick={() => {
                        setActiveTab("usage");
                        setUsageSubTab("users");
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm rounded-md transition-colors ${
                        activeTab === "usage" && usageSubTab === "users"
                          ? "bg-muted text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <div className="w-1 h-1 rounded-full bg-current" />
                      Users
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("usage");
                        setUsageSubTab("apps");
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm rounded-md transition-colors ${
                        activeTab === "usage" && usageSubTab === "apps"
                          ? "bg-muted text-foreground font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <div className="w-1 h-1 rounded-full bg-current" />
                      Apps
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => setActiveTab("ispm-live")}
                className={`w-full flex items-center ${sidebarCollapsed ? 'justify-center' : 'gap-3'} px-3 py-3 text-left rounded-md transition-colors ${
                  activeTab === "ispm-live"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
                title={sidebarCollapsed ? "ISPM" : ""}
              >
                <Shield className="h-5 w-5" />
                {!sidebarCollapsed && <span className="font-medium">ISPM</span>}
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {activeTab !== "ispm-live" && activeTab !== "trials" && (
            <div className="mb-6">
              <h2 className="text-3xl font-bold tracking-tight">
                {activeTab === "usage" && usageSubTab === "overview" && "Usage & Consumption"}
                {activeTab === "usage" && usageSubTab === "users" && "User Management"}
                {activeTab === "usage" && usageSubTab === "apps" && "Application Management"}
              </h2>
              <p className="text-muted-foreground">
                {activeTab === "usage" && usageSubTab === "overview" && "Monitor consumption across users and applications"}
                {activeTab === "usage" && usageSubTab === "users" && "Manage user identities and access controls"}
                {activeTab === "usage" && usageSubTab === "apps" && "Monitor application connections and provisioning"}
              </p>
            </div>
          )}

          <div className="space-y-6">
            {activeTab === "usage" && (
              <div className="space-y-6">
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
                  </div>
                )}

                {usageSubTab === "users" && (
                  <UserMetrics detailed />
                )}

                {usageSubTab === "apps" && (
                  <div className="space-y-6">
                    <AppLimitUtilization />
                    <AppConnections />
                  </div>
                )}
              </div>
            )}

            {activeTab === "ispm-live" && (
              <ISPMLivePage onTrialClick={() => setActiveTab("trials")} />
            )}

            {activeTab === "trials" && (
              <ISPMTrialSection />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
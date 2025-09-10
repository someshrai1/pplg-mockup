import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Activity, Settings, Bell, User } from "lucide-react";
import { ISPMTrialSection } from "./ISPMTrialSection";
import { ISPMLivePage } from "./ISPMLivePage";

export function ISPMDashboardLayout() {
  const [activeSection, setActiveSection] = useState("live");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center gap-4">
            <img src="/Saviynt.png" alt="Saviynt" className="h-8" />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
              ISPM Trial - 3 Days Left
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
              <h2 className="mb-2 px-4 text-lg font-semibold">ISPM Dashboard</h2>
            </div>
            <Button
              variant={activeSection === "live" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("live")}
            >
              <Activity className="mr-2 h-4 w-4" />
              Live Dashboard
            </Button>
            <Button
              variant={activeSection === "trial" ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("trial")}
            >
              <Shield className="mr-2 h-4 w-4" />
              Trial Overview
            </Button>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1">
          {activeSection === "trial" && <ISPMTrialSection />}
          {activeSection === "live" && <ISPMLivePage />}
        </main>
      </div>
    </div>
  );
}
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Activity, Settings, Bell, User, Menu } from "lucide-react";
import { ISPMLivePageLicensed } from "./ISPMLivePageLicensed";
import { Link } from "react-router-dom";

interface ISPMLicensedDashboardProps {
  packageName: string;
}

export function ISPMLicensedDashboard({ packageName }: ISPMLicensedDashboardProps) {
  const [activeSection, setActiveSection] = useState("live");
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

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
              {packageName}
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
              {!isMenuCollapsed && <h2 className="mb-2 px-4 text-lg font-semibold">ISPM Dashboard</h2>}
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
              variant={activeSection === "live" ? "secondary" : "ghost"}
              className={`w-full ${isMenuCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setActiveSection("live")}
            >
              <Activity className={`h-4 w-4 ${!isMenuCollapsed ? 'mr-2' : ''}`} />
              {!isMenuCollapsed && "Live Dashboard"}
            </Button>
            <Button
              variant={activeSection === "analytics" ? "secondary" : "ghost"}
              className={`w-full ${isMenuCollapsed ? 'justify-center' : 'justify-start'}`}
              onClick={() => setActiveSection("analytics")}
            >
              <Shield className={`h-4 w-4 ${!isMenuCollapsed ? 'mr-2' : ''}`} />
              {!isMenuCollapsed && "Analytics"}
            </Button>
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1">
          <ISPMLivePageLicensed />
        </main>
      </div>
    </div>
  );
}
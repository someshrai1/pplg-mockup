import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, UserCheck, Activity, Shield, ExternalLink } from "lucide-react";

interface UserMetricsProps {
  detailed?: boolean;
}

export function UserMetrics({ detailed = false }: UserMetricsProps) {
  const proUsers = [
    { name: "Sarah Johnson", department: "IT", requests: 23, policies: 45, lifecycle: 12, status: "active" },
    { name: "Mike Chen", department: "Finance", requests: 18, policies: 38, lifecycle: 8, status: "active" },
    { name: "Lisa Brown", department: "HR", requests: 31, policies: 52, lifecycle: 15, status: "active" },
    { name: "David Wilson", department: "Operations", requests: 12, policies: 29, lifecycle: 6, status: "inactive" },
  ];

  const liteUsers = [
    { name: "John Smith", department: "Sales", activities: 156, auth: 89, access: "Standard", status: "active" },
    { name: "Emma Davis", department: "Marketing", activities: 203, auth: 112, access: "Limited", status: "active" },
    { name: "Tom Anderson", department: "Support", activities: 87, auth: 45, access: "Standard", status: "active" },
  ];

  if (!detailed) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pro Users</CardTitle>
            <UserCheck className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              Active governance users
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Access Requests</span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Policy Actions</span>
                <span className="font-medium">3,891</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Lifecycle Events</span>
                <span className="font-medium">456</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Lite Users</CardTitle>
            <Users className="h-4 w-4 text-secondary-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">715</div>
            <p className="text-xs text-muted-foreground">
              Basic access users
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Basic Activities</span>
                <span className="font-medium">12,847</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Auth Events</span>
                <span className="font-medium">8,921</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Access Footprint</span>
                <span className="font-medium">2.3 TB</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Pro Users
            </CardTitle>
            <CardDescription>Advanced governance and lifecycle management</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">127</div>
            <Badge className="mt-2">15.1% of total</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Lite Users
            </CardTitle>
            <CardDescription>Basic access and authentication</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">715</div>
            <Badge variant="outline" className="mt-2">84.9% of total</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Total Activity
            </CardTitle>
            <CardDescription>Combined user actions this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">23.4K</div>
            <Badge variant="outline" className="mt-2 bg-success/10 text-success border-success/20">
              +18% vs last month
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pro" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pro">Pro Users Details</TabsTrigger>
          <TabsTrigger value="lite">Lite Users Details</TabsTrigger>
        </TabsList>

        <TabsContent value="pro">
          <Card>
            <CardHeader>
              <CardTitle>Pro Users Activity</CardTitle>
              <CardDescription>
                Detailed metrics for users with full governance access
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Access Requests</TableHead>
                    <TableHead>Policy Actions</TableHead>
                    <TableHead>Lifecycle Events</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {proUsers.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.requests}</TableCell>
                      <TableCell>{user.policies}</TableCell>
                      <TableCell>{user.lifecycle}</TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="lite">
          <Card>
            <CardHeader>
              <CardTitle>Lite Users Activity</CardTitle>
              <CardDescription>
                Simplified metrics for basic access users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Basic Activities</TableHead>
                    <TableHead>Auth Events</TableHead>
                    <TableHead>Access Level</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {liteUsers.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>{user.activities}</TableCell>
                      <TableCell>{user.auth}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.access}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
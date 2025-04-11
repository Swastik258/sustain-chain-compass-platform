
import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChartBig, TrendingDown, TrendingUp, Truck, Users, PiggyBank, LeafyGreen, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { useAuth } from '@/hooks/useAuth';

// Mock data for charts
const sustainabilityData = [
  { month: 'Jan', score: 65 },
  { month: 'Feb', score: 68 },
  { month: 'Mar', score: 72 },
  { month: 'Apr', score: 75 },
  { month: 'May', score: 71 },
  { month: 'Jun', score: 74 },
  { month: 'Jul', score: 78 },
  { month: 'Aug', score: 82 },
];

const emissionsData = [
  { month: 'Jan', direct: 120, indirect: 80 },
  { month: 'Feb', direct: 110, indirect: 75 },
  { month: 'Mar', direct: 105, indirect: 70 },
  { month: 'Apr', direct: 95, indirect: 65 },
  { month: 'May', direct: 100, indirect: 60 },
  { month: 'Jun', direct: 90, indirect: 55 },
  { month: 'Jul', direct: 85, indirect: 50 },
  { month: 'Aug', direct: 80, indirect: 45 },
];

const resourcesData = [
  { resource: 'Water', used: 75, total: 100 },
  { resource: 'Energy', used: 60, total: 100 },
  { resource: 'Materials', used: 40, total: 100 },
  { resource: 'Waste', used: 85, total: 100 },
];

const suppliersData = [
  { name: 'Eco Materials Co.', status: 'Compliant', score: 92 },
  { name: 'Green Transport Inc.', status: 'Compliant', score: 88 },
  { name: 'Sustainable Packaging', status: 'Review Needed', score: 75 },
  { name: 'Raw Materials Global', status: 'Non-Compliant', score: 62 },
];

const Dashboard = () => {
  const { user } = useAuth();
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h1>
          <p className="text-muted-foreground">Here's an overview of your supply chain sustainability metrics</p>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sustainability Score</CardTitle>
              <LeafyGreen className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82/100</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-4 w-4 text-success" />
                <span className="text-success font-medium">+5%</span> from last month
              </div>
              <Progress value={82} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Carbon Footprint</CardTitle>
              <PiggyBank className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">125 tons</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingDown className="mr-1 h-4 w-4 text-success" />
                <span className="text-success font-medium">-12%</span> from last month
              </div>
              <Progress value={48} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingUp className="mr-1 h-4 w-4 text-success" />
                <span className="text-success font-medium">+2</span> from last month
              </div>
              <Progress value={75} className="mt-2" />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shipments</CardTitle>
              <Truck className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <TrendingDown className="mr-1 h-4 w-4 text-warning" />
                <span className="text-warning font-medium">-4%</span> from last month
              </div>
              <Progress value={65} className="mt-2" />
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="emissions">Emissions</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Sustainability Performance</CardTitle>
                <CardDescription>Your supply chain sustainability score over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sustainabilityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="score"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Alerts & Actions</CardTitle>
                  <CardDescription>Issues requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 mt-0.5 text-warning" />
                      <div>
                        <p className="font-medium">3 suppliers need compliance review</p>
                        <p className="text-sm text-muted-foreground">Due by: October 15, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 mt-0.5 text-destructive" />
                      <div>
                        <p className="font-medium">Carbon emissions above target in shipping</p>
                        <p className="text-sm text-muted-foreground">15% above quarterly target</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 mt-0.5 text-warning" />
                      <div>
                        <p className="font-medium">Water usage trending upward</p>
                        <p className="text-sm text-muted-foreground">18% increase in facility B</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>Key dates and milestones</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Quarterly ESG Report</p>
                        <p className="text-sm text-muted-foreground">October 30, 2025</p>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 bg-warning/10 text-warning rounded-full">
                        15 days left
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Supplier Sustainability Training</p>
                        <p className="text-sm text-muted-foreground">November 12, 2025</p>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                        28 days left
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Carbon Neutrality Plan</p>
                        <p className="text-sm text-muted-foreground">December 1, 2025</p>
                      </div>
                      <div className="text-xs font-medium px-2 py-1 bg-muted rounded-full">
                        47 days left
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="emissions">
            <Card>
              <CardHeader>
                <CardTitle>Carbon Emissions Breakdown</CardTitle>
                <CardDescription>Direct vs. indirect emissions over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={emissionsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="direct" name="Direct (Scope 1)" fill="hsl(var(--primary))" />
                      <Bar dataKey="indirect" name="Indirect (Scope 2)" fill="hsl(var(--secondary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Resource Utilization</CardTitle>
                <CardDescription>Current usage vs. sustainability targets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {resourcesData.map((resource) => (
                  <div key={resource.resource} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{resource.resource}</span>
                      <span className="text-sm text-muted-foreground">{resource.used}% of target</span>
                    </div>
                    <Progress value={resource.used} />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="suppliers">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Sustainability Status</CardTitle>
                <CardDescription>Performance and compliance metrics for key suppliers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-auto">
                  <table className="w-full caption-bottom text-sm">
                    <thead className="[&_tr]:border-b">
                      <tr className="border-b">
                        <th className="h-12 px-4 text-left align-middle font-medium">Name</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Score</th>
                        <th className="h-12 px-4 text-left align-middle font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="[&_tr:last-child]:border-0">
                      {suppliersData.map((supplier) => (
                        <tr key={supplier.name} className="border-b">
                          <td className="p-4 align-middle">{supplier.name}</td>
                          <td className="p-4 align-middle">
                            <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              supplier.status === 'Compliant' 
                                ? 'bg-success/15 text-success'
                                : supplier.status === 'Review Needed'
                                ? 'bg-warning/15 text-warning'
                                : 'bg-destructive/15 text-destructive'
                            }`}>
                              {supplier.status}
                            </div>
                          </td>
                          <td className="p-4 align-middle">
                            <div className="flex items-center gap-2">
                              <div className="h-2 w-16 rounded-full bg-muted overflow-hidden">
                                <div 
                                  className={`h-full ${
                                    supplier.score >= 80 
                                      ? 'bg-success' 
                                      : supplier.score >= 70 
                                      ? 'bg-warning' 
                                      : 'bg-destructive'
                                  }`} 
                                  style={{ width: `${supplier.score}%` }} 
                                />
                              </div>
                              <span className="text-sm">{supplier.score}/100</span>
                            </div>
                          </td>
                          <td className="p-4 align-middle">
                            <button className="text-xs text-primary hover:underline">View details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Dashboard;

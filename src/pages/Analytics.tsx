
import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

// Mock data for analytics
const monthlyData = [
  { month: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { month: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { month: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { month: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { month: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { month: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { month: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
  { month: 'Aug', revenue: 5600, expenses: 3200, profit: 2400 },
  { month: 'Sep', revenue: 8900, expenses: 4100, profit: 4800 },
  { month: 'Oct', revenue: 7800, expenses: 3600, profit: 4200 },
  { month: 'Nov', revenue: 6700, expenses: 3800, profit: 2900 },
  { month: 'Dec', revenue: 9800, expenses: 4200, profit: 5600 },
];

const kpiData = [
  { name: 'Carbon Emissions', current: 82, target: 75, unit: 'tons CO2e' },
  { name: 'Resource Efficiency', current: 68, target: 85, unit: '%' },
  { name: 'Supplier Compliance', current: 92, target: 95, unit: '%' },
  { name: 'Waste Reduction', current: 45, target: 35, unit: 'tons' },
];

const Analytics = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track your supply chain performance metrics</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue vs Expenses</CardTitle>
              <CardDescription>Monthly financial overview for the current year</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" name="Revenue" fill="hsl(var(--primary))" />
                    <Bar dataKey="expenses" name="Expenses" fill="hsl(var(--destructive))" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Profit Trend</CardTitle>
              <CardDescription>Monthly profit/loss analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="profit" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Sustainability KPIs</CardTitle>
            <CardDescription>Current performance against sustainability targets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {kpiData.map((kpi) => (
                <div key={kpi.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{kpi.name}</span>
                    <div className="text-sm text-muted-foreground">
                      {kpi.current} / {kpi.target} {kpi.unit}
                    </div>
                  </div>
                  <div className="h-2 w-full bg-muted overflow-hidden rounded-full">
                    <div 
                      className={`h-full ${
                        kpi.current > kpi.target ? "bg-success" : "bg-warning"
                      }`} 
                      style={{ width: `${(kpi.current / kpi.target) * 100}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Analytics;

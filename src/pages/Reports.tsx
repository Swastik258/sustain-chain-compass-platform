
import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { Download, Calendar, ArrowRight, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';

// Mock data for reports
const monthlyEmissions = [
  { month: 'Jan', scope1: 120, scope2: 80, scope3: 250 },
  { month: 'Feb', scope1: 115, scope2: 78, scope3: 240 },
  { month: 'Mar', scope1: 110, scope2: 75, scope3: 235 },
  { month: 'Apr', scope1: 105, scope2: 70, scope3: 230 },
  { month: 'May', scope1: 100, scope2: 65, scope3: 225 },
  { month: 'Jun', scope1: 95, scope2: 60, scope3: 220 },
  { month: 'Jul', scope1: 90, scope2: 55, scope3: 215 },
  { month: 'Aug', scope1: 85, scope2: 50, scope3: 210 },
  { month: 'Sep', scope1: 80, scope2: 45, scope3: 205 },
  { month: 'Oct', scope1: 75, scope2: 42, scope3: 200 },
  { month: 'Nov', scope1: 70, scope2: 40, scope3: 195 },
  { month: 'Dec', scope1: 65, scope2: 38, scope3: 190 },
];

const supplierCompliance = [
  { name: 'Fully Compliant', value: 65 },
  { name: 'Partially Compliant', value: 25 },
  { name: 'Non-Compliant', value: 10 },
];

const COLORS = ['#0088FE', '#FF8042', '#FF0000'];

const resourceUsage = [
  { month: 'Jan', water: 100, energy: 120 },
  { month: 'Feb', water: 98, energy: 118 },
  { month: 'Mar', water: 95, energy: 115 },
  { month: 'Apr', water: 92, energy: 112 },
  { month: 'May', water: 90, energy: 110 },
  { month: 'Jun', water: 88, energy: 108 },
  { month: 'Jul', water: 86, energy: 105 },
  { month: 'Aug', water: 85, energy: 102 },
  { month: 'Sep', water: 83, energy: 100 },
  { month: 'Oct', water: 81, energy: 98 },
  { month: 'Nov', water: 80, energy: 95 },
  { month: 'Dec', water: 78, energy: 92 },
];

const availableReports = [
  {
    id: 'REP-001',
    title: 'Annual Sustainability Report',
    description: 'Comprehensive report on our environmental impact and sustainability initiatives',
    date: '2025-03-15',
    type: 'Annual',
    format: 'PDF'
  },
  {
    id: 'REP-002',
    title: 'Carbon Emissions Q1 2025',
    description: 'Quarterly breakdown of carbon emissions across all operations',
    date: '2025-04-05',
    type: 'Quarterly',
    format: 'XLSX'
  },
  {
    id: 'REP-003',
    title: 'Supplier Compliance Audit',
    description: 'Results of sustainability compliance audits for all active suppliers',
    date: '2025-02-28',
    type: 'Audit',
    format: 'PDF'
  },
  {
    id: 'REP-004',
    title: 'Resource Utilization Summary',
    description: 'Monthly analysis of water and energy usage across all facilities',
    date: '2025-03-30',
    type: 'Monthly',
    format: 'CSV'
  },
  {
    id: 'REP-005',
    title: 'Waste Management Report',
    description: 'Detailed breakdown of waste reduction and recycling initiatives',
    date: '2025-03-01',
    type: 'Quarterly',
    format: 'PDF'
  },
];

const Reports = () => {
  const [activeReportType, setActiveReportType] = useState('all');
  const { toast } = useToast();
  
  // Filter reports based on active type
  const filteredReports = activeReportType === 'all' 
    ? availableReports
    : availableReports.filter(report => report.type.toLowerCase() === activeReportType);
  
  const handleDownload = (reportId: string) => {
    toast({
      title: "Downloading Report",
      description: `${reportId} is being prepared for download.`,
    });
  };

  const handleGenerateReport = () => {
    toast({
      title: "Generate New Report",
      description: "Custom report generation will be available in the next update.",
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports & Analytics</h1>
          <p className="text-muted-foreground">Access and generate sustainability reports</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Carbon Emissions</CardTitle>
              <CardDescription>Monthly trends by scope</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyEmissions.slice(-6)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="scope1" stroke="#8884d8" name="Scope 1" />
                    <Line type="monotone" dataKey="scope2" stroke="#82ca9d" name="Scope 2" />
                    <Line type="monotone" dataKey="scope3" stroke="#ffc658" name="Scope 3" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="ml-auto gap-1">
                View Full Report <ArrowRight className="size-3.5" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Supplier Compliance</CardTitle>
              <CardDescription>Sustainability standards adherence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={supplierCompliance}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {supplierCompliance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="ml-auto gap-1">
                View Full Report <ArrowRight className="size-3.5" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Resource Usage</CardTitle>
              <CardDescription>Water and energy consumption</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={resourceUsage.slice(-6)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="water" name="Water (kL)" fill="#82ca9d" />
                    <Bar dataKey="energy" name="Energy (MWh)" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button variant="link" className="ml-auto gap-1">
                View Full Report <ArrowRight className="size-3.5" />
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle>Available Reports</CardTitle>
                <CardDescription>Access and download sustainability reports</CardDescription>
              </div>
              <Button onClick={handleGenerateReport} className="gap-1.5">
                <FileText className="size-4" />
                Generate Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" onValueChange={setActiveReportType}>
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Reports</TabsTrigger>
                <TabsTrigger value="annual">Annual</TabsTrigger>
                <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="audit">Audit</TabsTrigger>
              </TabsList>
              
              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <div key={report.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">{report.title}</h3>
                        <Badge variant="outline">{report.format}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{report.description}</p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Calendar className="size-3.5" />
                        <span>Generated: {report.date}</span>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDownload(report.id)}
                      className="gap-1.5 whitespace-nowrap"
                    >
                      <Download className="size-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Reports;

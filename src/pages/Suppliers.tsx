
import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock supplier data
const suppliersList = [
  {
    id: 'SUP001',
    name: 'Eco Materials Co.',
    category: 'Raw Materials',
    location: 'Portland, OR',
    contact: 'sarah.johnson@ecomaterials.com',
    phone: '+1 (503) 555-7890',
    website: 'ecomaterials.com',
    status: 'Active',
    rating: 92,
    certifications: ['Organic', 'Fair Trade', 'Carbon Neutral'],
    lastAudit: '2025-02-15',
    riskLevel: 'Low'
  },
  {
    id: 'SUP002',
    name: 'Green Transport Inc.',
    category: 'Logistics',
    location: 'Seattle, WA',
    contact: 'mike.smith@greentransport.com',
    phone: '+1 (206) 555-1234',
    website: 'greentransport.com',
    status: 'Active',
    rating: 88,
    certifications: ['ISO 14001', 'SmartWay'],
    lastAudit: '2025-01-20',
    riskLevel: 'Low'
  },
  {
    id: 'SUP003',
    name: 'Sustainable Packaging',
    category: 'Packaging',
    location: 'Austin, TX',
    contact: 'lisa.wong@sustainpack.com',
    phone: '+1 (512) 555-9876',
    website: 'sustainpack.com',
    status: 'Active',
    rating: 76,
    certifications: ['FSC', 'Biodegradable'],
    lastAudit: '2024-11-05',
    riskLevel: 'Medium'
  },
  {
    id: 'SUP004',
    name: 'Raw Materials Global',
    category: 'Raw Materials',
    location: 'Chicago, IL',
    contact: 'david.chen@rmglobal.com',
    phone: '+1 (312) 555-5432',
    website: 'rmglobal.com',
    status: 'Under Review',
    rating: 62,
    certifications: ['ISO 9001'],
    lastAudit: '2024-09-12',
    riskLevel: 'High'
  },
  {
    id: 'SUP005',
    name: 'Clean Energy Partners',
    category: 'Energy',
    location: 'Denver, CO',
    contact: 'alex.rodriguez@cleanenergy.com',
    phone: '+1 (720) 555-6789',
    website: 'cleanenergy.com',
    status: 'Active',
    rating: 95,
    certifications: ['Green Power', 'Carbon Trust', 'B Corp'],
    lastAudit: '2025-03-10',
    riskLevel: 'Low'
  },
  {
    id: 'SUP006',
    name: 'Textile Innovations',
    category: 'Textiles',
    location: 'Los Angeles, CA',
    contact: 'priya.patel@textileinnovate.com',
    phone: '+1 (213) 555-8765',
    website: 'textileinnovate.com',
    status: 'Inactive',
    rating: 70,
    certifications: ['OEKO-TEX', 'GOTS'],
    lastAudit: '2024-08-22',
    riskLevel: 'Medium'
  }
];

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  // Filter suppliers based on search term
  const filteredSuppliers = suppliersList.filter(supplier => 
    supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    supplier.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddSupplier = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Add supplier functionality will be available in the next update.",
    });
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 85) return 'bg-success/15 text-success';
    if (rating >= 70) return 'bg-primary/15 text-primary';
    if (rating >= 50) return 'bg-warning/15 text-warning';
    return 'bg-destructive/15 text-destructive';
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-success/15 text-success';
      case 'Medium': return 'bg-warning/15 text-warning';
      case 'High': return 'bg-destructive/15 text-destructive';
      default: return '';
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Supplier Management</h1>
            <p className="text-muted-foreground">Monitor and manage your sustainable suppliers</p>
          </div>
          <Button onClick={handleAddSupplier} className="gap-1.5">
            <Plus className="size-4" />
            Add Supplier
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Suppliers</TabsTrigger>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="review">Under Review</TabsTrigger>
            <TabsTrigger value="inactive">Inactive</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Supplier Directory</CardTitle>
                <CardDescription>Manage your network of sustainable suppliers</CardDescription>
                <div className="relative mt-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search suppliers..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Sustainability Rating</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Last Audit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id} className="cursor-pointer hover:bg-muted/50">
                        <TableCell>
                          <div className="font-medium">{supplier.name}</div>
                          <div className="text-sm text-muted-foreground">{supplier.id}</div>
                        </TableCell>
                        <TableCell>{supplier.category}</TableCell>
                        <TableCell className="flex items-center gap-1">
                          <MapPin className="size-3.5" />
                          {supplier.location}
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            supplier.status === 'Active' ? 'default' :
                            supplier.status === 'Under Review' ? 'warning' : 'secondary'
                          }>
                            {supplier.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress value={supplier.rating} className="w-20 h-2" />
                            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRatingColor(supplier.rating)}`}>
                              {supplier.rating}/100
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskColor(supplier.riskLevel)}`}>
                            {supplier.riskLevel}
                          </span>
                        </TableCell>
                        <TableCell>{supplier.lastAudit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="active" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Active suppliers will be listed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="review" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Suppliers under review will be listed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="inactive" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Inactive suppliers will be listed here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {filteredSuppliers.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>Supplier Highlight</CardTitle>
              <CardDescription>Details of a featured sustainable supplier</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">{filteredSuppliers[0].name}</h3>
                  <p className="text-muted-foreground mb-4">{filteredSuppliers[0].category}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-muted-foreground" />
                      <span>{filteredSuppliers[0].location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="size-4 text-muted-foreground" />
                      <span>{filteredSuppliers[0].contact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="size-4 text-muted-foreground" />
                      <span>{filteredSuppliers[0].phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="size-4 text-muted-foreground" />
                      <span>{filteredSuppliers[0].website}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Sustainability Certifications</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {filteredSuppliers[0].certifications.map((cert, index) => (
                      <Badge key={index} variant="outline">{cert}</Badge>
                    ))}
                  </div>
                  
                  <h4 className="font-medium mb-2">Sustainability Rating</h4>
                  <div className="space-y-2">
                    <Progress value={filteredSuppliers[0].rating} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Score</span>
                      <span className="font-medium">{filteredSuppliers[0].rating}/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
};

export default Suppliers;

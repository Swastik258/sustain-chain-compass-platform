
import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Plus, Filter, Star, ArrowUpDown } from 'lucide-react';
import { BadgeCustom } from '@/components/ui/badge-custom';
import { Checkbox } from '@/components/ui/checkbox';

// Mock suppliers data
const suppliersData = [
  {
    id: 'SUP001',
    name: 'EcoTextiles Inc.',
    category: 'Raw Materials',
    location: 'Portland, OR',
    rating: 4.5,
    sustainabilityScore: 92,
    complianceStatus: 'Compliant',
    activeOrders: 3,
    lastOrderDate: '2024-04-01',
  },
  {
    id: 'SUP002',
    name: 'GreenPaper Co.',
    category: 'Packaging',
    location: 'Seattle, WA',
    rating: 4.2,
    sustainabilityScore: 88,
    complianceStatus: 'Compliant',
    activeOrders: 1,
    lastOrderDate: '2024-03-15',
  },
  {
    id: 'SUP003',
    name: 'BioPackaging Solutions',
    category: 'Packaging',
    location: 'Austin, TX',
    rating: 4.7,
    sustainabilityScore: 95,
    complianceStatus: 'Compliant',
    activeOrders: 2,
    lastOrderDate: '2024-04-03',
  },
  {
    id: 'SUP004',
    name: 'NatureTech Solutions',
    category: 'Electronics',
    location: 'San Francisco, CA',
    rating: 3.8,
    sustainabilityScore: 78,
    complianceStatus: 'Under Review',
    activeOrders: 0,
    lastOrderDate: '2024-02-28',
  },
  {
    id: 'SUP005',
    name: 'SunPower Electronics',
    category: 'Electronics',
    location: 'Denver, CO',
    rating: 4.4,
    sustainabilityScore: 85,
    complianceStatus: 'Compliant',
    activeOrders: 1,
    lastOrderDate: '2024-03-22',
  },
  {
    id: 'SUP006',
    name: 'ReThreaded Goods',
    category: 'Textiles',
    location: 'Brooklyn, NY',
    rating: 3.9,
    sustainabilityScore: 81,
    complianceStatus: 'Under Review',
    activeOrders: 0,
    lastOrderDate: '2024-03-10',
  },
  {
    id: 'SUP007',
    name: 'EcoSolve Materials',
    category: 'Raw Materials',
    location: 'Chicago, IL',
    rating: 4.1,
    sustainabilityScore: 83,
    complianceStatus: 'Compliant',
    activeOrders: 2,
    lastOrderDate: '2024-04-05',
  },
  {
    id: 'SUP008',
    name: 'Green Transport Logistics',
    category: 'Logistics',
    location: 'Atlanta, GA',
    rating: 4.3,
    sustainabilityScore: 79,
    complianceStatus: 'Under Review',
    activeOrders: 1,
    lastOrderDate: '2024-03-28',
  },
];

const topSuppliersData = [
  {
    name: 'BioPackaging Solutions',
    score: 95,
    strengths: ['Carbon Neutral', 'Renewable Energy', 'Zero Waste'],
  },
  {
    name: 'EcoTextiles Inc.',
    score: 92,
    strengths: ['Ethical Labor', 'Organic Materials', 'Water Conservation'],
  },
  {
    name: 'GreenPaper Co.',
    score: 88,
    strengths: ['Recycled Materials', 'Forest Stewardship', 'Local Sourcing'],
  },
];

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [complianceFilter, setComplianceFilter] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(suppliersData.map(supplier => supplier.category))];
  const complianceStatuses = ['All', 'Compliant', 'Under Review', 'Non-Compliant'];
  
  // Filter suppliers based on search term and filters
  const filteredSuppliers = suppliersData.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         supplier.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || supplier.category === categoryFilter;
    const matchesCompliance = complianceFilter === 'All' || supplier.complianceStatus === complianceFilter;
    
    return matchesSearch && matchesCategory && matchesCompliance;
  });
  
  const getSustainabilityScoreBadge = (score) => {
    if (score >= 90) {
      return <BadgeCustom variant="success">{score}</BadgeCustom>;
    } else if (score >= 75) {
      return <BadgeCustom variant="secondary">{score}</BadgeCustom>;
    } else {
      return <BadgeCustom variant="destructive">{score}</BadgeCustom>;
    }
  };
  
  const renderRatingStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {Array(fullStars).fill(0).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <Star className="h-4 w-4 text-primary" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="h-4 w-4 fill-primary text-primary" />
            </div>
          </div>
        )}
        {Array(5 - fullStars - (hasHalfStar ? 1 : 0)).fill(0).map((_, i) => (
          <Star key={i + fullStars + (hasHalfStar ? 1 : 0)} className="h-4 w-4 text-muted" />
        ))}
        <span className="ml-2 text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };
  
  const getComplianceStatusBadge = (status) => {
    switch (status) {
      case 'Compliant':
        return <BadgeCustom variant="success">{status}</BadgeCustom>;
      case 'Under Review':
        return <BadgeCustom variant="warning">{status}</BadgeCustom>;
      case 'Non-Compliant':
        return <BadgeCustom variant="destructive">{status}</BadgeCustom>;
      default:
        return <BadgeCustom>{status}</BadgeCustom>;
    }
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Supplier Management</h1>
          <p className="text-muted-foreground">Track, manage, and assess your sustainable suppliers</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {topSuppliersData.map((supplier, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{supplier.name}</CardTitle>
                <CardDescription>Top Performing Supplier</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-2xl font-bold">{supplier.score}</div>
                  <div className="text-sm text-muted-foreground">Sustainability Score</div>
                </div>
                <div className="space-y-1">
                  {supplier.strengths.map((strength, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-success" />
                      <span className="text-sm">{strength}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <Select value={complianceFilter} onValueChange={setComplianceFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Compliance" />
                </SelectTrigger>
                <SelectContent>
                  {complianceStatuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
              <DialogTrigger asChild>
                <Button className="ml-auto">
                  <Plus className="h-4 w-4 mr-2" /> Add Supplier
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Add New Supplier</DialogTitle>
                  <DialogDescription>
                    Enter the supplier details. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Supplier Name
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="category" className="text-right">
                      Category
                    </Label>
                    <Select>
                      <SelectTrigger className="col-span-3">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.filter(c => c !== 'All').map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="location" className="text-right">
                      Location
                    </Label>
                    <Input id="location" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-start gap-4">
                    <Label htmlFor="compliance" className="text-right pt-2">
                      Sustainability Certifications
                    </Label>
                    <div className="col-span-3 space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert1" />
                        <Label htmlFor="cert1">Fair Trade Certified</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert2" />
                        <Label htmlFor="cert2">LEED Certification</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert3" />
                        <Label htmlFor="cert3">ISO 14001</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cert4" />
                        <Label htmlFor="cert4">Cradle to Cradle</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddModalOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsAddModalOpen(false)}>Save</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <Card>
          <CardContent className="p-0">
            <div className="overflow-auto max-h-[70vh]">
              <Table>
                <TableHeader className="sticky top-0 bg-card">
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead className="min-w-[200px]">
                      <div className="flex items-center gap-1">
                        Supplier Name <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Sustainability Score</TableHead>
                    <TableHead>Compliance Status</TableHead>
                    <TableHead>Active Orders</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredSuppliers.length > 0 ? (
                    filteredSuppliers.map((supplier) => (
                      <TableRow key={supplier.id}>
                        <TableCell className="font-medium">{supplier.id}</TableCell>
                        <TableCell>{supplier.name}</TableCell>
                        <TableCell>{supplier.category}</TableCell>
                        <TableCell>{supplier.location}</TableCell>
                        <TableCell>{renderRatingStars(supplier.rating)}</TableCell>
                        <TableCell>{getSustainabilityScoreBadge(supplier.sustainabilityScore)}</TableCell>
                        <TableCell>{getComplianceStatusBadge(supplier.complianceStatus)}</TableCell>
                        <TableCell>{supplier.activeOrders}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="outline" size="sm">View</Button>
                            <Button variant="outline" size="sm">Orders</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        No suppliers found. Try adjusting your filters.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default Suppliers;

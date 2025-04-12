
import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search, Plus, Filter, ArrowUpDown } from 'lucide-react';
import { BadgeCustom } from '@/components/ui/badge-custom';

// Mock inventory data
const inventoryData = [
  {
    id: 'INV001',
    name: 'Organic Cotton T-shirts',
    category: 'Apparel',
    stockLevel: 234,
    status: 'In Stock',
    supplier: 'EcoTextiles Inc.',
    sustainabilityScore: 85,
    lastUpdated: '2024-04-01',
  },
  {
    id: 'INV002',
    name: 'Recycled Paper Notebooks',
    category: 'Stationery',
    stockLevel: 56,
    status: 'Low Stock',
    supplier: 'GreenPaper Co.',
    sustainabilityScore: 92,
    lastUpdated: '2024-04-03',
  },
  {
    id: 'INV003',
    name: 'Bamboo Phone Cases',
    category: 'Accessories',
    stockLevel: 189,
    status: 'In Stock',
    supplier: 'NatureTech Solutions',
    sustainabilityScore: 78,
    lastUpdated: '2024-04-05',
  },
  {
    id: 'INV004',
    name: 'Solar-Powered Chargers',
    category: 'Electronics',
    stockLevel: 12,
    status: 'Low Stock',
    supplier: 'SunPower Electronics',
    sustainabilityScore: 95,
    lastUpdated: '2024-04-02',
  },
  {
    id: 'INV005',
    name: 'Plant-based Plastic Containers',
    category: 'Packaging',
    stockLevel: 432,
    status: 'In Stock',
    supplier: 'BioPackaging Solutions',
    sustainabilityScore: 89,
    lastUpdated: '2024-04-06',
  },
  {
    id: 'INV006',
    name: 'Upcycled Denim Bags',
    category: 'Accessories',
    stockLevel: 0,
    status: 'Out of Stock',
    supplier: 'ReThreaded Goods',
    sustainabilityScore: 82,
    lastUpdated: '2024-03-30',
  },
  {
    id: 'INV007',
    name: 'Water-Soluble Packaging Film',
    category: 'Packaging',
    stockLevel: 87,
    status: 'In Stock',
    supplier: 'EcoSolve Materials',
    sustainabilityScore: 91,
    lastUpdated: '2024-04-04',
  },
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Get unique categories for filter
  const categories = ['All', ...new Set(inventoryData.map(item => item.category))];
  const statuses = ['All', 'In Stock', 'Low Stock', 'Out of Stock'];
  
  // Filter inventory based on search term and filters
  const filteredInventory = inventoryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  const getStockStatusBadge = (status) => {
    switch (status) {
      case 'In Stock':
        return <BadgeCustom variant="success">{status}</BadgeCustom>;
      case 'Low Stock':
        return <BadgeCustom variant="warning">{status}</BadgeCustom>;
      case 'Out of Stock':
        return <BadgeCustom variant="destructive">{status}</BadgeCustom>;
      default:
        return <BadgeCustom variant="default">{status}</BadgeCustom>;
    }
  };
  
  const getSustainabilityScoreBadge = (score) => {
    if (score >= 90) {
      return <BadgeCustom variant="success">{score}</BadgeCustom>;
    } else if (score >= 70) {
      return <BadgeCustom variant="warning">{score}</BadgeCustom>;
    } else {
      return <BadgeCustom variant="destructive">{score}</BadgeCustom>;
    }
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Inventory Management</h1>
          <p className="text-muted-foreground">Track and manage your sustainable product inventory</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search inventory..."
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
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
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
                  <Plus className="h-4 w-4 mr-2" /> Add Item
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[550px]">
                <DialogHeader>
                  <DialogTitle>Add New Inventory Item</DialogTitle>
                  <DialogDescription>
                    Enter the details for the new inventory item. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Item Name
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
                    <Label htmlFor="quantity" className="text-right">
                      Quantity
                    </Label>
                    <Input id="quantity" type="number" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="supplier" className="text-right">
                      Supplier
                    </Label>
                    <Input id="supplier" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sustainability" className="text-right">
                      Sustainability Score
                    </Label>
                    <Input id="sustainability" type="number" min="0" max="100" className="col-span-3" />
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
                        Product Name <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Supplier</TableHead>
                    <TableHead className="text-center">Sustainability Score</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInventory.length > 0 ? (
                    filteredInventory.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.category}</TableCell>
                        <TableCell>{item.stockLevel}</TableCell>
                        <TableCell>{getStockStatusBadge(item.status)}</TableCell>
                        <TableCell>{item.supplier}</TableCell>
                        <TableCell className="text-center">
                          {getSustainabilityScoreBadge(item.sustainabilityScore)}
                        </TableCell>
                        <TableCell>{item.lastUpdated}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="outline" size="sm">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-8">
                        No inventory items found. Try adjusting your filters.
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

export default Inventory;

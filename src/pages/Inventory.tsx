
import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import { Search, Plus, Filter, ArrowUpDown } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

// Mock inventory data
const inventoryItems = [
  { 
    id: '1', 
    name: 'Organic Cotton', 
    category: 'Raw Material',
    quantity: 5000,
    unit: 'kg',
    status: 'In Stock',
    location: 'Warehouse A',
    lastUpdated: '2025-04-05',
    sustainabilityScore: 92
  },
  { 
    id: '2', 
    name: 'Recycled Polyester', 
    category: 'Raw Material',
    quantity: 3200,
    unit: 'kg',
    status: 'In Stock',
    location: 'Warehouse B',
    lastUpdated: '2025-04-02',
    sustainabilityScore: 88
  },
  { 
    id: '3', 
    name: 'Bamboo Fabric', 
    category: 'Raw Material',
    quantity: 800,
    unit: 'yards',
    status: 'Low Stock',
    location: 'Warehouse A',
    lastUpdated: '2025-04-10',
    sustainabilityScore: 95
  },
  { 
    id: '4', 
    name: 'Biodegradable Packaging', 
    category: 'Packaging',
    quantity: 10000,
    unit: 'pcs',
    status: 'In Stock',
    location: 'Warehouse C',
    lastUpdated: '2025-03-28',
    sustainabilityScore: 90
  },
  { 
    id: '5', 
    name: 'Natural Dyes', 
    category: 'Auxiliary',
    quantity: 250,
    unit: 'liters',
    status: 'Low Stock',
    location: 'Warehouse B',
    lastUpdated: '2025-04-08',
    sustainabilityScore: 96
  },
  { 
    id: '6', 
    name: 'Organic Hemp', 
    category: 'Raw Material',
    quantity: 0,
    unit: 'kg',
    status: 'Out of Stock',
    location: 'Warehouse A',
    lastUpdated: '2025-03-15',
    sustainabilityScore: 98
  },
];

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  // Filter inventory items based on search term
  const filteredItems = inventoryItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.location.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleAddInventory = () => {
    toast({
      title: "Feature Coming Soon",
      description: "Add inventory functionality will be available in the next update.",
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Inventory Management</h1>
            <p className="text-muted-foreground">Track and manage your sustainable inventory</p>
          </div>
          <Button onClick={handleAddInventory} className="gap-1.5">
            <Plus className="size-4" />
            Add Item
          </Button>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Inventory Items</CardTitle>
            <CardDescription>Manage your inventory across all warehouses</CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search items..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="gap-1.5">
                <Filter className="size-4" />
                Filter
              </Button>
              <Button variant="outline" className="gap-1.5">
                <ArrowUpDown className="size-4" />
                Sort
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Last Updated</TableHead>
                    <TableHead className="text-right">Sustainability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredItems.map((item) => (
                    <TableRow key={item.id} className="cursor-pointer hover:bg-muted/50">
                      <TableCell className="font-medium">{item.name}</TableCell>
                      <TableCell>{item.category}</TableCell>
                      <TableCell className="text-right">{item.quantity} {item.unit}</TableCell>
                      <TableCell>
                        <Badge variant={
                          item.status === 'In Stock' ? 'default' :
                          item.status === 'Low Stock' ? 'warning' : 'destructive'
                        }>
                          {item.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{item.location}</TableCell>
                      <TableCell>{item.lastUpdated}</TableCell>
                      <TableCell className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.sustainabilityScore >= 90 ? 'bg-success/15 text-success' :
                          item.sustainabilityScore >= 80 ? 'bg-primary/15 text-primary' :
                          'bg-warning/15 text-warning'
                        }`}>
                          {item.sustainabilityScore}/100
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
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

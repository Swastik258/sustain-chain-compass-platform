
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Plus, Filter, ArrowUpDown } from 'lucide-react';
import { BadgeCustom } from '@/components/ui/badge-custom';

// Mock orders data
const customerOrdersData = [
  {
    id: 'ORD-001',
    customer: 'EcoShop Inc.',
    items: 5,
    total: '$2,450.00',
    date: '2024-04-01',
    status: 'Delivered',
    paymentStatus: 'Paid',
    shippingMethod: 'Standard',
  },
  {
    id: 'ORD-002',
    customer: 'Green Living Co.',
    items: 2,
    total: '$980.50',
    date: '2024-04-03',
    status: 'Processing',
    paymentStatus: 'Paid',
    shippingMethod: 'Express',
  },
  {
    id: 'ORD-003',
    customer: 'Sustainable Homes',
    items: 8,
    total: '$4,325.75',
    date: '2024-04-05',
    status: 'Shipped',
    paymentStatus: 'Paid',
    shippingMethod: 'Standard',
  },
  {
    id: 'ORD-004',
    customer: 'GreenTech Solutions',
    items: 1,
    total: '$750.00',
    date: '2024-04-07',
    status: 'Pending',
    paymentStatus: 'Awaiting',
    shippingMethod: 'Express',
  },
  {
    id: 'ORD-005',
    customer: 'Eco Warriors Ltd',
    items: 3,
    total: '$1,290.25',
    date: '2024-04-08',
    status: 'Cancelled',
    paymentStatus: 'Refunded',
    shippingMethod: 'Standard',
  },
];

const supplierOrdersData = [
  {
    id: 'PO-001',
    supplier: 'EcoTextiles Inc.',
    items: 3,
    total: '$6,250.00',
    date: '2024-03-25',
    status: 'Received',
    paymentStatus: 'Paid',
    expectedDelivery: '2024-04-01',
  },
  {
    id: 'PO-002',
    supplier: 'GreenPaper Co.',
    items: 1,
    total: '$2,500.00',
    date: '2024-03-28',
    status: 'In Transit',
    paymentStatus: 'Paid',
    expectedDelivery: '2024-04-08',
  },
  {
    id: 'PO-003',
    supplier: 'BioPackaging Solutions',
    items: 4,
    total: '$8,750.00',
    date: '2024-04-01',
    status: 'Processing',
    paymentStatus: 'Pending',
    expectedDelivery: '2024-04-15',
  },
  {
    id: 'PO-004',
    supplier: 'NatureTech Solutions',
    items: 2,
    total: '$3,800.00',
    date: '2024-04-03',
    status: 'Processing',
    paymentStatus: 'Pending',
    expectedDelivery: '2024-04-18',
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [activeTab, setActiveTab] = useState('customer');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  // Get unique statuses for filter
  const customerStatuses = ['All', 'Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];
  const supplierStatuses = ['All', 'Processing', 'In Transit', 'Received', 'Cancelled'];
  
  const currentStatuses = activeTab === 'customer' ? customerStatuses : supplierStatuses;
  const currentData = activeTab === 'customer' ? customerOrdersData : supplierOrdersData;
  
  // Filter orders based on search term and filters
  const filteredOrders = currentData.filter(order => {
    const searchField = activeTab === 'customer' ? order.customer : order.supplier;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          searchField.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Delivered':
      case 'Received':
        return <BadgeCustom variant="success">{status}</BadgeCustom>;
      case 'Shipped':
      case 'In Transit':
        return <BadgeCustom variant="secondary">{status}</BadgeCustom>;
      case 'Processing':
        return <BadgeCustom variant="warning">{status}</BadgeCustom>;
      case 'Pending':
        return <BadgeCustom variant="default">{status}</BadgeCustom>;
      case 'Cancelled':
        return <BadgeCustom variant="destructive">{status}</BadgeCustom>;
      default:
        return <BadgeCustom variant="default">{status}</BadgeCustom>;
    }
  };
  
  const getPaymentStatusBadge = (status) => {
    switch (status) {
      case 'Paid':
        return <BadgeCustom variant="success">{status}</BadgeCustom>;
      case 'Pending':
        return <BadgeCustom variant="warning">{status}</BadgeCustom>;
      case 'Awaiting':
        return <BadgeCustom variant="secondary">{status}</BadgeCustom>;
      case 'Refunded':
        return <BadgeCustom variant="destructive">{status}</BadgeCustom>;
      default:
        return <BadgeCustom variant="default">{status}</BadgeCustom>;
    }
  };
  
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Orders Management</h1>
          <p className="text-muted-foreground">Manage customer orders and supplier purchase orders</p>
        </div>
        
        <Tabs defaultValue="customer" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full md:w-auto">
            <TabsTrigger className="flex-1 md:flex-none" value="customer">Customer Orders</TabsTrigger>
            <TabsTrigger className="flex-1 md:flex-none" value="supplier">Supplier Orders</TabsTrigger>
          </TabsList>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={`Search ${activeTab === 'customer' ? 'customer' : 'supplier'} orders...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {currentStatuses.map((status) => (
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
                    <Plus className="h-4 w-4 mr-2" /> New Order
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px]">
                  <DialogHeader>
                    <DialogTitle>Create New {activeTab === 'customer' ? 'Customer Order' : 'Purchase Order'}</DialogTitle>
                    <DialogDescription>
                      Enter the order details. Click save when you're done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">
                        {activeTab === 'customer' ? 'Customer' : 'Supplier'}
                      </Label>
                      <Input id="name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="items" className="text-right">
                        Items
                      </Label>
                      <Input id="items" type="number" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="total" className="text-right">
                        Total Amount
                      </Label>
                      <Input id="total" placeholder="$0.00" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="status" className="text-right">
                        Status
                      </Label>
                      <Select>
                        <SelectTrigger className="col-span-3">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          {currentStatuses.filter(s => s !== 'All').map((status) => (
                            <SelectItem key={status} value={status}>
                              {status}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {activeTab === 'customer' && (
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="shipping" className="text-right">
                          Shipping Method
                        </Label>
                        <Select>
                          <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Select shipping method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard</SelectItem>
                            <SelectItem value="express">Express</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                    {activeTab === 'supplier' && (
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="delivery" className="text-right">
                          Expected Delivery
                        </Label>
                        <Input id="delivery" type="date" className="col-span-3" />
                      </div>
                    )}
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
          
          <TabsContent value="customer">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[70vh]">
                  <Table>
                    <TableHeader className="sticky top-0 bg-card">
                      <TableRow>
                        <TableHead className="w-[100px]">Order ID</TableHead>
                        <TableHead className="min-w-[200px]">
                          <div className="flex items-center gap-1">
                            Customer <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Shipping</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.customer}</TableCell>
                            <TableCell>{order.items}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{getStatusBadge(order.status)}</TableCell>
                            <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                            <TableCell>{order.shippingMethod}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8">
                            No orders found. Try adjusting your filters.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="supplier">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-auto max-h-[70vh]">
                  <Table>
                    <TableHeader className="sticky top-0 bg-card">
                      <TableRow>
                        <TableHead className="w-[100px]">PO Number</TableHead>
                        <TableHead className="min-w-[200px]">
                          <div className="flex items-center gap-1">
                            Supplier <ArrowUpDown className="h-4 w-4" />
                          </div>
                        </TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Total</TableHead>
                        <TableHead>Order Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Expected Delivery</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredOrders.length > 0 ? (
                        filteredOrders.map((order) => (
                          <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.supplier}</TableCell>
                            <TableCell>{order.items}</TableCell>
                            <TableCell>{order.total}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{getStatusBadge(order.status)}</TableCell>
                            <TableCell>{getPaymentStatusBadge(order.paymentStatus)}</TableCell>
                            <TableCell>{order.expectedDelivery}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View</Button>
                            </TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell colSpan={9} className="text-center py-8">
                            No purchase orders found. Try adjusting your filters.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Orders;

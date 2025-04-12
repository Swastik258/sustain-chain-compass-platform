
import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, FileDown, FileUp, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock order data
const orders = [
  {
    id: 'ORD-2025-1001',
    customer: 'EcoFashion Inc.',
    date: '2025-04-10',
    amount: 12500.00,
    status: 'Delivered',
    items: 8,
    carbonFootprint: 'Low',
    paymentStatus: 'Paid'
  },
  {
    id: 'ORD-2025-1002',
    customer: 'Green Living Co.',
    date: '2025-04-09',
    amount: 8750.50,
    status: 'In Transit',
    items: 12,
    carbonFootprint: 'Medium',
    paymentStatus: 'Paid'
  },
  {
    id: 'ORD-2025-1003',
    customer: 'Sustainable Home',
    date: '2025-04-08',
    amount: 5280.75,
    status: 'Processing',
    items: 5,
    carbonFootprint: 'Low',
    paymentStatus: 'Pending'
  },
  {
    id: 'ORD-2025-1004',
    customer: 'Eco Office Solutions',
    date: '2025-04-07',
    amount: 15900.25,
    status: 'Delivered',
    items: 20,
    carbonFootprint: 'Medium',
    paymentStatus: 'Paid'
  },
  {
    id: 'ORD-2025-1005',
    customer: 'Organic Products Ltd.',
    date: '2025-04-05',
    amount: 3450.00,
    status: 'Cancelled',
    items: 4,
    carbonFootprint: 'Low',
    paymentStatus: 'Refunded'
  },
  {
    id: 'ORD-2025-1006',
    customer: 'Circular Economy Group',
    date: '2025-04-04',
    amount: 22780.50,
    status: 'Delivered',
    items: 25,
    carbonFootprint: 'High',
    paymentStatus: 'Paid'
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  
  // Filter orders based on search term
  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleExport = () => {
    toast({
      title: "Exporting Orders",
      description: "Your order data is being prepared for download.",
    });
  };

  const handleImport = () => {
    toast({
      title: "Import Orders",
      description: "Order import functionality will be available soon.",
    });
  };

  const handleViewOrder = (orderId: string) => {
    toast({
      title: "Order Details",
      description: `Viewing details for order ${orderId}`,
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
            <p className="text-muted-foreground">Manage and track your customer orders</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleImport} className="gap-1.5">
              <FileUp className="size-4" />
              Import
            </Button>
            <Button onClick={handleExport} className="gap-1.5">
              <FileDown className="size-4" />
              Export
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="transit">In Transit</TabsTrigger>
            <TabsTrigger value="delivered">Delivered</TabsTrigger>
            <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>View and manage all customer orders</CardDescription>
                <div className="relative mt-4">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search orders by ID or customer..."
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
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Items</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Carbon Impact</TableHead>
                      <TableHead>Payment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">{order.id}</TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.date}</TableCell>
                        <TableCell>{order.items}</TableCell>
                        <TableCell className="text-right">${order.amount.toFixed(2)}</TableCell>
                        <TableCell>
                          <Badge variant={
                            order.status === 'Delivered' ? 'default' :
                            order.status === 'In Transit' ? 'secondary' :
                            order.status === 'Processing' ? 'warning' : 'destructive'
                          }>
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            order.carbonFootprint === 'Low' ? 'success' :
                            order.carbonFootprint === 'Medium' ? 'warning' : 'destructive'
                          } className={
                            order.carbonFootprint === 'Low' ? 'bg-success/15 text-success' :
                            order.carbonFootprint === 'Medium' ? 'bg-warning/15 text-warning' : 'bg-destructive/15 text-destructive'
                          }>
                            {order.carbonFootprint}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={
                            order.paymentStatus === 'Paid' ? 'default' :
                            order.paymentStatus === 'Pending' ? 'warning' : 'secondary'
                          }>
                            {order.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleViewOrder(order.id)}
                          >
                            <Eye className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="processing" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Filtered orders in "Processing" status will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transit" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Filtered orders in "In Transit" status will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="delivered" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Filtered orders in "Delivered" status will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="cancelled" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground">
                  Filtered orders in "Cancelled" status will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Orders;

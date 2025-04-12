
import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

const Settings = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  const handleSaveNotifications = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Notification Preferences Updated",
      description: "Your notification settings have been saved.",
    });
  };
  
  const handleSaveAppearance = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appearance Settings Updated",
      description: "Your appearance settings have been saved.",
    });
  };
  
  const handleSaveIntegrations = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Integration Settings Saved",
      description: "Your integration settings have been updated.",
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">Manage your account and application preferences</p>
        </div>
        
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="appearance">Appearance</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details and preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" defaultValue={user?.name || ''} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" defaultValue={user?.email || ''} disabled />
                        <p className="text-xs text-muted-foreground">Your email cannot be changed</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input id="role" defaultValue="Supply Chain Manager" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department</Label>
                        <Input id="department" defaultValue="Operations" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" defaultValue="Sustainable Solutions Inc." />
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <Label htmlFor="currentPassword">Current Password</Label>
                      <Input id="currentPassword" type="password" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input id="newPassword" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Save Changes</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Configure how and when you receive notifications</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveNotifications} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email Notifications</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="orderNotifications">Order Updates</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications when orders are updated</p>
                      </div>
                      <Switch id="orderNotifications" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="supplierNotifications">Supplier Updates</Label>
                        <p className="text-sm text-muted-foreground">Notifications about supplier status changes</p>
                      </div>
                      <Switch id="supplierNotifications" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="reportNotifications">Report Generation</Label>
                        <p className="text-sm text-muted-foreground">Notifications when new reports are generated</p>
                      </div>
                      <Switch id="reportNotifications" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="systemNotifications">System Notifications</Label>
                        <p className="text-sm text-muted-foreground">Important system alerts and updates</p>
                      </div>
                      <Switch id="systemNotifications" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="marketingNotifications">Marketing & Newsletters</Label>
                        <p className="text-sm text-muted-foreground">Product updates and company news</p>
                      </div>
                      <Switch id="marketingNotifications" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Save Preferences</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="appearance">
            <Card>
              <CardHeader>
                <CardTitle>Appearance Settings</CardTitle>
                <CardDescription>Customize the look and feel of your dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveAppearance} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Theme Preferences</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="light-theme" 
                          name="theme" 
                          value="light" 
                          className="form-radio h-4 w-4" 
                          defaultChecked 
                        />
                        <Label htmlFor="light-theme">Light Theme</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="dark-theme" 
                          name="theme" 
                          value="dark" 
                          className="form-radio h-4 w-4" 
                        />
                        <Label htmlFor="dark-theme">Dark Theme</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="system-theme" 
                          name="theme" 
                          value="system" 
                          className="form-radio h-4 w-4" 
                        />
                        <Label htmlFor="system-theme">System Default</Label>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <h3 className="text-lg font-medium">Dashboard Layout</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="compactView">Compact View</Label>
                        <p className="text-sm text-muted-foreground">Reduce spacing to show more content</p>
                      </div>
                      <Switch id="compactView" />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="animationsEnabled">Enable Animations</Label>
                        <p className="text-sm text-muted-foreground">Show smooth transitions and animations</p>
                      </div>
                      <Switch id="animationsEnabled" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <h3 className="text-lg font-medium">Chart Appearance</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="default-palette" 
                          name="chartPalette" 
                          value="default" 
                          className="form-radio h-4 w-4" 
                          defaultChecked 
                        />
                        <Label htmlFor="default-palette">Default Colors</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input 
                          type="radio" 
                          id="colorblind-palette" 
                          name="chartPalette" 
                          value="colorblind" 
                          className="form-radio h-4 w-4" 
                        />
                        <Label htmlFor="colorblind-palette">Colorblind Friendly</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Save Preferences</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="integrations">
            <Card>
              <CardHeader>
                <CardTitle>Integration Settings</CardTitle>
                <CardDescription>Connect and configure third-party services</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSaveIntegrations} className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Connected Services</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Google Workspace</Label>
                        <p className="text-sm text-muted-foreground">Import and export data to Google services</p>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Microsoft 365</Label>
                        <p className="text-sm text-muted-foreground">Sync data with Microsoft services</p>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Slack</Label>
                        <p className="text-sm text-muted-foreground">Receive notifications in your Slack workspace</p>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <Separator />
                    
                    <h3 className="text-lg font-medium">API Integration</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="apiKey">API Key</Label>
                      <div className="flex space-x-2">
                        <Input id="apiKey" type="password" defaultValue="sk_test_12345678901234567890" />
                        <Button variant="outline">Regenerate</Button>
                      </div>
                      <p className="text-xs text-muted-foreground">Use this API key to access the SustainChain API from external applications</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="webhookUrl">Webhook URL</Label>
                      <Input id="webhookUrl" placeholder="https://your-domain.com/webhook" />
                      <p className="text-xs text-muted-foreground">Receive real-time data updates via webhook</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Save Integration Settings</Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Settings;

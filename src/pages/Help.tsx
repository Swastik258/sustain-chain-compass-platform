
import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, HelpCircle, FileText, MessageCircle, Video, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Help = () => {
  const { toast } = useToast();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: "Search functionality will be available in the next update.",
    });
  };
  
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Our support team will get back to you shortly.",
    });
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
          <p className="text-muted-foreground">Find answers to your questions and get support</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>How can we help you?</CardTitle>
            <CardDescription>Search our knowledge base for answers</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search for solutions..." 
                  className="pl-8 w-full md:w-2/3" 
                />
                <Button className="absolute right-0 top-0">Search</Button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        <Tabs defaultValue="faq" className="space-y-4">
          <TabsList>
            <TabsTrigger value="faq">FAQs</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="contact">Contact Support</TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
                <CardDescription>Common questions and answers</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I add a new supplier?</AccordionTrigger>
                    <AccordionContent>
                      To add a new supplier, navigate to the Suppliers page and click the "Add Supplier" button in the top right corner. Fill out the required information in the form and click "Save" to create a new supplier record.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How is the sustainability score calculated?</AccordionTrigger>
                    <AccordionContent>
                      The sustainability score is calculated based on multiple factors including environmental impact, social responsibility, governance practices, and compliance with industry standards. Scores range from 0 to 100, with higher scores indicating better sustainability practices.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Can I customize my dashboard?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can customize your dashboard by rearranging widgets and selecting which metrics to display. Click the "Customize" button in the top right corner of the dashboard to enter edit mode, then drag and drop components as needed.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I generate sustainability reports?</AccordionTrigger>
                    <AccordionContent>
                      To generate a sustainability report, go to the Reports page and click the "Generate Report" button. Select the type of report you want to create, specify the date range and other parameters, then click "Generate" to create your report.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>How can I invite team members to my organization?</AccordionTrigger>
                    <AccordionContent>
                      To invite team members, go to the Settings page and select the "Team" tab. Click the "Invite Member" button, enter the email address of the person you want to invite, assign their role, and click "Send Invitation".
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-6">
                    <AccordionTrigger>What do the different risk levels mean?</AccordionTrigger>
                    <AccordionContent>
                      Risk levels indicate the potential sustainability risks associated with suppliers or processes:
                      <ul className="list-disc pl-6 mt-2 space-y-1">
                        <li>Low Risk: Meets or exceeds all sustainability requirements</li>
                        <li>Medium Risk: Some areas need improvement but no critical issues</li>
                        <li>High Risk: Significant gaps in sustainability practices that need immediate attention</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>User Guides & Documentation</CardTitle>
                <CardDescription>Step-by-step instructions for using the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-5" /> Getting Started Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Learn the basics of navigating and using the platform</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Read Guide <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-5" /> Supplier Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Learn how to add, manage, and assess suppliers</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Read Guide <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-5" /> Sustainability Reporting
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Create and analyze sustainability reports</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Read Guide <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-5" /> Data Import/Export
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Learn how to import and export data from the platform</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Read Guide <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-5" /> API Documentation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Technical documentation for API integration</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Read Guide <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <FileText className="size-5" /> Advanced Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Discover advanced features and customization options</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Read Guide <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="videos">
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
                <CardDescription>Visual guides to help you use the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                        <Video className="size-10 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg mt-2">Platform Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">A complete overview of the SustainChain platform</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Watch Video <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                        <Video className="size-10 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg mt-2">Setting Up Your Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Learn how to set up and configure your account</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Watch Video <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="aspect-video bg-muted flex items-center justify-center rounded-md">
                        <Video className="size-10 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg mt-2">Managing Suppliers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">How to add and manage sustainable suppliers</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="link" className="gap-1 p-0">
                        Watch Video <ExternalLink className="size-3.5" />
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Get help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Name</label>
                      <Input id="name" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input id="subject" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="w-full min-h-[80px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="priority" className="text-sm font-medium">Priority</label>
                    <select 
                      id="priority"
                      className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                  
                  <Button type="submit" className="gap-1.5">
                    <MessageCircle className="size-4" />
                    Send Message
                  </Button>
                </form>
                
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-medium mb-2">Other Support Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-sm text-muted-foreground">support@sustainchain.com</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-sm text-muted-foreground">+1 (800) 123-4567</p>
                      <p className="text-xs text-muted-foreground">Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default Help;

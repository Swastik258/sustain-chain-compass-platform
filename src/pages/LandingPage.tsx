
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  CheckCircle2,
  ChevronRight,
  BarChart3,
  ChevronDown,
  LeafyGreen,
  Truck,
  TrendingUp,
  Shield,
  Globe,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useAuth } from '@/hooks/useAuth';

const features = [
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "Analytics Dashboard",
    description: "Get a comprehensive view of your supply chain sustainability metrics in one place."
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Supplier Management",
    description: "Track, monitor, and collaborate with suppliers to ensure sustainability compliance."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: "Performance Tracking",
    description: "Monitor key sustainability indicators and track progress over time."
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Compliance Management",
    description: "Stay compliant with environmental regulations and industry standards."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "ESG Reporting",
    description: "Generate comprehensive Environmental, Social, and Governance reports for stakeholders."
  },
  {
    icon: <LeafyGreen className="h-10 w-10 text-primary" />,
    title: "Carbon Footprint Analysis",
    description: "Measure, analyze, and reduce your supply chain's carbon footprint."
  }
];

const faqs = [
  {
    question: "What is SustainChain Compass?",
    answer: "SustainChain Compass is a comprehensive SaaS platform designed to help businesses manage and optimize their supply chain sustainability. Our platform provides tools for supplier management, sustainability reporting, carbon footprint tracking, and more."
  },
  {
    question: "How does the subscription model work?",
    answer: "We offer flexible subscription tiers based on your business needs. Our Basic plan is perfect for small businesses, while our Professional and Enterprise plans offer additional features for larger organizations. All plans include core sustainability tracking features, with advanced analytics and customization available in higher tiers."
  },
  {
    question: "Can I integrate SustainChain with my existing systems?",
    answer: "Yes! SustainChain Compass is designed to integrate with your existing ERP, inventory management, and procurement systems through our API. We also offer custom integration services for enterprise clients."
  },
  {
    question: "How secure is my supply chain data?",
    answer: "We take data security seriously. All data is encrypted both in transit and at rest, and we comply with industry-standard security protocols. We also offer role-based access controls to ensure only authorized personnel can access sensitive information."
  },
  {
    question: "Do you offer training and support?",
    answer: "Absolutely. All subscription plans include access to our knowledge base and email support. Professional and Enterprise plans include dedicated customer success managers, training sessions, and priority support."
  }
];

const testimonials = [
  {
    quote: "SustainChain Compass transformed our approach to sustainability management. We've reduced our carbon footprint by 30% in the first year.",
    author: "Sarah Chen",
    position: "Sustainability Director",
    company: "Green Manufacturing Co."
  },
  {
    quote: "The analytics and reporting capabilities have made ESG compliance so much easier. Our team can focus on implementing improvements rather than collecting data.",
    author: "Michael Rodriguez",
    position: "Supply Chain Manager",
    company: "Global Logistics Inc."
  },
  {
    quote: "The supplier management tools helped us identify sustainability risks we didn't even know existed. Now we're working collaboratively with our partners to build a truly sustainable supply chain.",
    author: "Priya Patel",
    position: "CEO",
    company: "EcoRetail Solutions"
  }
];

const LandingPage = () => {
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">SC</div>
            <span className="font-bold text-xl">SustainChain</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</a>
            <a href="#faqs" className="text-sm font-medium hover:text-primary">FAQs</a>
          </nav>
          
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <Button asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden landing-gradient">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Sustainable Supply Chain Management Made Simple
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl text-white/80">
                  Track, measure, and optimize your supply chain's environmental impact with our comprehensive SaaS platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                  <Link to="/signup">
                    Get Started
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
                  <a href="#features">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-white/10 animate-fade-up backdrop-blur-sm bg-white/10">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
                  alt="Dashboard Preview"
                  className="w-full aspect-video object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Abstract shapes */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-3/4 h-3/4 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl -z-10"></div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Powerful Features for Sustainable Supply Chains</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Everything you need to track, measure, and improve your supply chain sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-card rounded-lg border p-6 shadow-sm transition-shadow duration-300 hover:shadow-card flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 rounded-full bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How SustainChain Compass Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              A simple three-step process to transform your supply chain sustainability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold">Connect Your Data</h3>
              <p className="text-muted-foreground">Import your supply chain data or connect to your existing systems through our intuitive integrations.</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold">Analyze & Monitor</h3>
              <p className="text-muted-foreground">Get instant insights into your sustainability metrics through our analytics dashboard.</p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold">Take Action</h3>
              <p className="text-muted-foreground">Implement improvements based on data-driven recommendations and track your progress.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-card rounded-lg border p-6 flex flex-col shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Basic</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$299</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">For small businesses getting started with sustainable supply chains</p>
              </div>
              <ul className="space-y-3 my-6 flex-1">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Sustainability dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Up to 25 suppliers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Basic reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Email support</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
            
            {/* Professional Plan */}
            <div className="bg-card rounded-lg border border-primary p-6 flex flex-col shadow-card relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium">Professional</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">$599</span>
                  <span className="text-muted-foreground ml-1">/month</span>
                </div>
                <p className="text-muted-foreground mt-2">For growing businesses with complex supply chains</p>
              </div>
              <ul className="space-y-3 my-6 flex-1">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Up to 100 suppliers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Custom reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>API access</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-card rounded-lg border p-6 flex flex-col shadow-sm">
              <div className="mb-4">
                <h3 className="text-lg font-medium">Enterprise</h3>
                <div className="mt-2">
                  <span className="text-3xl font-bold">Custom</span>
                </div>
                <p className="text-muted-foreground mt-2">For large organizations with extensive supply networks</p>
              </div>
              <ul className="space-y-3 my-6 flex-1">
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Unlimited suppliers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>Dedicated success manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>SLA guarantees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-primary" />
                  <span>On-premise deployment option</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Hear from businesses that have transformed their supply chain sustainability with SustainChain Compass
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-lg border p-6 shadow-sm">
                <div className="flex-1">
                  <div className="text-4xl text-primary mb-4">"</div>
                  <blockquote className="text-lg mb-4 italic">
                    {testimonial.quote}
                  </blockquote>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section id="faqs" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Find answers to common questions about SustainChain Compass
            </p>
          </div>
          
          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 md:py-24 landing-gradient text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl mb-4">Ready to Transform Your Supply Chain?</h2>
          <p className="mx-auto max-w-[700px] text-white/80 md:text-lg mb-8">
            Join thousands of businesses building more sustainable supply chains with SustainChain Compass
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/signup">
                Get Started Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent border-white text-white hover:bg-white/10">
              <Link to="/demo">
                Request a Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">SC</div>
                <span className="font-bold text-xl">SustainChain</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering businesses to build sustainable supply chains for a better future.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Integrations</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Sustainability Resources</a></li>
                <li><a href="#faqs" className="text-muted-foreground hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 SustainChain Compass. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

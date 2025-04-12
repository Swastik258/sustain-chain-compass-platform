
# SustainChain Compass Platform Documentation

## Overview
SustainChain Compass is a comprehensive Sustainable Supply Chain Management (SCM) Software as a Service (SaaS) application. This documentation provides details about each page, feature, and functionality to help users understand the system and make changes as needed.

## Table of Contents
1. [Authentication](#authentication)
2. [Landing Page](#landing-page)
3. [Dashboard](#dashboard)
4. [Analytics](#analytics)
5. [Inventory](#inventory)
6. [Orders](#orders)
7. [Suppliers](#suppliers) 
8. [Reports](#reports)
9. [Settings](#settings)
10. [Help](#help)
11. [Mobile & Responsiveness](#mobile--responsiveness)
12. [Customization Guide](#customization-guide)

## Authentication

### Login Page
- **Path**: `/login`
- **Purpose**: Authenticates existing users
- **Features**:
  - Email and password login
  - "Remember me" option
  - Forgot password link
  - Redirect to signup for new users
- **Customization**: Modify `src/pages/Login.tsx` to change login fields, validation rules, or UI appearance

### Signup Page
- **Path**: `/signup`
- **Purpose**: Registers new users
- **Features**:
  - Name, email, and password registration
  - Terms & conditions agreement
  - Redirect to login for existing users
- **Customization**: Modify `src/pages/Signup.tsx` to change registration fields, validation rules, or UI appearance

## Landing Page
- **Path**: `/`
- **Purpose**: Marketing and information page for non-authenticated users
- **Features**:
  - Hero section with call-to-action
  - Feature highlights
  - Testimonials
  - Pricing information
  - Footer with links
- **Customization**: Modify `src/pages/LandingPage.tsx` to change content, sections, or layout

## Dashboard
- **Path**: `/dashboard`
- **Purpose**: Main hub for authenticated users
- **Features**:
  - Overview of key metrics
  - Quick action buttons
  - Recent activity feed
  - Status cards for various supply chain elements
- **Customization**: Modify `src/pages/Dashboard.tsx` to change metrics displayed, card layouts, or add/remove widgets

## Analytics
- **Path**: `/analytics`
- **Purpose**: In-depth data analysis and visualization
- **Features**:
  - Revenue vs. Expenses bar chart
  - Profit trend line chart 
  - Sustainability KPIs with visual indicators
- **Technical Details**:
  - Uses Recharts library for data visualization
  - Responsive design adapts to screen size
  - Mobile view shows reduced data points (last 6 months) to improve readability
- **Customization**: 
  - Add new charts by including additional Recharts components in `src/pages/Analytics.tsx`
  - Modify chart data in the `monthlyData` and `kpiData` arrays
  - Add new KPI types by extending the `kpiData` array

## Inventory
- **Path**: `/inventory`
- **Purpose**: Track and manage product inventory
- **Features**:
  - Inventory item listing with search and filter
  - Stock level indicators
  - Quick edit functionality
  - Add new inventory item form
- **Customization**: 
  - Modify `src/pages/Inventory.tsx` to change table columns, filters, or add new inventory management features
  - Add additional fields to inventory items by extending the inventory item interface

## Orders
- **Path**: `/orders`
- **Purpose**: Manage customer and supplier orders
- **Features**:
  - Order listing with search and filter
  - Order status indicators (Pending, Processing, Shipped, Delivered, Cancelled)
  - Order details view
  - Create new order functionality
- **Customization**:
  - Modify `src/pages/Orders.tsx` to change order management workflow, statuses, or table columns
  - Add additional order processing steps by extending the order status options

## Suppliers
- **Path**: `/suppliers`
- **Purpose**: Manage supplier relationships and information
- **Features**:
  - Supplier listing with search and filter
  - Supplier details and performance metrics
  - Add new supplier form
  - Sustainability rating system
- **Customization**:
  - Modify `src/pages/Suppliers.tsx` to change supplier information fields, rating calculation, or table columns
  - Add additional supplier assessment criteria by extending the supplier rating system

## Reports
- **Path**: `/reports`
- **Purpose**: Generate and view detailed reports
- **Features**:
  - Available report templates
  - Custom report builder
  - Export options (PDF, CSV, Excel)
  - Scheduling for automated reports
- **Customization**:
  - Modify `src/pages/Reports.tsx` to add new report types, change export formats, or customize report parameters
  - Create new report templates by adding them to the report template array

## Settings
- **Path**: `/settings`
- **Purpose**: Configure user and application settings
- **Features**:
  - User profile settings
  - Account settings
  - Notification preferences
  - Integration configurations
  - Theme and display options
- **Customization**:
  - Modify `src/pages/Settings.tsx` to add new setting categories, preferences, or configuration options
  - Add theme customization by extending the theme options in the settings

## Help
- **Path**: `/help`
- **Purpose**: Provide user assistance and documentation
- **Features**:
  - Searchable FAQ
  - Video tutorials
  - Contact support form
  - Documentation links
- **Customization**:
  - Modify `src/pages/Help.tsx` to add new help content, change support options, or update FAQs
  - Add additional help resources by extending the help resources array

## Mobile & Responsiveness

The application is fully responsive and works on mobile, tablet, and desktop devices. Here are the key responsiveness features:

### Responsive Layout
- Uses responsive utility classes from TailwindCSS
- Layout adapts based on screen size (sm, md, lg, xl breakpoints)
- Mobile-first design approach

### Mobile Navigation
- Collapsible sidebar becomes off-canvas menu on mobile
- Top navigation includes mobile menu toggle
- Touch-friendly interaction elements

### Responsive Components
- Cards stack vertically on mobile, grid layout on larger screens
- Tables become scrollable on smaller screens
- Charts adjust data density based on screen size
- Form elements are sized appropriately for touch input on mobile

### Customization for Mobile Experience
- To modify mobile behavior, check for the `isMobile` hook usage in components
- Mobile-specific layouts typically use the pattern: `className="default-style md:larger-screen-style"`
- The sidebar behavior can be customized in `src/components/Sidebar.tsx`

## Customization Guide

### Theme & Styling
- **Color Scheme**: Edit `src/index.css` to modify the color variables in the `:root` section
- **Component Styling**: Individual component styles are in their respective component files using Tailwind CSS classes
- **Global Styles**: Global styles are defined in `src/index.css`

### Adding New Features
1. **Create Component**: Create a new component in the `src/components` directory
2. **Add Route**: If it's a page, add a new route in `src/App.tsx`
3. **Add Navigation**: Update `src/components/Sidebar.tsx` to include a link to the new page

### Data Management
- **Mock Data**: Currently, the application uses hardcoded mock data in each page component
- **API Integration**: To connect to a real backend, create API service files in a new `src/services` directory and use React Query for data fetching

### Authentication
- Authentication is handled through the `useAuth` hook in `src/hooks/useAuth.tsx`
- To implement real authentication, update the hook to connect with your authentication provider

### Modifying Pages
Each page follows a similar structure:
1. **Page Container**: Uses `AppLayout` component for consistent layout
2. **Page Header**: Contains title and description
3. **Content Sections**: Usually cards or sections with specific functionality
4. **Data Display**: Tables, charts, or forms for data interaction

To modify a page, locate its file in `src/pages` and update the JSX structure and functionality as needed.

### Adding New Components
1. Create the component file in `src/components`
2. Import and use existing UI components from `src/components/ui`
3. Use Tailwind CSS for styling
4. Import and use the component where needed

### Best Practices
- Keep components small and focused on a single responsibility
- Use TypeScript interfaces to define props and data structures
- Follow the existing pattern of using shadcn/ui components for consistency
- Test responsive behavior across different screen sizes

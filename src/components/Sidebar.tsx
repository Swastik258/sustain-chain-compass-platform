
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, BarChartBig, Warehouse, ShoppingCart, Users, FileBarChart, 
  Settings, HelpCircle, Menu, X, LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const { logout } = useAuth();
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const navigationItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Analytics', icon: BarChartBig, path: '/analytics' },
    { name: 'Inventory', icon: Warehouse, path: '/inventory' },
    { name: 'Orders', icon: ShoppingCart, path: '/orders' },
    { name: 'Suppliers', icon: Users, path: '/suppliers' },
    { name: 'Reports', icon: FileBarChart, path: '/reports' },
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Help', icon: HelpCircle, path: '/help' },
  ];
  
  return (
    <div 
      className={cn(
        "bg-sidebar h-full border-r flex flex-col transition-all duration-300 ease-in-out",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {expanded ? (
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">SC</div>
            <span className="font-semibold text-lg">SustainChain</span>
          </Link>
        ) : (
          <div className="mx-auto w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">SC</div>
        )}
        
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {expanded ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      
      <div className="flex-1 py-6 overflow-y-auto">
        <nav className="px-2 space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-2.5 rounded-md transition-colors",
                  isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon size={20} className="shrink-0" />
                {expanded && <span className="ml-3 font-medium">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t">
        <Button 
          variant="ghost" 
          className={cn(
            "w-full flex items-center justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            !expanded && "justify-center px-0"
          )}
          onClick={logout}
        >
          <LogOut size={20} />
          {expanded && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  );
};

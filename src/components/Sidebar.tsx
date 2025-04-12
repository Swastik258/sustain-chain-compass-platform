
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, BarChartBig, Warehouse, ShoppingCart, Users, FileBarChart, 
  Settings, HelpCircle, Menu, X, LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isOpen, onToggle }: SidebarProps) => {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation();
  const { logout } = useAuth();
  const isMobile = useIsMobile();
  
  // Automatically collapse on mobile
  useEffect(() => {
    if (isMobile) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, [isMobile]);
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
    if (!isMobile) {
      onToggle();
    }
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
  
  // On mobile, we render a different sidebar that overlays the content
  if (isMobile) {
    return (
      <>
        {/* Mobile sidebar overlay */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
          onClick={onToggle}
        />
        
        {/* Mobile sidebar */}
        <div 
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar border-r shadow-lg transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">SC</div>
              <span className="font-semibold text-lg">SustainChain</span>
            </Link>
            
            <Button variant="ghost" size="icon" onClick={onToggle}>
              <X size={18} />
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
                    onClick={isMobile ? onToggle : undefined}
                  >
                    <item.icon size={20} className="shrink-0" />
                    <span className="ml-3 font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
          
          <div className="p-4 border-t">
            <Button 
              variant="ghost" 
              className="w-full flex items-center justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              onClick={logout}
            >
              <LogOut size={20} />
              <span className="ml-3">Logout</span>
            </Button>
          </div>
        </div>
      </>
    );
  }
  
  // Desktop sidebar
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

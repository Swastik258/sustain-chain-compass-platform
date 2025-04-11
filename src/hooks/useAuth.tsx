
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Mock users for demo purposes
const DEMO_USERS: User[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin@example.com',
    role: 'admin'
  },
  {
    id: '2',
    name: 'Demo User',
    email: 'user@example.com',
    role: 'user'
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem('scm_user');
    
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Error parsing saved user:', error);
        localStorage.removeItem('scm_user');
      }
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      // Mock authentication for demo
      const user = DEMO_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
      
      if (!user) {
        toast({
          title: "Authentication Error",
          description: "Invalid email or password",
          variant: "destructive",
        });
        return false;
      }
      
      // In a real app, you'd validate the password here
      
      // Save user to localStorage for persistence
      localStorage.setItem('scm_user', JSON.stringify(user));
      setUser(user);
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name}!`,
      });
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // In a real app, this would be an API call
      // For demo, just pretend we created a new user
      
      // Check if email already exists
      if (DEMO_USERS.some(u => u.email.toLowerCase() === email.toLowerCase())) {
        toast({
          title: "Signup Error",
          description: "An account with this email already exists",
          variant: "destructive",
        });
        return false;
      }
      
      // Mock user creation
      const newUser: User = {
        id: `user_${Date.now()}`,
        name,
        email,
        role: 'user'
      };
      
      // Save user to localStorage for persistence
      localStorage.setItem('scm_user', JSON.stringify(newUser));
      setUser(newUser);
      
      toast({
        title: "Account Created",
        description: "Your account has been created successfully!",
      });
      
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      toast({
        title: "Signup Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('scm_user');
    setUser(null);
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully."
    });
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      isAuthenticated: !!user,
      login, 
      signup, 
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
};

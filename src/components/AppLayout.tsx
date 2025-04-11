
import React from 'react';
import { Sidebar } from './Sidebar';
import { TopNav } from './TopNav';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto bg-muted/30 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

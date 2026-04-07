import { useState } from 'react';
import { 
  LayoutDashboard, 
  Landmark, 
  ArrowRightLeft, 
  CreditCard, 
  Plus, 
  HelpCircle, 
  LogOut, 
  Search, 
  Bell, 
  Settings, 
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import Dashboard from './components/Dashboard';
import AccountDetails from './components/AccountDetails';
import Transfers from './components/Transfers';
import CardManagement from './components/CardManagement';
import Support from './components/Support';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Account Details':
        return <AccountDetails />;
      case 'Transfers':
        return <Transfers />;
      case 'Card Management':
        return <CardManagement />;
      case 'Support':
        return <Support />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-surface font-sans text-primary">
      {/* Sidebar */}
      <aside className="hidden md:flex h-screen w-64 fixed left-0 top-0 bg-white border-r border-outline-variant/20 flex-col py-8 px-4 z-50">
        <div className="mb-12 px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center">
              <Landmark className="text-secondary-fixed w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-black font-headline tracking-tight">The Vault</h2>
              <p className="font-headline uppercase tracking-widest text-[10px] text-on-surface-variant/60">Sovereign Wealth</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            { name: 'Dashboard', icon: LayoutDashboard },
            { name: 'Account Details', icon: Landmark },
            { name: 'Transfers', icon: ArrowRightLeft },
            { name: 'Card Management', icon: CreditCard },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 transition-all duration-300 ease-in-out font-headline uppercase tracking-widest text-[10px] font-bold cursor-pointer",
                activeTab === item.name 
                  ? "text-secondary border-r-2 border-secondary" 
                  : "text-on-surface-variant/60 hover:text-primary hover:bg-surface-container"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="mt-auto px-4 space-y-4">
          <button 
            onClick={() => setActiveTab('Transfers')}
            className="w-full bg-secondary text-white py-3 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            Quick Transfer
          </button>
          <div className="pt-6 border-t border-outline-variant/20 space-y-2">
            <button 
              onClick={() => setActiveTab('Support')}
              className={cn(
                "w-full flex items-center gap-4 py-2 font-headline uppercase tracking-widest text-[10px] font-bold cursor-pointer transition-colors",
                activeTab === 'Support' ? "text-secondary" : "text-on-surface-variant/60 hover:text-primary"
              )}
            >
              <HelpCircle className="w-5 h-5" />
              Support
            </button>
            <button className="w-full flex items-center gap-4 py-2 text-on-surface-variant/60 hover:text-primary font-headline uppercase tracking-widest text-[10px] font-bold cursor-pointer">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Header */}
        <header className="w-full sticky top-0 z-40 bg-white/70 backdrop-blur-xl flex justify-between items-center px-8 h-20 border-b border-outline-variant/10">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold font-headline tracking-tight">The Ledger</h1>
            <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full ring-1 ring-outline-variant/10">
              <Search className="text-on-surface-variant/40 w-4 h-4 mr-2" />
              <input 
                type="text" 
                placeholder="Search Archives..." 
                className="bg-transparent border-none focus:outline-none text-sm w-64 placeholder-on-surface-variant/40"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant/60 hover:bg-surface-container rounded-full transition-colors relative cursor-pointer">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
            </button>
            <button className="p-2 text-on-surface-variant/60 hover:bg-surface-container rounded-full transition-colors cursor-pointer">
              <Settings className="w-5 h-5" />
            </button>
            <div className="h-10 w-10 rounded-full overflow-hidden ml-2 ring-2 ring-secondary/20">
              <img 
                src="https://picsum.photos/seed/profile/100/100" 
                alt="User profile" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
}



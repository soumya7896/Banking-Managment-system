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
  ChevronRight,
  ShoppingCart,
  PlayCircle,
  Wallet,
  Send,
  Receipt,
  QrCode,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { cn } from '@/src/lib/utils';

const spendingData = [
  { name: 'JAN', value: 40 },
  { name: 'FEB', value: 60 },
  { name: 'MAR', value: 45 },
  { name: 'APR', value: 85 },
  { name: 'MAY', value: 55 },
  { name: 'JUN', value: 75 },
  { name: 'JUL', value: 40 },
  { name: 'AUG', value: 65 },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');

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
          <button className="w-full bg-secondary text-white py-3 rounded-xl font-bold transition-all hover:opacity-90 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
            <Plus className="w-4 h-4" />
            Quick Transfer
          </button>
          <div className="pt-6 border-t border-outline-variant/20 space-y-2">
            <button className="w-full flex items-center gap-4 py-2 text-on-surface-variant/60 hover:text-primary font-headline uppercase tracking-widest text-[10px] font-bold cursor-pointer">
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

        <div className="p-8 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-12 lg:col-span-8 space-y-8">
              {/* Balance & Card Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="md:col-span-2 bg-primary-container rounded-xl p-8 text-white relative overflow-hidden editorial-shadow"
                >
                  <div className="relative z-10">
                    <span className="font-headline uppercase tracking-widest text-[10px] opacity-70">Total Available Liquidity</span>
                    <div className="flex items-baseline gap-2 mt-2">
                      <h2 className="text-5xl font-extrabold font-headline">$142,850.00</h2>
                      <span className="text-secondary-fixed text-sm font-bold">+2.4%</span>
                    </div>
                    <div className="mt-12 flex gap-12">
                      <div>
                        <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Checking</p>
                        <p className="text-xl font-headline font-bold">$42,300</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-widest opacity-50 mb-1">Savings</p>
                        <p className="text-xl font-headline font-bold">$100,550</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white rounded-xl p-6 editorial-shadow border border-outline-variant/10 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-start">
                    <CreditCard className="text-secondary w-6 h-6 fill-secondary" />
                    <span className="font-headline text-[10px] font-bold text-on-surface-variant">VISA PLATINUM</span>
                  </div>
                  <div className="mt-8">
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Current Card</p>
                    <p className="text-lg font-headline font-bold tracking-widest">**** 9022</p>
                  </div>
                  <button className="mt-4 text-secondary text-[10px] font-bold uppercase tracking-widest flex items-center hover:underline cursor-pointer">
                    Manage Limits <ChevronRight className="w-3 h-3 ml-1" />
                  </button>
                </motion.div>
              </div>

              {/* Spending Analytics */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 editorial-shadow"
              >
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h3 className="text-2xl font-bold font-headline">Spending Analytics</h3>
                    <p className="text-sm text-on-surface-variant">Monthly treasury flow summary</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-surface-container-highest rounded-full cursor-pointer">Week</button>
                    <button className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-primary text-white rounded-full cursor-pointer">Month</button>
                  </div>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={spendingData}>
                      <XAxis 
                        dataKey="name" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fontSize: 10, fontWeight: 700, fill: '#44474e' }}
                        dy={10}
                      />
                      <Tooltip 
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                      />
                      <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                        {spendingData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.name === 'JUN' ? '#006a6a' : '#e1e3e4'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.section>

              {/* Recent Transactions */}
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-surface-container-low rounded-xl p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl font-bold font-headline">Recent Transactions</h3>
                  <button className="text-sm font-bold text-secondary cursor-pointer">View Archives</button>
                </div>
                <div className="space-y-4">
                  {[
                    { name: 'Whole Foods Market', category: 'Groceries', time: '2 hours ago', amount: -124.50, icon: ShoppingCart, color: 'bg-surface-container-highest' },
                    { name: 'Bloomberg Terminal', category: 'Subscription', time: 'Yesterday', amount: -2000.00, icon: PlayCircle, color: 'bg-surface-container-highest' },
                    { name: 'Sovereign Asset Management', category: 'Salary', time: 'June 15', amount: 12500.00, icon: Wallet, color: 'bg-secondary-container', iconColor: 'text-on-secondary-container' },
                  ].map((tx, i) => (
                    <div key={i} className="bg-white p-4 rounded-xl flex items-center justify-between hover:bg-surface-bright transition-colors cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center", tx.color)}>
                          <tx.icon className={cn("w-5 h-5", tx.iconColor || "text-on-surface-variant")} />
                        </div>
                        <div>
                          <p className="font-bold text-sm">{tx.name}</p>
                          <p className="text-xs text-on-surface-variant">{tx.category} • {tx.time}</p>
                        </div>
                      </div>
                      <p className={cn("font-headline font-bold", tx.amount < 0 ? "text-error" : "text-secondary")}>
                        {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toLocaleString()}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>

            {/* Right Column */}
            <div className="col-span-12 lg:col-span-4 space-y-8">
              {/* Quick Actions */}
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 editorial-shadow"
              >
                <h3 className="text-lg font-bold font-headline mb-8">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Send Money', icon: Send, className: 'milled-metal-button text-white' },
                    { name: 'Pay Bills', icon: Receipt, className: 'bg-secondary text-white' },
                    { name: 'Scan QR', icon: QrCode, className: 'bg-surface-container-high text-primary' },
                    { name: 'Investment', icon: TrendingUp, className: 'bg-surface-container-high text-primary' },
                  ].map((action) => (
                    <button 
                      key={action.name}
                      className={cn(
                        "rounded-xl p-6 flex flex-col items-center gap-3 transition-transform active:scale-95 cursor-pointer",
                        action.className
                      )}
                    >
                      <action.icon className="w-6 h-6" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{action.name}</span>
                    </button>
                  ))}
                </div>
              </motion.section>

              {/* Intelligence Card */}
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-primary-container rounded-xl overflow-hidden relative editorial-shadow"
              >
                <div className="h-40 w-full relative">
                  <img 
                    src="https://picsum.photos/seed/wealth/800/400?blur=2" 
                    alt="Wealth management" 
                    className="w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-container to-transparent"></div>
                </div>
                <div className="p-8 relative -mt-12">
                  <div className="bg-secondary inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest mb-4">Vault Intelligence</div>
                  <h4 className="text-xl font-headline font-bold text-white mb-2">Automated Savings Opportunity</h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">Based on your recent balance surge, moving $5,000 to your high-yield 'Emerald Vault' could generate an additional $220/yr in interest.</p>
                  <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-surface-container transition-colors cursor-pointer">Apply Strategy</button>
                </div>
              </motion.section>

              {/* Recent Beneficiaries */}
              <motion.section 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface-container-low rounded-xl p-8"
              >
                <h3 className="text-lg font-bold font-headline mb-6">Recent Beneficiaries</h3>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <button className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-white hover:opacity-90 transition-opacity cursor-pointer">
                      <Plus className="w-6 h-6" />
                    </button>
                    <span className="text-[10px] font-bold">New</span>
                  </div>
                  {[
                    { name: 'Alex R.', seed: 'alex' },
                    { name: 'Elena K.', seed: 'elena' },
                    { name: 'James W.', seed: 'james' },
                  ].map((user) => (
                    <div key={user.name} className="flex-shrink-0 flex flex-col items-center gap-2">
                      <img 
                        src={`https://picsum.photos/seed/${user.seed}/100/100`} 
                        alt={user.name} 
                        className="w-14 h-14 rounded-full object-cover border-2 border-white"
                        referrerPolicy="no-referrer"
                      />
                      <span className="text-[10px] font-bold">{user.name}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


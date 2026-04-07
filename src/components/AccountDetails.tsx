import { motion } from 'motion/react';
import { 
  Landmark, 
  Copy, 
  ExternalLink, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownLeft,
  FileText,
  Download
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function AccountDetails() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="text-3xl font-bold font-headline">Account Details</h2>
          <p className="text-on-surface-variant">Manage your sovereign wealth accounts and assets</p>
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer">
          <Download className="w-4 h-4" />
          Export Statement
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Account Info */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:col-span-2 bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10 space-y-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary-container rounded-2xl flex items-center justify-center">
              <Landmark className="text-secondary-fixed w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-headline">Sovereign Checking</h3>
              <p className="text-sm text-on-surface-variant">Account ending in •••• 4829</p>
            </div>
            <div className="ml-auto text-right">
              <p className="text-2xl font-bold font-headline">$42,300.00</p>
              <p className="text-xs text-secondary font-bold">Available Balance</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-outline-variant/10">
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Account Number</p>
                <div className="flex items-center gap-2">
                  <p className="font-mono text-sm">4829 1029 3847 5521</p>
                  <button className="text-secondary hover:bg-secondary/10 p-1 rounded transition-colors cursor-pointer">
                    <Copy className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Routing Number</p>
                <p className="font-mono text-sm">021000021</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">SWIFT / BIC</p>
                <p className="font-mono text-sm">SOVGB22XXXX</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Interest Rate</p>
                <p className="font-mono text-sm">0.05% APY</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Security Status */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-primary-container rounded-2xl p-8 text-white editorial-shadow relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
              <ShieldCheck className="text-secondary-fixed w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-headline">Security Status</h3>
              <p className="text-sm text-white/60">Your account is fully protected with biometric 2FA</p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span>Encryption</span>
                <span className="text-secondary-fixed font-bold">AES-256</span>
              </div>
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                <div className="bg-secondary-fixed w-full h-full"></div>
              </div>
            </div>
            <button className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer">
              Security Audit
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>

      {/* Account Activity */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10"
      >
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-xl font-bold font-headline">Recent Activity</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold bg-surface-container rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">All</button>
            <button className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors cursor-pointer">Income</button>
            <button className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors cursor-pointer">Expenses</button>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { name: 'Apple Store', date: 'Oct 24, 2023', amount: -999.00, type: 'expense' },
            { name: 'Monthly Salary', date: 'Oct 20, 2023', amount: 8500.00, type: 'income' },
            { name: 'Starbucks Coffee', date: 'Oct 19, 2023', amount: -12.50, type: 'expense' },
            { name: 'Dividend Payment', date: 'Oct 15, 2023', amount: 450.25, type: 'income' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 hover:bg-surface-container-low rounded-xl transition-colors group cursor-pointer">
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  item.type === 'income' ? "bg-secondary/10 text-secondary" : "bg-error/10 text-error"
                )}>
                  {item.type === 'income' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="font-bold text-sm">{item.name}</p>
                  <p className="text-xs text-on-surface-variant">{item.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <p className={cn("font-bold font-headline", item.type === 'income' ? "text-secondary" : "text-primary")}>
                  {item.type === 'income' ? '+' : '-'}${Math.abs(item.amount).toLocaleString()}
                </p>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity text-on-surface-variant hover:text-primary cursor-pointer">
                  <FileText className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

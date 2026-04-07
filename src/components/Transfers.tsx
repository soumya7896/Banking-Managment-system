import { motion } from 'motion/react';
import { 
  Send, 
  ArrowRightLeft, 
  Users, 
  History, 
  Search, 
  Plus, 
  ChevronRight,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Transfers() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold font-headline">Transfers</h2>
        <p className="text-on-surface-variant">Move funds securely across your global network</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Transfer Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10 space-y-8"
        >
          <div className="flex gap-4">
            <button className="flex-1 py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer">
              <Send className="w-4 h-4" />
              Send Money
            </button>
            <button className="flex-1 py-3 bg-surface-container text-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors cursor-pointer">
              <ArrowRightLeft className="w-4 h-4" />
              Between Accounts
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Recipient</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-on-surface-variant/40" />
                <input 
                  type="text" 
                  placeholder="Name, email, or account number" 
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-lg">$</span>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-10 pr-4 font-bold text-lg focus:ring-2 focus:ring-secondary/20 outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Currency</label>
                <select className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 font-bold focus:ring-2 focus:ring-secondary/20 outline-none appearance-none">
                  <option>USD - US Dollar</option>
                  <option>EUR - Euro</option>
                  <option>GBP - British Pound</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Reference (Optional)</label>
              <input 
                type="text" 
                placeholder="What's this for?" 
                className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 focus:ring-2 focus:ring-secondary/20 outline-none"
              />
            </div>

            <button className="w-full py-4 bg-secondary text-white rounded-xl font-bold text-lg hover:opacity-90 transition-all active:scale-[0.98] cursor-pointer">
              Review Transfer
            </button>
          </div>
        </motion.div>

        {/* Recent Beneficiaries & History */}
        <div className="space-y-8">
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-6 editorial-shadow border border-outline-variant/10"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold font-headline flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                Beneficiaries
              </h3>
              <button className="text-secondary text-xs font-bold cursor-pointer">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Sarah Jenkins', seed: 'sarah', initial: 'SJ' },
                { name: 'Michael Chen', seed: 'mike', initial: 'MC' },
                { name: 'Tech Solutions Inc', seed: 'tech', initial: 'TS' },
              ].map((b, i) => (
                <div key={i} className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <img 
                      src={`https://picsum.photos/seed/${b.seed}/100/100`} 
                      alt={b.name} 
                      className="w-10 h-10 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-sm font-bold">{b.name}</p>
                      <p className="text-[10px] text-on-surface-variant">Last sent 2 days ago</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-on-surface-variant/20 group-hover:text-secondary transition-colors" />
                </div>
              ))}
              <button className="w-full py-3 border-2 border-dashed border-outline-variant/30 rounded-xl text-xs font-bold text-on-surface-variant hover:border-secondary/50 hover:text-secondary transition-all flex items-center justify-center gap-2 cursor-pointer">
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-primary-container rounded-2xl p-6 text-white editorial-shadow"
          >
            <h3 className="font-bold font-headline flex items-center gap-2 mb-6">
              <History className="w-4 h-4 text-secondary-fixed" />
              Recent History
            </h3>
            <div className="space-y-4">
              {[
                { name: 'Rent Payment', amount: -2400, status: 'Completed' },
                { name: 'Sarah Jenkins', amount: -150, status: 'Pending' },
              ].map((h, i) => (
                <div key={i} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold">{h.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {h.status === 'Completed' ? <CheckCircle2 className="w-3 h-3 text-secondary-fixed" /> : <Clock className="w-3 h-3 text-white/40" />}
                      <span className={cn("text-[10px]", h.status === 'Completed' ? "text-secondary-fixed" : "text-white/40")}>{h.status}</span>
                    </div>
                  </div>
                  <p className="text-sm font-bold">-${Math.abs(h.amount)}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

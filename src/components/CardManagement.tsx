import { motion } from 'motion/react';
import { 
  CreditCard, 
  Shield, 
  Lock, 
  Eye, 
  EyeOff, 
  Settings2, 
  Plus, 
  ChevronRight,
  Smartphone,
  Globe
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

export default function CardManagement() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center"
      >
        <div>
          <h2 className="text-3xl font-bold font-headline">Card Management</h2>
          <p className="text-on-surface-variant">Control your physical and virtual sovereign cards</p>
        </div>
        <button className="bg-secondary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all cursor-pointer">
          <Plus className="w-4 h-4" />
          Issue New Card
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Card Preview Section */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[1.58/1] w-full bg-primary-container rounded-3xl p-8 text-white relative overflow-hidden editorial-shadow group"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-headline">The Vault</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-50">Sovereign Platinum</p>
                </div>
                <div className="w-12 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
                  <div className="w-8 h-5 bg-secondary-fixed/40 rounded-sm"></div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-2xl font-mono tracking-[0.2em]">
                    {showDetails ? "4829 1029 3847 9022" : "•••• •••• •••• 9022"}
                  </p>
                  <button 
                    onClick={() => setShowDetails(!showDetails)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  >
                    {showDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <div className="flex gap-12">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1">Expiry</p>
                    <p className="text-sm font-mono">12/28</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-50 mb-1">CVV</p>
                    <p className="text-sm font-mono">{showDetails ? "421" : "•••"}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-4 bg-white rounded-2xl border border-outline-variant/10 font-bold text-sm hover:bg-surface-container transition-all cursor-pointer">
              <Lock className="w-4 h-4 text-secondary" />
              Freeze Card
            </button>
            <button className="flex items-center justify-center gap-2 py-4 bg-white rounded-2xl border border-outline-variant/10 font-bold text-sm hover:bg-surface-container transition-all cursor-pointer">
              <Settings2 className="w-4 h-4 text-secondary" />
              Settings
            </button>
          </div>
        </div>

        {/* Card Controls & Limits */}
        <div className="lg:col-span-7 space-y-8">
          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10"
          >
            <h3 className="text-xl font-bold font-headline mb-8">Card Controls</h3>
            <div className="space-y-6">
              {[
                { name: 'Online Payments', desc: 'Allow card to be used for online shopping', icon: Globe, enabled: true },
                { name: 'Contactless Payments', desc: 'Tap-to-pay at physical terminals', icon: Smartphone, enabled: true },
                { name: 'International Use', desc: 'Allow transactions outside your home country', icon: Shield, enabled: false },
              ].map((control, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center">
                      <control.icon className="w-5 h-5 text-on-surface-variant" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{control.name}</p>
                      <p className="text-xs text-on-surface-variant">{control.desc}</p>
                    </div>
                  </div>
                  <button className={cn(
                    "w-12 h-6 rounded-full p-1 transition-colors relative cursor-pointer",
                    control.enabled ? "bg-secondary" : "bg-outline-variant"
                  )}>
                    <div className={cn(
                      "w-4 h-4 bg-white rounded-full transition-transform",
                      control.enabled ? "translate-x-6" : "translate-x-0"
                    )}></div>
                  </button>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-low rounded-2xl p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold font-headline">Spending Limits</h3>
              <button className="text-secondary text-xs font-bold cursor-pointer">Edit Limits</button>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Daily Limit</span>
                  <span>$2,450 / $5,000</span>
                </div>
                <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary w-[49%] h-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span>Monthly Limit</span>
                  <span>$12,800 / $25,000</span>
                </div>
                <div className="w-full bg-outline-variant/20 h-2 rounded-full overflow-hidden">
                  <div className="bg-secondary w-[51%] h-full"></div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}

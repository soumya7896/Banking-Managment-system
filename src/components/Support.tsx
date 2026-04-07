import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  FileQuestion, 
  ChevronRight, 
  Search,
  BookOpen,
  LifeBuoy
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Support() {
  return (
    <div className="p-8 max-w-[1400px] mx-auto space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl mx-auto space-y-4"
      >
        <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <LifeBuoy className="text-secondary w-8 h-8" />
        </div>
        <h2 className="text-4xl font-bold font-headline">How can we help?</h2>
        <p className="text-on-surface-variant text-lg">Search our knowledge base or contact our 24/7 concierge support team.</p>
        
        <div className="relative mt-8">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-on-surface-variant/40" />
          <input 
            type="text" 
            placeholder="Search for help articles..." 
            className="w-full bg-white border border-outline-variant/20 rounded-2xl py-5 pl-16 pr-6 editorial-shadow focus:ring-2 focus:ring-secondary/20 outline-none text-lg"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
        {[
          { title: 'Live Chat', desc: 'Average response: 2 mins', icon: MessageSquare, color: 'bg-secondary' },
          { title: 'Phone Support', desc: 'Priority line for Platinum', icon: Phone, color: 'bg-primary' },
          { title: 'Email Concierge', desc: 'Response within 24 hours', icon: Mail, color: 'bg-primary-container' },
        ].map((contact, i) => (
          <motion.button 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-2xl editorial-shadow border border-outline-variant/10 text-left group hover:bg-surface-container transition-all cursor-pointer"
          >
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white", contact.color)}>
              <contact.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-headline mb-2">{contact.title}</h3>
            <p className="text-sm text-on-surface-variant mb-6">{contact.desc}</p>
            <div className="flex items-center text-secondary font-bold text-xs uppercase tracking-widest">
              Contact Now <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10"
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="text-secondary w-6 h-6" />
            <h3 className="text-xl font-bold font-headline">Popular Articles</h3>
          </div>
          <div className="space-y-2">
            {[
              'How to set up biometric 2FA',
              'Understanding international wire fees',
              'Managing multiple virtual cards',
              'Reporting a lost or stolen card',
            ].map((article, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low rounded-xl transition-colors text-left group cursor-pointer">
                <span className="text-sm font-medium">{article}</span>
                <ChevronRight className="w-4 h-4 text-on-surface-variant/20 group-hover:text-secondary" />
              </button>
            ))}
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-primary-container rounded-2xl p-8 text-white editorial-shadow relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <FileQuestion className="text-secondary-fixed w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-headline">Still have questions?</h3>
            <p className="text-white/60">Our dedicated sovereign wealth advisors are available for private consultations regarding your portfolio and assets.</p>
            <button className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all cursor-pointer">
              Schedule Consultation
            </button>
          </div>
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        </motion.section>
      </div>
    </div>
  );
}

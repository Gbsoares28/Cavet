import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-petrol relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-watergreen via-petrol to-petrol"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
        >
          Seu pet precisa de <span className="text-watergreen">atendimento imediato?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          Nossa equipe está pronta 24 horas para cuidar do seu melhor amigo com toda agilidade e tecnologia que ele merece.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <a 
            href="https://wa.me/5521986679262"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto relative group"
          >
            {/* Pulse effect */}
            <div className="absolute -inset-1 bg-watergreen rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            <div className="relative flex items-center justify-center gap-3 bg-watergreen hover:bg-watergreen-light text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all shadow-xl shadow-watergreen/20">
              <MessageCircle size={28} />
              Chamar no WhatsApp
            </div>
          </a>
          
          <a 
            href="tel:+552141132350"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-xl transition-all"
          >
            <Phone size={28} />
            Ligar: (21) 4113-2350
          </a>
        </motion.div>
      </div>
    </section>
  );
}

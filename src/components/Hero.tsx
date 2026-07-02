import { motion } from 'motion/react';
import { ArrowRight, Phone, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Veterinário atendendo cachorro"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-petrol/95 via-petrol/80 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-watergreen/20 border border-watergreen/30 backdrop-blur-sm mb-6"
          >
            <Clock size={16} className="text-watergreen" />
            <span className="text-sm font-semibold text-white tracking-wide">ATENDIMENTO 24 HORAS</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
          >
            Hospital Veterinário 24h na <span className="text-watergreen">Tijuca</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed"
          >
            Emergência, consultas, exames e internação com atendimento humanizado e infraestrutura completa para cães e gatos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="https://wa.me/5521986679262"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-watergreen hover:bg-watergreen-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-watergreen/30 group"
            >
              Chamar no WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+552141132350"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all group"
            >
              <Phone size={20} className="group-hover:scale-110 transition-transform" />
              Ligar Agora
            </a>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10"
          >
            {[
              { label: 'Atendimento', sub: '24 Horas' },
              { label: 'Equipe', sub: 'Especializada' },
              { label: 'Exames', sub: 'Completos' },
              { label: 'Emergência', sub: 'Veterinária' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-watergreen font-bold text-lg">{item.label}</span>
                <span className="text-slate-300 text-sm">{item.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

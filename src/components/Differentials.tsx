import { motion } from 'motion/react';
import { Shield, Clock, Users, Stethoscope, HeartPulse, Building2, Zap, Heart } from 'lucide-react';

export default function Differentials() {
  const diffs = [
    { icon: <Clock size={28} />, title: "Atendimento 24h Real", desc: "Equipe completa de plantão dia e noite." },
    { icon: <Building2 size={28} />, title: "Estrutura Moderna", desc: "Instalações planejadas para conforto e segurança." },
    { icon: <Users size={28} />, title: "Equipe Especializada", desc: "Profissionais pós-graduados e experientes." },
    { icon: <Stethoscope size={28} />, title: "Exames no Local", desc: "Laboratório e imagem sem precisar se deslocar." },
    { icon: <HeartPulse size={28} />, title: "Internação Monitorada", desc: "Vigilância intensiva e suporte avançado." },
    { icon: <Heart size={28} />, title: "Atendimento Humanizado", desc: "Tratamos seu pet como se fosse nosso." },
    { icon: <Shield size={28} />, title: "Equipamentos Modernos", desc: "Tecnologia de ponta a favor da vida." },
    { icon: <Zap size={28} />, title: "Rapidez na Emergência", desc: "Protocolos ágeis para salvar vidas." },
  ];

  return (
    <section id="diferenciais" className="py-24 bg-petrol overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-petrol-light/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-watergreen/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <h2 className="text-watergreen font-bold tracking-wider uppercase text-sm mb-3">
              Por que escolher a CAVET?
            </h2>
            <h3 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              O mais alto padrão em medicina veterinária.
            </h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Não somos apenas uma clínica. Somos um hospital completo, projetado para oferecer o máximo em tecnologia diagnóstica e conforto para o paciente e sua família.
            </p>
            
            <a 
              href="https://wa.me/5521986679262" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-watergreen hover:bg-watergreen-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-watergreen/20"
            >
              Falar com Plantão
            </a>
          </motion.div>

          {/* Grid Content */}
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 lg:gap-6">
            {diffs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl flex gap-4 items-start"
              >
                <div className="text-watergreen shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1 text-lg">{item.title}</h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

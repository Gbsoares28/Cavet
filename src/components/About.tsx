import { motion } from 'motion/react';
import { ShieldCheck, Heart, Stethoscope, Microscope, Activity, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Award size={24} />, title: '14 Anos', desc: 'de atuação' },
    { icon: <Heart size={24} />, title: '+20 mil', desc: 'pets atendidos' },
    { icon: <Activity size={24} />, title: '24 Horas', desc: 'plantão ativo' },
  ];

  const features = [
    { icon: <ShieldCheck size={24} />, title: 'Emergência 24h', desc: 'Prontidão total para casos críticos' },
    { icon: <Heart size={24} />, title: 'Internação', desc: 'Monitoramento contínuo e dedicado' },
    { icon: <Activity size={24} />, title: 'Centro Cirúrgico', desc: 'Equipamentos de alta tecnologia' },
    { icon: <Microscope size={24} />, title: 'Laboratório', desc: 'Resultados rápidos e precisos' },
    { icon: <Stethoscope size={24} />, title: 'Imagem', desc: 'Raio-X digital e ultrassonografia' },
    { icon: <Award size={24} />, title: 'Especialidades', desc: 'Corpo clínico multidisciplinar' },
  ];

  return (
    <section id="about" className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-watergreen font-bold tracking-wider uppercase text-sm mb-3">Sobre a CAVET</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Referência em cuidado veterinário na Tijuca.
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Com 14 anos de atuação, a CAVET combina estrutura hospitalar moderna com o verdadeiro cuidado humanizado. Nossa missão é oferecer segurança e agilidade no momento em que seu pet mais precisa.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Trabalhamos incansavelmente para proporcionar diagnósticos precisos e tratamentos eficazes para cães e gatos, com total transparência para você.
            </p>

            <div className="flex gap-6 mb-10 pb-10 border-b border-slate-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-petrol mb-2">{stat.icon}</div>
                  <span className="font-bold text-2xl text-slate-900">{stat.title}</span>
                  <span className="text-sm text-slate-500">{stat.desc}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5521986679262"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-petrol font-bold hover:text-watergreen transition-colors"
            >
              Conheça nossa estrutura <span className="text-xl">→</span>
            </a>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-watergreen/30 transition-all group"
              >
                <div className="w-12 h-12 bg-sand rounded-xl flex items-center justify-center text-petrol mb-4 group-hover:bg-watergreen group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

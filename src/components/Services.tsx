import { motion } from 'motion/react';
import { 
  HeartPulse, FileText, Syringe, Scissors, 
  Bone, ScanLine, Search, Bed, Activity, 
  Smile, Eye, Brain, Plane 
} from 'lucide-react';

export default function Services() {
  const services = [
    { icon: <HeartPulse />, title: 'Clínica 24h', desc: 'Atendimento emergencial a qualquer hora.' },
    { icon: <FileText />, title: 'Consultas', desc: 'Avaliação clínica completa e preventiva.' },
    { icon: <Syringe />, title: 'Vacinação', desc: 'Protocolos atualizados para imunização.' },
    { icon: <Scissors />, title: 'Cirurgia Geral', desc: 'Procedimentos seguros com anestesia monitorada.' },
    { icon: <Bone />, title: 'Ortopedia', desc: 'Tratamentos e cirurgias ortopédicas.' },
    { icon: <ScanLine />, title: 'Raio-X Digital', desc: 'Imagens de alta resolução instantâneas.' },
    { icon: <Activity />, title: 'Ultrassonografia', desc: 'Diagnóstico por imagem preciso.' },
    { icon: <Search />, title: 'Laboratório', desc: 'Exames de sangue, urina e fluidos.' },
    { icon: <Bed />, title: 'Internação', desc: 'Ambiente controlado e monitorado 24h.' },
    { icon: <Smile />, title: 'Odontologia', desc: 'Saúde bucal e profilaxia dentária.' },
    { icon: <HeartPulse />, title: 'Cardiologia', desc: 'Avaliação cardiovascular completa.' },
    { icon: <Eye />, title: 'Oftalmologia', desc: 'Cuidados especializados para a visão.' },
    { icon: <Brain />, title: 'Neurologia', desc: 'Diagnóstico de condições neurológicas.' },
    { icon: <Activity />, title: 'Endocrinologia', desc: 'Controle hormonal e metabólico.' },
    { icon: <Search />, title: 'Dermatologia', desc: 'Tratamentos para pele e pelagem.' },
    { icon: <Activity />, title: 'Oncologia', desc: 'Acompanhamento e tratamento oncológico.' },
    { icon: <HeartPulse />, title: 'Medicina Felina', desc: 'Atendimento exclusivo e adaptado para gatos.' },
    { icon: <Plane />, title: 'Viagem Pet', desc: 'Atestados e preparo para viagens internacionais.' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-watergreen font-bold tracking-wider uppercase text-sm mb-3"
          >
            Nossos Serviços
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            Estrutura Completa para a Saúde do seu Pet
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-6 rounded-2xl bg-sand/50 hover:bg-white border border-transparent hover:border-watergreen/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all flex flex-col"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-petrol mb-5 group-hover:scale-110 group-hover:text-watergreen transition-all">
                {service.icon}
              </div>
              <h4 className="font-bold text-slate-900 mb-2">{service.title}</h4>
              <p className="text-sm text-slate-500 mb-6 flex-grow">{service.desc}</p>
              
              <a 
                href={`https://wa.me/5521986679262?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-petrol group-hover:text-watergreen flex items-center gap-1 transition-colors mt-auto"
              >
                Agendar / Info <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

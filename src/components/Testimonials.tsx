import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Mariana Silva",
      role: "Tutora do Max (Golden Retriever)",
      text: "Fui atendida de madrugada e salvaram meu cachorro. A equipe foi extremamente rápida e carinhosa. O Max precisou de cirurgia de emergência e ocorreu tudo perfeitamente.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Carlos Eduardo",
      role: "Tutor da Luna (Gata SRD)",
      text: "Atendimento rápido e muito humano. A Luna estava com problemas renais e ficou internada. Recebíamos boletins constantes e a estrutura é impecável.",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Fernanda Costa",
      role: "Tutora do Thor (Bulldog)",
      text: "Estrutura impecável. Fizemos todos os exames de sangue e ultrassom na mesma hora, sem precisar ir a outro lugar. O diagnóstico rápido fez toda a diferença.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section className="py-24 bg-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-watergreen font-bold tracking-wider uppercase text-sm mb-3">Depoimentos</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            O que dizem nossos clientes
          </h3>
          <p className="text-lg text-slate-600">
            A confiança de quem já entregou a vida do seu melhor amigo em nossas mãos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
            >
              <div className="flex text-amber-400 mb-6 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed italic mb-8 flex-grow">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-100">
                <img 
                  src={review.img} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

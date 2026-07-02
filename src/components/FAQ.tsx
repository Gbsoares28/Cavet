import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "A clínica funciona realmente 24 horas?", a: "Sim. A CAVET possui atendimento veterinário 24h para emergências, consultas e internações." },
    { q: "Vocês atendem cães e gatos?", a: "Sim. Nossa equipe atende cães e gatos com estrutura completa e especialistas dedicados a cada espécie." },
    { q: "Precisa agendar consulta?", a: "Consultas clínicas de rotina e especialidades podem ser agendadas, mas emergências são atendidas imediatamente, sem necessidade de aviso prévio." },
    { q: "Vocês fazem exames na própria clínica?", a: "Sim. Realizamos raio-X digital, ultrassonografia e diversos exames laboratoriais no local, garantindo agilidade no diagnóstico." },
    { q: "A clínica possui internação?", a: "Sim. Contamos com internação monitorada intensivamente 24 horas por dia, com alas separadas para cães e gatos." },
    { q: "Vocês aplicam vacinas?", a: "Sim. Trabalhamos apenas com vacinas importadas e protocolos atualizados (V10, V8, V5, Raiva, Giárdia, etc.) para vacinação canina e felina." },
    { q: "Quais especialidades a clínica possui?", a: "Ortopedia, cardiologia, dermatologia, neurologia, endocrinologia, odontologia, oftalmologia, oncologia, cirurgia de tecidos moles e felinos." },
    { q: "Onde a clínica fica localizada?", a: "Rua Camaragibe, 10 — Tijuca, Rio de Janeiro." },
    { q: "Como entro em contato rapidamente?", a: "Você pode entrar em contato pelo WhatsApp no botão flutuante do site ou através de ligação direta 24h pelo número (21) 4113-2350." },
    { q: "Vocês fazem cirurgia?", a: "Sim. Realizamos cirurgias gerais e ortopédicas complexas com nosso moderno centro cirúrgico e monitoramento anestésico completo." }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-watergreen font-bold tracking-wider uppercase text-sm mb-3">Dúvidas Frequentes</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Perguntas Frequentes (FAQ)
          </h3>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? 'border-watergreen/30 bg-sand/30' : 'border-slate-200 bg-white hover:border-watergreen/50'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 text-lg">{faq.q}</span>
                  <div className={`shrink-0 transition-transform duration-300 text-watergreen ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

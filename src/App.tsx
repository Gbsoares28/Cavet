/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { MapPin, Phone, MessageCircle, Instagram, HeartPulse, Clock, ArrowRight, Globe, HelpCircle, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const TikTokIcon = ({ size = 24 }: { size?: number }) => (
  <svg fill="currentColor" viewBox="0 0 24 24" width={size} height={size}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

function LinkItem({ link, idx }: { link: any; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
        link.primary 
          ? 'bg-watergreen text-white shadow-lg shadow-watergreen/30' 
          : 'bg-white text-slate-800 shadow-sm border border-slate-100 hover:border-watergreen/50 hover:shadow-md'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 text-left focus:outline-none hover:bg-black/5 transition-colors"
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          link.primary ? 'bg-white/20' : 'bg-sand text-petrol group-hover:bg-watergreen/10 group-hover:text-watergreen'
        }`}>
          {link.icon}
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="font-bold text-base leading-tight">{link.title}</h2>
          <p className={`text-xs mt-0.5 ${link.primary ? 'text-white/80' : 'text-slate-500'}`}>
            {link.subtitle}
          </p>
        </div>
        <div className={`shrink-0 transition-transform duration-300 ${link.primary ? 'text-white/70' : 'text-slate-300 group-hover:text-watergreen'} ${isOpen ? 'rotate-90' : ''}`}>
          <ArrowRight size={20} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className={`p-4 pt-0 border-t ${link.primary ? 'border-white/20' : 'border-slate-100'} mt-2`}>
              <p className={`text-sm mb-4 mt-2 leading-relaxed ${link.primary ? 'text-white/90' : 'text-slate-600'}`}>
                {link.previewText}
              </p>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`w-full flex items-center justify-center py-3 rounded-xl font-bold text-sm transition-colors ${
                  link.primary 
                    ? 'bg-white text-watergreen hover:bg-sand' 
                    : 'bg-watergreen text-white hover:bg-watergreen-light'
                }`}
              >
                Acessar Link
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function FAQSection() {
  const [isOpen, setIsOpen] = useState(false);

  const faqs = [
    {
      q: "Vocês funcionam 24 horas?",
      a: "Sim, nosso hospital veterinário funciona 24 horas por dia, 7 dias por semana, incluindo finais de semana e feriados para atendimento de urgência e emergência."
    },
    {
      q: "Quais especialidades vocês atendem?",
      a: "Oferecemos Cardiologia, Dermatologia, Endocrinologia, Endoscopia, Gastroenterologia, Nefrologia, Neurologia, Odontologia, Oftalmologia, Oncologia e Ortopedia."
    },
    {
      q: "Como funciona o atendimento por especialidade?",
      a: "O primeiro passo é uma avaliação clínica para entender o histórico e realizar o exame físico. Quando necessário, encaminhamos para a especialidade indicada e montamos um plano com exames e tratamento."
    },
    {
      q: "Fazem exames no local?",
      a: "Sim, possuímos laboratório próprio e centro de diagnóstico por imagem (raio-X e ultrassom) para acesso imediato a exames, otimizando o tempo e reduzindo o estresse do animal."
    },
    {
      q: "Vocês internam animais?",
      a: "Sim, temos um setor de internação com monitoramento contínuo, áreas separadas para cães e gatos, e suporte de UTI."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-white text-slate-800 shadow-sm border border-slate-100 rounded-2xl overflow-hidden group hover:border-watergreen/50 hover:shadow-md transition-all duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center p-4 text-left focus:outline-none hover:bg-black/5 transition-colors"
      >
        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors bg-sand text-petrol group-hover:bg-watergreen/10 group-hover:text-watergreen">
          <HelpCircle size={24} />
        </div>
        <div className="ml-4 flex-grow">
          <h2 className="font-bold text-base leading-tight">Perguntas Frequentes (FAQ)</h2>
          <p className="text-xs mt-0.5 text-slate-500">
            Tire suas principais dúvidas
          </p>
        </div>
        <div className={`shrink-0 transition-transform duration-300 text-slate-300 group-hover:text-watergreen ${isOpen ? 'rotate-90' : ''}`}>
          <ArrowRight size={20} />
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-slate-100 mt-2 flex flex-col gap-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50/80 p-3 rounded-xl border border-slate-100/50">
                  <h3 className="font-bold text-sm text-slate-800 mb-1.5">{faq.q}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function TestimonialsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const testimonials = [
    { name: "José Henrique", text: "Indico muito a CAVET, toda a equipe sempre mt atenciosa e profissional. Em especial a Dra. Gabriela que sempre atendeu o Amendoim com muito cuidado e amor." },
    { name: "Patrícia Rios", text: "Clínica bem estruturada, profissionais atenciosos e que amam os nossos pets. Nossa experiência foi super positiva." },
    { name: "Débora Gomes", text: "Atendimento impecável, recomendo a todos." },
    { name: "leonardo souza", text: "Uma das melhores clínicas do Rio, Profissionais dedicados que tratam seu Filho (Pet) com maior amor e carinho amam oque fazem ,quando levo minha Filha lá ela não quer ir embora se sente como se fosse da Família , só Gratidão 🙏🏼, Que Deus abençoe toda a Equipe CAVET , Forte abraço ♥️♥️" },
    { name: "Aline Leal", text: "Incrível, lugar feito e voltado para cuidados e bem estar dos nossos filhos de 4 patas. Equipe maravilhosa!" },
    { name: "Maria Madalena", text: "Atendimento humanizado, pois nossos pets merecem, a todos os profissionais o meu muto obg .Dra Fabiana principalmente." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="mt-8 mb-4 w-full overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4 px-2">
        <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide">O que dizem os clientes</h2>
        <div className="flex gap-1.5">
          <button onClick={() => scroll('left')} className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" aria-label="Anterior">
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => scroll('right')} className="p-1.5 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors" aria-label="Próximo">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
      <div ref={carouselRef} className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-4 px-4">
        {testimonials.map((t, idx) => (
          <div key={idx} className="snap-center shrink-0 w-72 bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-1.5">
            <div className="flex text-yellow-400 gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <p className="text-xs text-slate-600 italic leading-relaxed flex-grow">"{t.text}"</p>
            <p className="font-bold text-sm text-slate-800 mt-0.5">{t.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function App() {
  const links = [
    {
      title: "Emergência 24h (WhatsApp)",
      subtitle: "Fale com o plantão agora",
      previewText: "Nossa equipe está de plantão 24h para emergências, orientações e agendamentos. Fale agora com nossa recepção.",
      icon: <MessageCircle size={24} />,
      url: "https://api.whatsapp.com/send/?phone=552141132350&text=Ol%C3%A1+%2C+gostaria+de+ajuda+%2C+pode+me+ajudar+%3F+N%C2%BA+do+Atendimento%3A+1779373679&type=phone_number&app_absent=0",
      primary: true,
    },
    {
      title: "Ligar Agora",
      subtitle: "(21) 4113-2350",
      previewText: "Ligue diretamente para nossa recepção. Atendimento rápido e eficiente para o seu pet.",
      icon: <Phone size={24} />,
      url: "tel:+552141132350",
    },
    {
      title: "Nosso Site",
      subtitle: "Conheça nossa estrutura e serviços",
      previewText: "Visite nosso site completo para conhecer todas as especialidades, exames e estrutura do hospital.",
      icon: <Globe size={24} />,
      url: "https://veterinariacavetijuca24h.com.br/",
    },
    {
      title: "Como Chegar",
      subtitle: "Rua Camaragibe, 10 - Tijuca",
      previewText: "Estamos localizados no coração da Tijuca, com fácil acesso e infraestrutura completa para receber seu pet.",
      icon: <MapPin size={24} />,
      url: "https://maps.google.com/?q=Rua+Camaragibe,+10+-+Tijuca,+Rio+de+Janeiro",
    },
    {
      title: "Nosso Instagram",
      subtitle: "Acompanhe nossa rotina",
      previewText: "Veja o dia a dia do nosso hospital, confira dicas de saúde e acompanhe nossos pacientes fofos!",
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/cavet.tijuca", 
    },
    {
      title: "Nosso TikTok",
      subtitle: "Vídeos e dicas exclusivas",
      previewText: "Acompanhe dicas rápidas, trends pets e muito conteúdo educativo da nossa equipe.",
      icon: <TikTokIcon size={24} />,
      url: "https://www.tiktok.com/@cavet.tijjuca",
    },
  ];

  return (
    <div className="min-h-screen bg-sand font-sans text-slate-800 flex flex-col items-center py-12 px-4 selection:bg-watergreen selection:text-white relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: `url('https://i.ibb.co/My456PQ0/IMG-3642.png')` }}
      />
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-petrol-light/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-watergreen/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <main className="w-full max-w-md relative z-10 flex flex-col items-center">
        {/* Header/Profile */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="w-28 h-28 bg-white rounded-full p-1 shadow-xl shadow-petrol/5 mb-5 relative">
            <div className="w-full h-full bg-slate-100 rounded-full overflow-hidden">
              <img 
                src="https://i.ibb.co/ym5JcZDp/IMG-5986.jpg" 
                alt="CAVET" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-green-500 text-white w-8 h-8 rounded-full border-[3px] border-white flex items-center justify-center" title="Aberto 24h">
              <Clock size={14} strokeWidth={3} />
            </div>
          </div>
          
          <h1 className="text-2xl font-display font-bold text-slate-900 mb-2">CAVET Hospital 24h</h1>
          <p className="text-slate-600 font-medium text-sm mb-4">Emergência, consultas e internação na Tijuca.</p>
          
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100/80 text-green-700 text-xs font-bold uppercase tracking-wide border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Aberto 24 Horas
          </div>
        </motion.div>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, idx) => (
            <LinkItem key={idx} link={link} idx={idx} />
          ))}
          {/* FAQ */}
          <FAQSection />
        </div>

        {/* Testimonials */}
        <TestimonialsCarousel />

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center mb-8"
        >
          <a
            href="https://www.instagram.com/feedemfoco360"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-xs text-black font-bold transition-colors"
          >
            <div className="flex items-center gap-2">
              Feed em Foco 360
              <Instagram size={14} />
            </div>
            <span>Todos os direitos reservados © {new Date().getFullYear()}</span>
          </a>
        </motion.footer>
      </main>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://api.whatsapp.com/send/?phone=552141132350&text=Ol%C3%A1+%2C+gostaria+de+ajuda+%2C+pode+me+ajudar+%3F+N%C2%BA+do+Atendimento%3A+1779373679&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:-translate-y-1 transition-all z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </div>
  );
}

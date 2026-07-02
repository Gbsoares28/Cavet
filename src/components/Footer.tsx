import { HeartPulse, MapPin, Phone, MessageCircle, Instagram, Facebook, Timer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-12 h-12 bg-watergreen rounded-lg flex items-center justify-center text-white">
                <HeartPulse size={28} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-white leading-none tracking-tight">CAVET</span>
                <span className="text-xs font-medium tracking-wider text-slate-400">HOSPITAL 24H</span>
              </div>
            </a>
            <p className="text-slate-400 leading-relaxed">
              Hospital Veterinário 24 horas. Estrutura completa e atendimento humanizado para o seu pet.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-watergreen hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-watergreen hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-watergreen hover:text-white transition-colors font-bold">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.63-.4 3.29-1.35 4.67-1.47 2.1-3.9 3.44-6.49 3.6-2.58.17-5.22-.53-7.1-2.28-2.28-2.12-3.32-5.46-2.3-8.49 1.01-3.03 3.73-5.26 6.89-5.74v4.11c-1.02.26-2.01.91-2.5 1.83-.54 1.03-.54 2.37.1 3.34.61.91 1.68 1.46 2.78 1.51 1.7.07 3.39-1.08 3.7-2.75.14-.73.12-1.49.12-2.23V.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Contato</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+552141132350" className="flex items-start gap-3 text-slate-400 hover:text-watergreen transition-colors">
                <Phone size={20} className="shrink-0 mt-1" />
                <span>(21) 4113-2350</span>
              </a>
              <a href="https://wa.me/5521986679262" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-slate-400 hover:text-watergreen transition-colors">
                <MessageCircle size={20} className="shrink-0 mt-1" />
                <span>(21) 98667-9262</span>
              </a>
              <div className="flex items-start gap-3 text-slate-400">
                <Timer size={20} className="shrink-0 mt-1" />
                <span>Aberto 24 Horas <br/>Todos os dias</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold text-lg">Endereço</h4>
            <div className="flex items-start gap-3 text-slate-400">
              <MapPin size={24} className="shrink-0 mt-1" />
              <span>Rua Camaragibe, 10<br/>Tijuca, Rio de Janeiro - RJ<br/>CEP: 20520-030</span>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.847551000965!2d-43.23071852391083!3d-22.918991240177708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e68cf18d189%3A0xc6c4f0c436b77c!2sR.%20Camaragibe%2C%2010%20-%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020520-030!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa CAVET"
            ></iframe>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} CAVET - Centro de Atendimento Veterinário Tijuca. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1628009368231-7bb7cbcb8122?auto=format&fit=crop&w=800&q=80', alt: 'Estrutura Moderna' },
    { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80', alt: 'Atendimento Veterinário' },
    { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', alt: 'Centro Cirúrgico' },
    { src: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80', alt: 'Cuidado Canino' },
    { src: 'https://images.unsplash.com/photo-1606425271394-c3ca9aa1fc06?auto=format&fit=crop&w=800&q=80', alt: 'Exames Laboratoriais' },
    { src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80', alt: 'Medicina Felina' },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-watergreen font-bold tracking-wider uppercase text-sm mb-3">Nossa Estrutura</h2>
          <h3 className="text-3xl lg:text-5xl font-display font-bold text-slate-900 mb-6">
            Conheça o Hospital CAVET
          </h3>
          <p className="text-lg text-slate-600">
            Ambientes projetados para o máximo de conforto, higiene e eficiência médica.
          </p>
        </div>

        {/* CSS Grid for Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/3] bg-slate-100"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol/80 via-petrol/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

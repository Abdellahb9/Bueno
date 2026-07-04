import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { galleryImages } from '../data/gallery';

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-charcoal-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="A feast for the eyes"
          description="Fresh from our kitchen and dining room."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[220px] lg:grid-cols-4">
          {galleryImages.map((image, i) => (
            <motion.figure
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl ${
                image.tall ? 'row-span-2' : ''
              }`}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (i % 4) * 0.08 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

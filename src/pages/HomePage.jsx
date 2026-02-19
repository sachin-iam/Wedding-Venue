import { Camera, Flower2, ScrollText, Utensils } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import TestimonialsSlider from '../components/sections/TestimonialsSlider';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

const featureIcons = [Flower2, ScrollText, Utensils, Camera];

function HomePage() {
  const config = pageConfigs.home;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  usePageSeo(config.seo);

  const highlights = config.sections.find((section) => section.type === 'highlights');
  const galleryPreview = config.sections.find((section) => section.type === 'galleryPreview');
  const features = config.sections.find((section) => section.type === 'features');
  const testimonials = config.sections.find((section) => section.type === 'testimonials');
  const spaces = config.sections.find((section) => section.type === 'spaces');
  const cta = config.sections.find((section) => section.type === 'ctaStrip');

  return (
    <>
      <PageHero hero={config.hero} isHome />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Venue Highlights" title={highlights.title} subtitle="Refined architectural spaces for ceremonies, receptions, and private toasts." />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {highlights.items.map((item) => (
              <ImageCard key={item.title} item={item} captionInside className="shadow-luxe" aspect="h-[430px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Gallery" title={galleryPreview.title} subtitle="A visual rhythm of vows, florals, and curated celebration details." />
          <motion.div
            className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={stagger}
          >
            {galleryPreview.items.map((image, idx) => (
              <motion.figure key={image} variants={fadeUp} className="group relative mb-6 overflow-hidden rounded-xl bg-card shadow-soft">
                <img src={image} alt={`Gallery preview ${idx + 1}`} className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.08]" loading="lazy" />
                <div className="absolute inset-0 bg-white/0 transition-colors duration-400 group-hover:bg-white/40" />
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <p className="section-label">Why Choose Us</p>
            <h2 className="mt-4 font-serif text-[48px] leading-[0.96] sm:text-[66px]">A Venue Team Built for Graceful Celebrations</h2>
            <p className="mt-7 max-w-xl text-[17px] leading-[1.8] text-textBody">
              We shape every wedding with quiet precision, from ceremony styling to dinner atmosphere, so each moment feels personal and timeless.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {features.items.map((item, idx) => {
              const Icon = featureIcons[idx];
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="group rounded-xl border border-borderSoft bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon strokeWidth={1.6} className="h-8 w-8 text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:text-accentDark" />
                  <h3 className="mt-5 font-serif text-[32px] leading-none">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-textBody">{item.copy}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Testimonials" title="A Trusted Venue for Refined Celebrations" subtitle="Real words from couples and hosts who celebrated at Veloura Estate." />
          <TestimonialsSlider items={testimonials.items} />
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Event Spaces" title={spaces.title} subtitle="Flexible, elegant spaces designed for intimate ceremonies and grand receptions." />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {spaces.items.map((item) => (
              <ImageCard key={item.title} item={item} className="shadow-soft" aspect="h-[440px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default HomePage;

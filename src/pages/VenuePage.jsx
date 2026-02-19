import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function VenuePage() {
  const config = pageConfigs.venue;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0, reduceMotion);

  const masterGrid = config.sections.find((section) => section.type === 'masterGrid');
  const amenities = config.sections.find((section) => section.type === 'amenities');
  const capacity = config.sections.find((section) => section.type === 'capacity');
  const flow = config.sections.find((section) => section.type === 'flow');
  const miniGallery = config.sections.find((section) => section.type === 'miniGallery');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Spaces" title={masterGrid.title} subtitle="A versatile venue collection designed for ceremony to celebration transitions." />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {masterGrid.items.map((item) => (
              <ImageCard key={item.title} item={item} aspect="h-[440px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="section-label">Amenities</p>
            <h2 className="mt-4 font-serif text-[44px] leading-[1.03] sm:text-[58px]">{amenities.title}</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-textBody">
              Every venue zone is supported by operational comfort and hospitality infrastructure.
            </p>
          </motion.div>

          <motion.ul
            className="grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {amenities.items.map((item) => (
              <motion.li key={item} variants={fadeUp} className="flex items-start gap-3 rounded-xl border border-borderSoft bg-card px-5 py-4 text-[15px] text-textBody shadow-soft">
                <Check className="mt-1 h-4 w-4 text-accent" strokeWidth={2.2} />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="overflow-hidden rounded-xl shadow-soft">
            <img src={masterGrid.items[0].image} alt="Venue capacity" className="h-[420px] w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="section-label">Capacity</p>
            <h2 className="mt-4 font-serif text-[44px] leading-[1.03] sm:text-[58px]">{capacity.title}</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-textBody">{capacity.copy}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Guest Journey" title={flow.title} subtitle="A seamless celebration flow from welcome to afterparty." />
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {flow.items.map((step, idx) => (
              <motion.div key={step} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card px-4 py-6 text-center shadow-soft">
                <p className="text-[11px] uppercase tracking-[0.24em] text-accent">Phase {idx + 1}</p>
                <p className="mt-3 font-serif text-[30px] leading-none text-textPrimary">{step}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Mini Gallery" title={miniGallery.title} subtitle="Additional venue perspectives from ceremony and reception environments." />
          <motion.div
            className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {miniGallery.items.map((image, idx) => (
              <motion.div key={`${image}-${idx}`} variants={fadeUp} className="snap-start overflow-hidden rounded-xl bg-card shadow-soft">
                <img src={image} alt={`Venue mini gallery ${idx + 1}`} className="h-72 w-[280px] object-cover sm:w-[320px]" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default VenuePage;

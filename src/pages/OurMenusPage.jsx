import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import TimelineBlock from '../components/sections/TimelineBlock';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function OurMenusPage() {
  const config = pageConfigs.menus;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  const philosophy = config.sections.find((section) => section.type === 'philosophy');
  const collections = config.sections.find((section) => section.type === 'collections');
  const timeline = config.sections.find((section) => section.type === 'timeline');
  const pairings = config.sections.find((section) => section.type === 'pairings');
  const chef = config.sections.find((section) => section.type === 'chef');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="section-label">Philosophy</p>
            <h2 className="mt-4 font-serif text-[44px] leading-[1.03] sm:text-[58px]">{philosophy.title}</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-textBody">{philosophy.copy}</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="overflow-hidden rounded-xl shadow-soft">
            <img src={collections.items[1].image} alt="Menu philosophy" className="h-[420px] w-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Collections" title={collections.title} subtitle="Three distinct culinary directions to match your celebration rhythm." />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {collections.items.map((item) => (
              <ImageCard key={item.title} item={item} className="shadow-soft" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Tasting Journey" title={timeline.title} subtitle="A structured process from first consultation to final menu lock." />
          <TimelineBlock items={timeline.items} />
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Pairings" title={pairings.title} subtitle="Layered beverage and dessert moments for a complete reception story." />
          <motion.ul
            className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {pairings.items.map((item) => (
              <motion.li key={item} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card px-6 py-5 text-[15px] uppercase tracking-[0.15em] text-textPrimary shadow-soft">
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="overflow-hidden rounded-xl shadow-soft">
            <img src={chef.image} alt={chef.title} className="h-[420px] w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <p className="section-label">Chef Curation</p>
            <h2 className="mt-4 font-serif text-[44px] leading-[1.03] sm:text-[58px]">{chef.title}</h2>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.8] text-textBody">{chef.copy}</p>
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default OurMenusPage;

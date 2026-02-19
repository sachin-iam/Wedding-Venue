import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import TimelineBlock from '../components/sections/TimelineBlock';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function EventsPage() {
  const config = pageConfigs.events;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  const eventCards = config.sections.find((section) => section.type === 'eventCards');
  const tiers = config.sections.find((section) => section.type === 'tiers');
  const timeline = config.sections.find((section) => section.type === 'timeline');
  const galleryRail = config.sections.find((section) => section.type === 'galleryRail');
  const quotes = config.sections.find((section) => section.type === 'quotes');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Event Types" title={eventCards.title} subtitle="Three hosting formats delivered with the same polished standard." />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {eventCards.items.map((item) => (
              <ImageCard key={item.title} item={item} aspect="h-[320px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Packages" title={tiers.title} subtitle="Select the level of production depth for your event needs." />
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {tiers.items.map((tier) => (
              <motion.article key={tier.title} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card p-7 shadow-soft">
                <h3 className="font-serif text-[36px] leading-none text-textPrimary">{tier.title}</h3>
                <span className="mt-4 block h-[1px] w-16 bg-accent" />
                <p className="mt-4 text-[15px] leading-[1.75] text-textBody">{tier.copy}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Process" title={timeline.title} subtitle="A concise planning framework from inquiry to live execution." />
          <TimelineBlock items={timeline.items} />
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Gallery Rail" title={galleryRail.title} subtitle="A horizontal stream of hosted event atmosphere and detail moments." />
          <motion.div
            className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {galleryRail.items.map((image, idx) => (
              <motion.div key={`${image}-${idx}`} variants={fadeUp} className="snap-start overflow-hidden rounded-xl bg-card shadow-soft">
                <img src={image} alt={`Event gallery ${idx + 1}`} className="h-72 w-[280px] object-cover sm:w-[320px]" loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Client Notes" title={quotes.title} subtitle="Feedback from private and corporate hosts." />
          <motion.div
            className="mt-10 grid gap-5 lg:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {quotes.items.map((quote) => (
              <motion.blockquote key={quote} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card p-8 font-serif text-[35px] italic leading-[1.32] text-textPrimary shadow-soft">
                "{quote}"
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default EventsPage;

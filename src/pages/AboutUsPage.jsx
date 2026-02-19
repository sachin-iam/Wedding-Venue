import { Gem, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import ImageCard from '../components/primitives/ImageCard';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

const pillarIcons = [Sparkles, ShieldCheck, HeartHandshake, Gem];

function AboutUsPage() {
  const config = pageConfigs.about;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  const manifesto = config.sections.find((section) => section.type === 'manifesto');
  const team = config.sections.find((section) => section.type === 'team');
  const partners = config.sections.find((section) => section.type === 'partners');
  const pillars = config.sections.find((section) => section.type === 'pillars');
  const milestones = config.sections.find((section) => section.type === 'milestones');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe text-center">
          <SectionHeading label="Manifesto" title={manifesto.title} subtitle={manifesto.copy} />
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Team" title={team.title} subtitle="Specialists in design, operations, and hospitality curation." />
          <motion.div
            className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            {team.items.map((member) => (
              <ImageCard key={member.title} item={member} aspect="h-[360px]" />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Partners" title={partners.title} subtitle="A selected network of luxury wedding and event collaborators." />
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {partners.items.map((partner) => (
              <motion.div key={partner} variants={fadeUp} className="flex min-h-28 items-center justify-center rounded-xl border border-borderSoft bg-card px-4 text-center font-serif text-[34px] leading-none text-accent shadow-soft">
                {partner}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Craft Pillars" title={pillars.title} subtitle="Core principles guiding every celebration we host." />
          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {pillars.items.map((pillar, idx) => {
              const Icon = pillarIcons[idx];
              return (
                <motion.article key={pillar.title} variants={fadeUp} className="group rounded-xl border border-borderSoft bg-card p-6 shadow-soft">
                  <Icon strokeWidth={1.6} className="h-8 w-8 text-accent transition-all duration-300 group-hover:-translate-y-1 group-hover:text-accentDark" />
                  <h3 className="mt-5 font-serif text-[34px] leading-none">{pillar.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-textBody">{pillar.copy}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Milestones" title={milestones.title} subtitle="A snapshot of our journey and hosting standards." />
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {milestones.items.map((metric) => (
              <motion.article key={metric.label} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card p-6 text-center shadow-soft">
                <p className="font-serif text-[56px] leading-none text-accent">{metric.value}</p>
                <p className="mt-3 text-[12px] uppercase tracking-[0.22em] text-textMuted">{metric.label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default AboutUsPage;

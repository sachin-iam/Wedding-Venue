import { MapPin, Mail, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import InquiryForm from '../components/forms/InquiryForm';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

const contactIcons = {
  Phone,
  Email: Mail,
  Address: MapPin,
};

function ContactUsPage() {
  const config = pageConfigs.contact;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0, reduceMotion);

  const contactCards = config.sections.find((section) => section.type === 'contactCards');
  const map = config.sections.find((section) => section.type === 'map');
  const faq = config.sections.find((section) => section.type === 'faq');
  const socials = config.sections.find((section) => section.type === 'socials');
  const cta = config.sections.find((section) => section.type === 'cta');

  usePageSeo(config.seo);

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Inquiry" title="Share Your Celebration Vision" subtitle="We will respond with a tailored venue, culinary, and timeline proposal." />
          <InquiryForm />
        </div>
      </section>

      <section id="direct-contact" className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Direct Contact" title={contactCards.title} subtitle="Reach our concierge team through your preferred channel." />
          <motion.div
            className="mt-10 grid gap-5 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {contactCards.items.map((item) => {
              const Icon = contactIcons[item.title];
              return (
                <motion.article key={item.title} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card p-7 shadow-soft">
                  <Icon className="h-7 w-7 text-accent" strokeWidth={1.6} />
                  <h3 className="mt-5 font-serif text-[33px] leading-none">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.75] text-textBody">{item.value}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <motion.div
            className="rounded-xl border border-borderSoft bg-card p-8 shadow-soft"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="section-label">Map</p>
            <h2 className="mt-4 font-serif text-[42px] leading-[1.04] sm:text-[54px]">{map.title}</h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.75] text-textBody">{map.copy}</p>
            <div className="mt-8 grid h-72 place-items-center rounded-xl border border-dashed border-borderSoft bg-bgAlt text-center">
              <p className="text-[13px] uppercase tracking-[0.2em] text-textMuted">Map integration zone</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="FAQ" title={faq.title} subtitle="Quick responses to frequently asked planning questions." />
          <motion.div
            className="mx-auto mt-10 max-w-4xl space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {faq.items.map((item) => (
              <motion.details key={item.q} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-[14px] uppercase tracking-[0.16em] text-textPrimary">{item.q}</summary>
                <p className="mt-3 text-[15px] leading-[1.75] text-textBody">{item.a}</p>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe text-center">
          <SectionHeading label="Social" title={socials.title} subtitle="See more stories, styling references, and behind-the-scenes venue moments." />
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {socials.items.map((item) => (
              <motion.span key={item} variants={fadeUp} className="rounded-full border border-borderSoft bg-card px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-textPrimary shadow-soft">
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default ContactUsPage;

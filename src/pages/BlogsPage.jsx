import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import PageHero from '../components/primitives/PageHero';
import SectionHeading from '../components/primitives/SectionHeading';
import CtaStrip from '../components/sections/CtaStrip';
import usePageSeo from '../hooks/usePageSeo';
import { pageConfigs } from '../data/pageConfigs';
import { makeFadeUp, makeStagger } from '../utils/motion';

function BlogsPage() {
  const config = pageConfigs.blogs;
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0, reduceMotion);

  const featuredPost = config.sections.find((section) => section.type === 'featuredPost');
  const postsSection = config.sections.find((section) => section.type === 'posts');
  const trends = config.sections.find((section) => section.type === 'trends');
  const newsletter = config.sections.find((section) => section.type === 'newsletter');
  const cta = config.sections.find((section) => section.type === 'cta');

  const [topic, setTopic] = useState('All');
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const filteredPosts = useMemo(() => {
    if (topic === 'All') {
      return postsSection.items;
    }

    return postsSection.items.filter((post) => post.tag === topic);
  }, [postsSection.items, topic]);

  usePageSeo(config.seo);

  const onNewsletterSubmit = (event) => {
    event.preventDefault();

    if (!email.trim() || !email.includes('@')) {
      setNewsletterMessage('Please enter a valid email address.');
      return;
    }

    setNewsletterMessage('Subscribed successfully. You will receive monthly insights.');
    setEmail('');
  };

  return (
    <>
      <PageHero hero={config.hero} />

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Featured" title={featuredPost.title} subtitle="Our latest editorial guidance for elevated celebrations." />
          <motion.article
            className="mt-12 grid overflow-hidden rounded-xl border border-borderSoft bg-card shadow-luxe lg:grid-cols-[1.15fr_0.85fr]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <img src={featuredPost.post.image} alt={featuredPost.post.title} className="h-[380px] w-full object-cover" loading="lazy" />
            <div className="p-8 lg:p-10">
              <p className="section-label">{featuredPost.post.tag}</p>
              <h3 className="mt-4 font-serif text-[40px] leading-[1.02]">{featuredPost.post.title}</h3>
              <p className="mt-5 text-[16px] leading-[1.75] text-textBody">{featuredPost.post.excerpt}</p>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe">
          <SectionHeading label="Journal" title={postsSection.title} subtitle="Filter stories by planning intent and celebration focus." />
          <motion.div
            className="mt-10 flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {postsSection.topics.map((topicItem) => (
              <motion.button
                key={topicItem}
                variants={fadeUp}
                onClick={() => setTopic(topicItem)}
                className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${
                  topic === topicItem
                    ? 'border-accent bg-accent text-white'
                    : 'border-borderSoft bg-card text-textPrimary hover:border-accent hover:text-accent'
                }`}
              >
                {topicItem}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
          >
            {filteredPosts.map((post) => (
              <motion.article key={post.title} variants={fadeUp} className="group overflow-hidden rounded-xl bg-card shadow-soft">
                <div className="h-[250px] overflow-hidden">
                  <img src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <p className="section-label text-accent">{post.tag}</p>
                  <h3 className="mt-3 font-serif text-[33px] leading-none text-textPrimary">{post.title}</h3>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgPrimary">
        <div className="container-luxe">
          <SectionHeading label="Trends" title={trends.title} subtitle="Current directions shaping elegant wedding and event experiences." />
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            {trends.items.map((item) => (
              <motion.div key={item} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card px-6 py-6 text-center text-[12px] uppercase tracking-[0.22em] text-textPrimary shadow-soft">
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-bgAlt">
        <div className="container-luxe text-center">
          <SectionHeading label="Newsletter" title={newsletter.title} subtitle={newsletter.subtitle} />
          <motion.form
            onSubmit={onNewsletterSubmit}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              className="input-line flex-1 rounded-full border border-borderSoft px-6 py-3"
            />
            <button type="submit" className="rounded-full bg-accent px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-accentDark">
              Subscribe
            </button>
          </motion.form>
          {newsletterMessage ? <p className="mt-4 text-[13px] uppercase tracking-[0.16em] text-accent">{newsletterMessage}</p> : null}
        </div>
      </section>

      <CtaStrip title={cta.title} subtitle={cta.subtitle} buttonText={config.cta.text} buttonHref={config.cta.href} />
    </>
  );
}

export default BlogsPage;

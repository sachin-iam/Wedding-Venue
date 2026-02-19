import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import CTAButton from './CTAButton';
import { makeFadeUp, makeStagger } from '../../utils/motion';

function PageHero({ hero, isHome = false }) {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 550], [0, isHome && !reduceMotion ? 100 : 0]);
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.14, 0.08, reduceMotion);

  return (
    <section className={`relative overflow-hidden ${isHome ? 'min-h-screen' : 'min-h-[60vh] sm:min-h-[68vh]'}`}>
      <motion.div className="absolute inset-0 scale-105" style={{ y: parallaxY }}>
        <img
          src={hero.image}
          alt={hero.title}
          className="h-full w-full object-cover"
          loading={isHome ? 'eager' : 'lazy'}
          fetchPriority={isHome ? 'high' : 'auto'}
        />
      </motion.div>

      <div className={`absolute inset-0 ${hero.overlayClass ?? 'bg-black/30'}`} />

      <motion.div
        className="container-luxe relative z-10 flex min-h-[inherit] items-center justify-center py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-4xl text-white">
          <motion.p variants={fadeUp} className="section-label text-white/80">
            {hero.label}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className={`mt-5 font-serif leading-[0.95] tracking-[0.02em] ${isHome ? 'text-[52px] sm:text-[72px] md:text-[92px] lg:text-[108px]' : 'text-[44px] sm:text-[60px] md:text-[72px]'}`}
          >
            {hero.title}
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-7 max-w-2xl text-[16px] leading-[1.8] text-white/85 md:text-[18px]">
            {hero.subtitle}
          </motion.p>

          {hero.cta ? (
            <motion.div variants={fadeUp} className="mt-10">
              <CTAButton to={hero.cta.href} variant="outline" className="border-white/75 text-white hover:border-accent hover:bg-accent hover:text-white">
                {hero.cta.text}
              </CTAButton>
            </motion.div>
          ) : null}
        </div>
      </motion.div>

      {isHome ? (
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-10 z-10"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="container-luxe hidden items-center justify-center gap-7 text-[12px] uppercase tracking-[0.3em] text-white/85 md:flex">
            <span>May 21</span>
            <span className="h-[1px] w-7 bg-white/50" />
            <span>Restaurant</span>
            <span className="h-[1px] w-7 bg-white/50" />
            <span>17:00H</span>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full border border-white/80 bg-transparent" />
            <span className="h-2 w-2 rounded-full bg-white" />
            <span className="h-2 w-2 rounded-full border border-white/80 bg-transparent" />
          </motion.div>
        </motion.div>
      ) : null}
    </section>
  );
}

export default PageHero;

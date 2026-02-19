import { motion, useReducedMotion } from 'framer-motion';
import { makeFadeUp, makeStagger } from '../../utils/motion';

function TimelineBlock({ items }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.12, 0.04, reduceMotion);

  return (
    <motion.div
      className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      {items.map((item, idx) => (
        <motion.article key={item.title} variants={fadeUp} className="rounded-xl border border-borderSoft bg-card p-6 shadow-soft">
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">Step {idx + 1}</p>
          <h3 className="mt-4 font-serif text-[30px] leading-none text-textPrimary">{item.title}</h3>
          <p className="mt-3 text-[15px] leading-[1.75] text-textBody">{item.copy}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default TimelineBlock;

import { motion, useReducedMotion } from 'framer-motion';
import { makeFadeUp } from '../../utils/motion';

function SectionHeading({ label, title, subtitle, center = true, className = '' }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  return (
    <motion.div
      className={`${center ? 'mx-auto text-center' : 'text-left'} max-w-3xl ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      {label ? <p className="section-label">{label}</p> : null}
      <h2 className="mt-4 font-serif text-[42px] leading-[1.04] text-textPrimary sm:text-[56px]">{title}</h2>
      {subtitle ? <p className="mt-4 text-[16px] leading-[1.75] text-textBody sm:text-[17px]">{subtitle}</p> : null}
    </motion.div>
  );
}

export default SectionHeading;

import { motion, useReducedMotion } from 'framer-motion';
import CTAButton from '../primitives/CTAButton';
import { makeFadeUp } from '../../utils/motion';

function CtaStrip({ title, subtitle, buttonText = 'Book A Tour', buttonHref = '/contact-us' }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  return (
    <motion.section
      className="section-pad bg-bgAlt"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
    >
      <div className="container-luxe text-center">
        <p className="section-label">Private Request</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-serif text-[42px] leading-[1.05] text-textPrimary sm:text-[56px]">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.75] text-textBody">{subtitle}</p>
        <CTAButton to={buttonHref} variant="solid" className="mt-9">
          {buttonText}
        </CTAButton>
      </div>
    </motion.section>
  );
}

export default CtaStrip;

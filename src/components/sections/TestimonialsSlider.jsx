import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

function TestimonialsSlider({ items }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [items.length]);

  const previous = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div className="relative mt-10 min-h-[260px] px-10 sm:px-16">
      <button
        onClick={previous}
        aria-label="Previous testimonial"
        className="absolute left-0 top-1/2 -translate-y-1/2 text-textPrimary/70 transition-colors duration-300 hover:text-accent"
      >
        <ArrowLeft strokeWidth={1.3} size={28} />
      </button>

      <button
        onClick={next}
        aria-label="Next testimonial"
        className="absolute right-0 top-1/2 -translate-y-1/2 text-textPrimary/70 transition-colors duration-300 hover:text-accent"
      >
        <ArrowRight strokeWidth={1.3} size={28} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={items[index].author}
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, transition: { duration: 0.8, ease: 'easeOut' } }}
          className="text-center"
        >
          <p className="font-serif text-[34px] italic leading-[1.35] text-textPrimary sm:text-[46px]">
            "{items[index].quote}"
          </p>
          <p className="mt-8 text-[13px] uppercase tracking-[0.22em] text-textMuted">{items[index].author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default TestimonialsSlider;

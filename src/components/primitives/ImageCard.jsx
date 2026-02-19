import { motion, useReducedMotion } from 'framer-motion';
import { makeFadeUp } from '../../utils/motion';

function ImageCard({ item, className = '', captionInside = false, aspect = 'h-[360px]' }) {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);

  return (
    <motion.article variants={fadeUp} className={`group overflow-hidden rounded-xl bg-card shadow-soft ${className}`}>
      <div className={`relative overflow-hidden ${aspect}`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-black/20" />
        {captionInside ? (
          <div className="absolute inset-x-0 bottom-0 p-6 text-white">
            <h3 className="font-serif text-[34px] leading-none transition-transform duration-300 group-hover:-translate-y-1">
              {item.title}
            </h3>
            {item.subtitle ? <p className="mt-2 text-[13px] uppercase tracking-[0.17em] text-white/85">{item.subtitle}</p> : null}
          </div>
        ) : null}
      </div>

      {!captionInside ? (
        <div className="p-6 text-center">
          <h3 className="font-serif text-[33px] leading-none text-textPrimary">{item.title}</h3>
          {item.subtitle ? <p className="mt-3 text-[15px] leading-[1.7] text-textBody">{item.subtitle}</p> : null}
        </div>
      ) : null}
    </motion.article>
  );
}

export default ImageCard;

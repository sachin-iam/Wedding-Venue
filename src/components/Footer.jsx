import { motion, useReducedMotion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { makeFadeUp, makeStagger } from '../utils/motion';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Venue', path: '/venue' },
  { label: 'Events', path: '/events' },
  { label: 'Contact Us', path: '/contact-us' },
];

const socials = [
  { label: 'Instagram', path: '/gallery' },
  { label: 'Facebook', path: '/about-us' },
  { label: 'YouTube', path: '/events' },
  { label: 'Pinterest', path: '/our-menus' },
];

function Footer() {
  const reduceMotion = useReducedMotion();
  const fadeUp = makeFadeUp(reduceMotion);
  const stagger = makeStagger(0.1, 0, reduceMotion);

  return (
    <footer className="bg-bgPrimary pb-10 pt-16">
      <motion.div
        className="container-luxe"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={stagger}
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeUp}>
            <h3 className="text-[12px] uppercase tracking-[0.24em] text-textPrimary">About</h3>
            <p className="mt-5 text-[15px] leading-[1.8] text-textMuted">
              Veloura Estate is a private destination for intimate and grand luxury weddings, designed for timeless ceremony and refined hospitality.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-[12px] uppercase tracking-[0.24em] text-textPrimary">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-textMuted">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="transition-colors duration-300 hover:text-accent">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-[12px] uppercase tracking-[0.24em] text-textPrimary">Venue Info</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-textMuted">
              <li>198 West 21st Street, New York, NY</li>
              <li>+1 234-567-8910</li>
              <li>concierge@velouraestate.com</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h3 className="text-[12px] uppercase tracking-[0.24em] text-textPrimary">Social</h3>
            <ul className="mt-5 space-y-3 text-[15px] text-textMuted">
              {socials.map((item) => (
                <li key={item.label}>
                  <NavLink to={item.path} className="transition-colors duration-300 hover:text-accent">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="mt-14 text-center text-[13px] text-textMuted">
          © 2026 Veloura Estate. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;

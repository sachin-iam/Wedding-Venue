import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/pageConfigs';

function SidePanel({ isOpen, onClose }) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocused = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    previousFocused.current = document.activeElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );

      if (!focusables || focusables.length === 0) {
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previousFocused.current?.focus?.();
    };
  }, [isOpen, onClose]);

  const panelTransition = reducedMotion
    ? { duration: 0.2, ease: 'linear' }
    : { duration: 0.6, ease: [0.4, 0, 0.2, 1] };

  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } }}
            exit={{ opacity: 0, transition: { duration: 0.3, ease: 'easeOut' } }}
            onClick={onClose}
          />

          <motion.aside
            ref={panelRef}
            className="fixed right-0 top-0 z-50 h-full w-full overflow-y-auto bg-bgPrimary px-8 pb-10 pt-8 sm:w-[400px] sm:px-10"
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: panelTransition }}
            exit={{ x: '100%', transition: panelTransition }}
            aria-modal="true"
            role="dialog"
            aria-label="Site Menu"
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close menu panel"
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-borderSoft text-textPrimary transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <X size={18} strokeWidth={1.6} />
            </button>

            <div className="relative mt-8 pb-16">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-borderSoft text-center">
                <div>
                  <p className="section-label">Wedding Theme</p>
                  <p className="mt-2 font-serif text-4xl leading-none">Bisou</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-textMuted">Celebrating Love</p>
                </div>
              </div>

              <p className="mt-10 font-serif text-[42px] leading-[1.05] text-textPrimary">An Estate Crafted for Forever</p>
              <p className="mt-4 text-[17px] leading-[1.7] text-textBody">
                A private luxury setting where ceremony, celebration, and hospitality blend into one refined wedding experience.
              </p>

              <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `text-[12px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                          isActive ? 'text-accent' : 'text-textPrimary hover:text-accent'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <p className="text-[13px] uppercase tracking-[0.22em] text-textPrimary">Wedding Details</p>
                <div className="mt-5 space-y-3 text-[16px] leading-[1.7] text-textBody">
                  <p>
                    <span className="mr-2 text-[12px] uppercase tracking-[0.18em] text-textMuted">Date</span>
                    Sunday, 05 September 2026
                  </p>
                  <p>
                    <span className="mr-2 text-[12px] uppercase tracking-[0.18em] text-textMuted">Time</span>
                    2:00 PM - 3:30 PM
                  </p>
                  <p>
                    <span className="mr-2 text-[12px] uppercase tracking-[0.18em] text-textMuted">Address</span>
                    198 West 21st Street, NY
                  </p>
                  <p>
                    <span className="mr-2 text-[12px] uppercase tracking-[0.18em] text-textMuted">Phone</span>
                    +1 234-567-8910
                  </p>
                </div>
                <NavLink
                  to="/contact-us"
                  onClick={onClose}
                  className="mt-6 inline-block border-b border-accent pb-1 text-[24px] font-serif italic text-accent transition-colors duration-300 hover:text-accentDark"
                >
                  RSVP
                </NavLink>
              </div>

              <p className="mt-10 font-serif text-[38px] italic text-textPrimary">@veloura_day</p>
              <p className="mt-5 text-[14px] font-medium uppercase tracking-[0.18em] text-textPrimary">IG - FB - YT</p>

              <svg
                className="pointer-events-none absolute -bottom-2 right-0 h-52 w-40 text-accent opacity-5"
                viewBox="0 0 220 340"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M110 332C136 268 158 220 170 184C183 145 181 114 161 84C146 61 124 47 98 44"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path d="M97 44C87 20 68 9 42 8C46 31 58 53 79 63C87 67 94 66 97 44Z" fill="currentColor" />
                <path d="M124 89C133 64 152 53 178 53C174 76 161 96 141 106C133 110 126 111 124 89Z" fill="currentColor" />
                <path d="M148 141C160 120 183 113 207 117C199 137 183 153 162 159C153 161 145 159 148 141Z" fill="currentColor" />
                <path d="M120 183C136 169 162 170 182 183C167 198 145 206 124 204C114 202 109 197 120 183Z" fill="currentColor" />
                <path d="M99 225C82 213 57 214 38 228C52 242 73 249 94 248C104 246 110 241 99 225Z" fill="currentColor" />
              </svg>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}

export default SidePanel;

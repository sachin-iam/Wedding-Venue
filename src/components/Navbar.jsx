import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../data/pageConfigs';
import CTAButton from './primitives/CTAButton';

function Navbar({ isHome, isScrolled, onOpenMenu }) {
  const transparent = isHome && !isScrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        transparent ? 'border-transparent bg-transparent' : 'border-b border-borderSoft bg-white/80 shadow-sm backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-[86px] w-full max-w-[1460px] items-center justify-between gap-6 px-5 md:px-8">
        <NavLink
          to="/"
          className={`font-serif text-[30px] leading-none tracking-[0.02em] transition-colors duration-500 sm:text-[36px] ${
            transparent ? 'text-white' : 'text-textPrimary'
          }`}
        >
          Veloura
        </NavLink>

        <ul className="hidden items-center gap-4 xl:flex 2xl:gap-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${transparent ? 'text-white' : 'text-textPrimary'} ${isActive ? 'nav-link-active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            aria-label="Search"
            className={`hidden h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 md:inline-flex ${
              transparent
                ? 'border-white/45 text-white hover:border-white'
                : 'border-borderSoft text-textPrimary hover:border-accent hover:text-accent'
            }`}
          >
            <Search size={17} strokeWidth={1.7} />
          </button>

          <CTAButton
            to="/contact-us"
            variant="outline"
            className={`hidden xl:inline-flex !px-7 !tracking-[0.16em] ${
              transparent
                ? 'border-white/60 text-white hover:border-accent hover:bg-accent hover:text-white'
                : 'border-accent text-accent hover:bg-accent hover:text-white'
            }`}
          >
            Book A Tour
          </CTAButton>

          <button
            aria-label="Open side panel"
            onClick={onOpenMenu}
            className={`group inline-flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
              transparent
                ? 'border-white/45 text-white hover:border-white'
                : 'border-borderSoft text-textPrimary hover:border-accent'
            }`}
          >
            <span className="relative h-[11px] w-5">
              <span
                className={`absolute left-0 top-0 h-[1.4px] w-5 transition-all duration-300 ${
                  transparent ? 'bg-white' : 'bg-textPrimary group-hover:bg-accent'
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.4px] w-5 transition-all duration-300 ${
                  transparent ? 'bg-white' : 'bg-textPrimary group-hover:bg-accent'
                }`}
              />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

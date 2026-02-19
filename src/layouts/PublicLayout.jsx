import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DecorativeFloral from '../components/primitives/DecorativeFloral';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import SidePanel from '../components/SidePanel';

function PublicLayout() {
  const location = useLocation();
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsPanelOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isPanelOpen ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPanelOpen]);

  return (
    <div className="relative overflow-x-hidden bg-bgPrimary text-textPrimary">
      <DecorativeFloral className="-left-16 top-[25%] h-72 w-52 floral-float" />
      <DecorativeFloral className="-right-14 top-[62%] h-80 w-56 floral-float" />

      <Navbar isHome={isHome} isScrolled={isScrolled} onOpenMenu={() => setIsPanelOpen(true)} />
      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />

      <main className={isHome ? '' : 'pt-[86px]'}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default PublicLayout;

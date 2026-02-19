import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-bgPrimary px-6 text-center">
      <div>
        <p className="section-label">404</p>
        <h1 className="mt-4 font-serif text-[58px] leading-[0.95] text-textPrimary sm:text-[88px]">Page Not Found</h1>
        <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.75] text-textBody">
          The page you requested does not exist. Return to the homepage to continue exploring Veloura Estate.
        </p>
        <Link
          to="/"
          className="mt-9 inline-flex rounded-full bg-accent px-8 py-3 text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-accentDark"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;

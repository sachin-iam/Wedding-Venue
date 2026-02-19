import { Link } from 'react-router-dom';

const variantClasses = {
  solid: 'bg-accent text-white hover:bg-accentDark',
  outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
  ghost: 'border border-borderSoft text-textPrimary hover:border-accent hover:text-accent',
};

function CTAButton({ to, href, variant = 'outline', className = '', children, ariaLabel }) {
  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-full px-8 py-3 text-[11px] uppercase tracking-[0.22em] transition-all duration-300 ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

export default CTAButton;

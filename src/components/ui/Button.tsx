import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  arrowType?: 'up-right' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  size = 'md',
  withArrow = false,
  arrowType = 'up-right',
  className = '',
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#53664B] disabled:opacity-50 disabled:pointer-events-none group cursor-pointer';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5 tracking-wider uppercase',
    md: 'text-xs sm:text-sm px-6 py-3.5 gap-2 tracking-widest uppercase',
    lg: 'text-sm sm:text-base px-8 py-4 gap-2.5 tracking-widest uppercase',
  };

  const variantStyles = {
    primary:
      'bg-[#53664B] text-[#F8F6EF] hover:bg-[#3F4F39] active:scale-[0.99] shadow-sm hover:shadow-md',
    secondary:
      'bg-[#EEEDE5] text-[#292C25] hover:bg-[#E4E2D8] active:scale-[0.99] border border-[#E4E2D8]',
    outline:
      'bg-transparent text-[#292C25] border border-[#292C25]/20 hover:border-[#53664B] hover:text-[#53664B] active:scale-[0.99]',
    ghost:
      'bg-transparent text-[#292C25] hover:text-[#53664B] hover:bg-[#EEEDE5]/50 active:scale-[0.99] px-3',
  };

  const arrow = withArrow && (
    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
      {arrowType === 'up-right' ? (
        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.2]" aria-hidden="true" />
      ) : (
        <ArrowRight className="w-3.5 h-3.5 stroke-[2.2]" aria-hidden="true" />
      )}
    </span>
  );

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {arrow}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {arrow}
    </button>
  );
};

import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'ghost' | 'icon'
  size = 'md',         // 'sm' (36px) | 'md' (44px) | 'lg' (52px)
  href,
  to,
  download,
  target,
  rel,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon: Icon = null,
  iconPosition = 'right',
  className = '',
  magnetic = false,
  id,
  'aria-label': ariaLabel,
}) {
  const btnRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Subtle magnetic hover effect (only when requested)
  const handleMouseMove = (e) => {
    if (!magnetic || disabled || loading) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.15;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.15;
    setOffset({ x, y });
  };

  const handleMouseLeave = () => {
    if (magnetic) setOffset({ x: 0, y: 0 });
  };

  // Base styling adhering to 10px radius, 8px grid, smooth transitions
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-btn transition-all duration-200 ease-out select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-theme-accent active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none group";

  // Size styling
  const sizeStyles = {
    sm: "h-9 px-4 text-xs tracking-normal gap-2",
    md: "h-11 px-5 text-sm tracking-normal gap-2.5",
    lg: "h-[52px] px-7 text-[15px] tracking-normal gap-3",
  };

  // Variant styling
  const variantStyles = {
    primary: "bg-theme-accent text-white hover:bg-theme-accent-hover shadow-subtle hover:shadow-card hover:-translate-y-[1px]",
    secondary: "bg-theme-surface border border-theme-border text-theme-text hover:bg-theme-surface-hover hover:border-theme-muted hover:-translate-y-[1px] shadow-subtle",
    ghost: "bg-transparent text-theme-muted hover:text-theme-text hover:underline underline-offset-4 px-2",
    icon: "w-11 h-11 p-0 flex items-center justify-center border border-theme-border rounded-btn text-theme-muted hover:text-theme-text hover:bg-theme-surface-hover hover:border-theme-muted transition-colors",
  };

  const combinedClasses = `${baseStyles} ${variant === 'icon' ? '' : sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const transformStyle = magnetic
    ? { transform: `translate(${offset.x}px, ${offset.y}px)` }
    : undefined;

  const content = (
    <>
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin text-current" />
      ) : (
        Icon && iconPosition === 'left' && (
          <Icon className="w-[18px] h-[18px] stroke-[1.75] transition-transform duration-200 group-hover:-translate-x-0.5" />
        )
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-[18px] h-[18px] stroke-[1.75] transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );

  if (to) {
    return (
      <Link
        ref={btnRef}
        to={to}
        className={combinedClasses}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
      >
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        ref={btnRef}
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick}
        id={id}
        aria-label={ariaLabel}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={transformStyle}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={btnRef}
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={combinedClasses}
      id={id}
      aria-label={ariaLabel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={transformStyle}
    >
      {content}
    </button>
  );
}

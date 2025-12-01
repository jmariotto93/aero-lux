import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-3 transition-all duration-300 border";

  const variantStyles = {
    primary:
      "bg-[#0A1A2F] text-white border-[#0A1A2F] hover:bg-opacity-90",
    secondary:
      "bg-transparent text-[#0A1A2F] border-[#0A1A2F] hover:bg-[#0A1A2F] hover:text-white",
    ghost: "bg-transparent border-transparent text-gray-600 hover:text-[#0A1A2F]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  classname?: string;
  bgColor?: string;
  ariaLabel?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  classname,
  bgColor,
  ariaLabel,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(
        "text-xl font-bold text-white transition hover:scale-105",
        classname,
        bgColor || "bg-cyan hover:bg-teal-400",
      )}
    >
      {children}
    </button>
  );
};
export default Button;

import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  ariaLabel?: string;
  bgColor?: string;
  classname?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  classname,
  bgColor,
  ariaLabel,
  onClick,
  type,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
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

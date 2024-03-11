import Image from "next/image";

const Logo = ({ className }: { className?: string }) => {
  return (
    <a href="/" aria-label="Shortly logo" className={className}>
      <Image
        src="/logo.svg"
        alt="Shortly"
        width={121}
        height={33}
        className="mx-auto"
      />
    </a>
  );
};
export default Logo;

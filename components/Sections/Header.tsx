import Logo from "@/components/Logo";
import Menu from "@/components/Menu/Menu";

const Header = () => {
  return (
    <header className="mx-auto max-w-[72rem]">
      <nav className="flex justify-between px-6 pt-10 lg:gap-5 lg:pr-5 lg:pt-12">
        <Logo className="mt-auto" />
        <Menu />
      </nav>
    </header>
  );
};
export default Header;

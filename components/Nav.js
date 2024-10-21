import Link from "next/link";

const Nav = () => {
  return (
    <nav className="hidden md:flex space-x-8 mr-10 gap-[30px]">
      <Link href="/" className="text-[#003459] hover:text-[#030d13] font-bold">
        Home
      </Link>
      <Link
        href="/category"
        className="text-[#003459] hover:text-[#030d13] font-bold"
      >
        Category
      </Link>
      <Link
        href="/about"
        className="text-[#003459] hover:text-[#030d13] font-bold"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-[#003459] hover:text-[#030d13] font-bold"
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;

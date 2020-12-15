import Link from "next/link";
import Burger from "./burger/burger";
import LogoHoriz from "./logoHoriz";
import LogoVert from "./logoVert";
import MenuItem from "./menuItem";

export default function Header({ dark }) {
  let isOpen = false;

  return (
    <header className="fixed top-0 left-0 lg:bg-non lg:top-32 lg:left-8 xl:left-16 z-50">
      <div className="bg-primary lg:bg-transparent w-screen lg:w-auto px-4 py-3 lg:p-0">
        <div className="flex ">
          <Burger open={isOpen}/>
          <LogoHoriz className="h-8 text-white ml-4 lg:hidden" />
        </div>
        <nav id="navigation" className="hidden lg:block">
          <ul className="nav sm:flex sm:flex-col mb-16">
            <MenuItem dark={dark} href="/" title="Portfolio"/>
            <MenuItem dark={dark} href="/testimonials" title="Testimonials"/>
            <MenuItem dark={dark} href="/about" title="About"/>
            <MenuItem dark={dark} href="/contact" title="Contact"/>
          </ul>
        </nav>
        <Link href="/">
          <a className="border-none">
            <LogoVert className={`w-8 hidden lg:block ${dark ? 'text-white' : 'text-primary'}`}/>
          </a>
        </Link>
      </div>
    </header>
  )
}
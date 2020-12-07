import LogoVert from "./logoVert";
import MenuItem from "./menuItem";

export default function Header({ dark }) {
  return (
    <header className="fixed top-32 left-8 xl:left-16 z-50">
      <button className="lg:hidden">
        =
      </button>
      <nav>
        <ul className="nav sm:flex sm:flex-col mb-16">
          <MenuItem dark={dark} href="/" title="Portfolio"/>
          <MenuItem dark={dark} href="/" title="Testimonials"/>
          <MenuItem dark={dark} href="/" title="About"/>
          <MenuItem dark={dark} href="/" title="Contact"/>
        </ul>
      </nav>
      <LogoVert className={`w-8 ${dark ? 'text-white' : 'text-primary'}`}></LogoVert>
    </header>
  )
}
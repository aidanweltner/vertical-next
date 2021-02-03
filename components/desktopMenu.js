import Link from 'next/link';
import LogoVert from "./logoVert";
import MenuItems from './menuItems';

export default function DesktopMenu({dark}) {
  return (
    <>
      <nav id="navigation" className="hidden lg:block">
        <ul className="nav sm:flex sm:flex-col mb-16">
          <MenuItems dark={dark} />
        </ul>
      </nav>
      <Link href="/">
        <a className="border-none" title="Vertical Construction | Home">
          <LogoVert className={`w-8 hidden lg:block ${dark ? 'text-white' : 'text-primary'}`}/>
        </a>
      </Link>
    </>
  )
}
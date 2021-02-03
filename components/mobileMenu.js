import { Transition } from "@headlessui/react";
import Link from "next/link";
import LogoHoriz from "./logoHoriz"
import { useState } from "react"
import MenuItems from "./menuItems";

export default function MobileMenu({dark}) {
  const [ isOpen, toggle ] = useState(false)

  return (
    <div className="block lg:hidden">
      <div className="flex items-center" >
        <button aria-label="Toggle the menu" onClick={() => toggle(!isOpen)}>
          <div aria-hidden="true" className={ isOpen ? `burger__open` : `burger` } >
            <span/>
            <span/>
            <span/>
          </div>
          <span className="sr-only">Menu</span>
        </button>
        <Link href="/">
          <a className="border-none" title="Vertical Construction | Home">
            <LogoHoriz className={`h-10 lg:hidden ml-4 ${dark ? 'text-white' : 'text-primary'}`}/>
          </a>
        </Link>
      </div>
      <Transition
        show={isOpen}
        enter="transition-all transform duration-75"
        enterFrom="-translate-y-16 opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all transform duration-100"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-16 opacity-0"
      >
        <nav id="navigation" className="my-4">
          <ul className="nav sm:flex sm:flex-col mb-16">
            <MenuItems dark={dark}/>
          </ul>
        </nav>
      </Transition>
    </div>
  )
}
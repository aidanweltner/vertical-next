import { Menu } from "@headlessui/react";
import Link from "next/link";
import Burger from "./burger/burger";
import LogoHoriz from "./logoHoriz"

export default function MobileMenu({dark}) {
  return (
    <div className="block lg:hidden">
      <Menu>
        <div className="flex items-center" >
          <Menu.Button>
            <Burger /* isOpen={isOpen} *//>
            <span className="sr-only">Menu</span>
          </Menu.Button>
          <Link href="/">
            <a className="border-none">
              <LogoHoriz className={`h-10 lg:hidden ml-4 ${dark ? 'text-white' : 'text-primary'}`}/>
            </a>
          </Link>
        </div>
        <Menu.Items as="nav" className="my-4" >
          <Menu.Item>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
import DesktopMenu from "./desktopMenu";
import MobileMenu from "./mobileMenu";

export default function Header({ dark }) {
  return (
    <header className="fixed top-0 left-0 lg:bg-non lg:top-32 lg:left-8 xl:left-16 z-50">
      <div className="bg-primary lg:bg-transparent w-screen lg:w-auto px-4 py-3 lg:p-0">
        <MobileMenu dark={dark}/>
        <DesktopMenu dark={dark}/>
      </div>
    </header>
  )
}
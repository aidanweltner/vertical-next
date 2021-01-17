import MenuItem from "./menuItem";

export default function MenuItems({dark}) {
  return (
    <>
      <MenuItem dark={dark} href="/portfolio" title="Portfolio"/>
      <MenuItem dark={dark} href="/testimonials" title="Testimonials"/>
      <MenuItem dark={dark} href="/about" title="About"/>
      <MenuItem dark={dark} href="/contact" title="Contact"/>
    </>
  )
}
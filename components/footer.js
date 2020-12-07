import RedFilter from "./red-filter";

export default function Footer({dark}) {
  return (
    <>
      <footer className={`lg:py-0 lg:px-0 lg:bg-opacity-0 lg:fixed lg:top-32 lg:right-8 xl:right-16 ${dark ? 'text-white' : 'text-primary'}`}>
        <p>Hours: M-F 9AM-5PM</p>
        <p>Contact: <a className="border-b border-primary" href="tel:2083369860">208-336-9860</a></p>
      </footer>
      <RedFilter/>
    </>
  )
}
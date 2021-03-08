import RedFilter from "./red-filter";

export default function Footer({dark}) {
  return (
    <>
      <RedFilter/>
      <footer className={`hidden lg:block lg:py-0 lg:px-0 lg:bg-opacity-0 lg:fixed lg:top-32 lg:right-8 xl:right-16 ${dark ? 'text-white' : 'text-primary'}`}>
        <p>Hours: M-F 8AM-5PM</p>
        <p>Contact: <a className="border-b border-primary mb-3" href="tel:2083369860">208-336-9860</a></p>
        <p className="mt-3">Visit Us:</p>
        <a href="https://goo.gl/maps/BrcYDRhWNtEek6cy7" target="_blank" rel="noreferrer">
          <p>300 E 35th Street</p>
          <p>Garden City, ID</p>
          <p>83714</p>
        </a>
      </footer>
    </>
  )
}
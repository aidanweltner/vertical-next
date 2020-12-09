import Link from "next/link";

export default function HomeSection({ href, title, top, heading, bg }) {
  return (
    <>
      <section className="w-screen block relative h-screen xl:h-85 -mb-1 bg-cover">
        <div className="absolute inset-0 section-inner z-10 h-full flex flex-col content-between">
          <p className="text-xs lg:text-normal text-white text-center md:text-left">{top}</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white my-auto text-center md:text-left">{heading}</h1>
          <button className="lg:bg-primary hover:bg-red-600 focus:bg-red-600 shadow-md hover:shadow-lg p-2 my-4 lg:my-0 lg:p-6 lg:text-xl font-semibold text-sm uppercase tracking-wide">
            <Link href={href}> 
              <a className="text-white flex items-center md:justify-start justify-center lg:justify-center border-none">
                {title}
                <svg className="w-4 h-4 ml-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </button>
        </div>

        <img id="filter-img" className="aboslute inset-0 h-full w-full object-cover object-center red-filter" style={{transition: '1s filter ease-in'}} src={`/images/${bg}`} />

      </section>
    </>
  )
}
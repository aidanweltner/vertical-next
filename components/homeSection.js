import Link from "next/link";
import TextLoop from "react-text-loop";

export default function HomeSection({ href, title, top, children, bg }) {
  return (
    <>
      <section className="w-screen block relative h-80screen xl:h-85 -mb-1 bg-cover">
        <div className="absolute inset-0 section-inner z-10 h-full flex flex-col content-between">
          <h1 className="lg:text-lg text-white text-left">{top}</h1>
          <div className="my-auto space-y-3">
            <TextLoop noWrap={false} interval={2000} mask={true} fade={true}>
              {children}
            </TextLoop>
          </div>
          <Link href={href}> 
            <a className="bg-primary hover:bg-red-600 focus:bg-red-600 shadow-md hover:shadow-lg p-2 my-4 lg:my-0 lg:p-6 lg:text-xl font-semibold text-sm uppercase tracking-wide text-white flex items-center md:justify-start justify-center lg:justify-center border-none">
              {title}
              <svg className="w-4 h-4 ml-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>

        <img alt={top} width="100%" height="auto" id="filter-img" className="aboslute inset-0 h-full w-full object-cover object-center red-filter" style={{transition: '1s filter ease-in'}} src={`/images/${bg}`} />

      </section>
    </>
  )
}
import Link from "next/link";
import Image from "next/image";

export default function ProjectTile({ project }) {
  const {
    link,
    module: {meta}
  } = project

  return (
    <Link href={"/project" + link}>
      <a className={`h-48 no-underline tile ${meta.isFeatured ? 'md:col-span-2' : ''}`}>
        <article className="relative">
          <header className="relative z-10 h-48 flex flex-col justify-between p-3 text-white">
            <div>
              <h2 className="lg:text-xl font-bold inline header">{meta.title}</h2>
              <p className="text-xs font-light text-gray-200">{meta.description}</p>
            </div>
            <p className="text-sm font-semibold">{meta.details[0]}</p>
          </header>
    
          {/* <img id="filter-img" className="absolute inset-0 h-48 w-full object-cover object-center red-filter" style={{transition: '1s filter ease-in'}} src={meta.image} /> */}
          <Image
            src={meta.image}
            /* id="filter-img" */
            layout='fill'
            className="object-cover object-center red-filter"
            alt={meta.title}
          />
        </article>
      </a>
    </Link>
  )
}
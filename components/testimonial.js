import Link from "next/link";

export default function Testimonial({ quote, source, sourcePosition, project, projectTitle, projectImage, classes }) {
  return (
    <div className={classes ? classes : '' }>
      <p className="text-xl lg:text-2xl font-light mt-6 mb-2 text-gray-200">"{quote}"</p>
      <p className="text-lg lg:text-xl font-bold my-0 text-gray-100">{source}</p>
      {sourcePosition ? <p className="text-md lg:text-lg font-light my-0 text-gray-400">{sourcePosition}</p> : ''}

      {project ?
        <Link href={project}>
          <a className="flex items-center mb-8 lg:mb-14 border-none mt-3 space-x-4 group">
            <div className="h-14 w-14">
              <img className="m-0 object-cover h-14 transform transition-transform ease-in-out duration-500 scale-100 group-hover:scale-125 group-focus:scale-125" src={projectImage} />
            </div>
            <div>
              <p className="text-lg my-0 lg:text-xl font-bold">{projectTitle}</p>
              <p className="text-md my-0 text-gray-400 border-b-0 border-primary group-hover:border-b-1 group-hover:text-gray-400">View project</p>
            </div>
          </a>
        </Link>
        : ''
      }
    </div>
  )
}
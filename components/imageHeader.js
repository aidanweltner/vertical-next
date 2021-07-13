export default function ImageHeader({ image, title, description, details }){
  return (
    <header className="w-screen block relative h-screen lg:h-50screen xl:h-85 -mb-1 bg-cover">
      <div className="absolute inset-0 section-inner z-10 h-full flex flex-col justify-end">
        <h1 className="text-5xl lg:text-6xl font-bold text-white">{title}</h1>
        {description ? 
          <p className="mt-4 text-gray-50 leading-relaxed text-lg lg:text-xl">{description}</p> :
          ''
        }
        {details ?
          <ul className="details-list mt-4 text-gray-200 flex flex-col md:flex-row md:space-x-2 md:divide-x-2 md:divide-red-200 font-light">
            {details.map((detail)=>(
              <li>{detail}</li>
            ))}
          </ul> :
          ''
        }
      </div>

      <img width="100vw" height="auto" id="filter-img" className="absolute inset-0 h-full w-full object-cover object-center red-filter" style={{transition: '1s filter ease-in'}} src={image} />
    </header>
  )
}
export default function President({ title, subTitle, subTitle2, image, quote, source, sourcePosition, children, favoritesTitle, favorites}) {
  return (
    <section>
      <div className="section-inner max-w-screen-md py-12">
        <div className="flex flex-col md:flex-row-reverse mb-8 justify-between">
          <div className="w-full h-48 md:w-48">
            <img className="object-cover h-48 w-full pb-2 md:pb-0" src={image} />
          </div>
          <div className="w-full lg:w-auto flex flex-col justify-center mt-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">{title}</h2>
            <p className="text-md lg:text-lg text-gray-50 mb-2">{subTitle}</p>
            <p className="text-xs lg:text-sm text-gray-300">{subTitle2}</p>
          </div>
        </div>
        <div className="mb-8">
          <p className="text-xl lg:text-2xl font-bold mb-2 text-gray-200">"{quote}"</p>
          <p className="text-lg lg:text-xl font-bold text-gray-300">{source}</p>
          <p className="text-md lg:text-lg font-light text-gray-400">{sourcePosition}</p>
        </div>
        <div className="prose mb-8">
          {children}
        </div>
        <div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-200">{favoritesTitle}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {favorites.map((favorite)=>(
              <div>
                <img src={favorite.image}/>
                <p className="mt-2 leading-relaxed">"{favorite.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
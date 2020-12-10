export default function Team({ teamHeading, team}){
  return (
    <section>
      <div className="section-inner">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">{teamHeading}</h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-y-8">
          {team.map((member)=>(
            <div>
              <div className="h-56 w-full mb-3">
                <img className="object-cover h-56 w-full" src={member.image}/>
              </div>
              <p className="text-gray-200 font-bold text-lg lg:text-xl mb-1">{member.name}</p>
              <p className="text-gray-300 text-md lg:text-lg font-light mb-1">{member.title}</p>
              <p className="text-gray-400 text-xs lg:text-sm font-light">{member.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
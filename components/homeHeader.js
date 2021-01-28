export default function HomeHeader({children}) {
  return (
    <h2 className="text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
      {children}
    </h2>
  )
}
export default function HomeHeader({children}) {
  return (
    <h2 className="max-w-screen-sm xl:max-w-screen-md 2xl:max-w-screen-lg 3xl:max-w-screen-2xl text-5xl lg:text-6xl font-bold text-white text-center md:text-left">
      {children}
    </h2>
  )
}
export default function TextSection({children}) {
  return (
    <>
      <section>
        <div className="section-inner pb-12 prose max-w-screen-sm xl:max-w-screen-md">
          {children}
        </div>
      </section>
    </>
  )
}
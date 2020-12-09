export default function TextSection({children}) {
  return (
    <>
      <section>
        <div className="section-inner p-light prose">
          {children}
        </div>
      </section>
    </>
  )
}
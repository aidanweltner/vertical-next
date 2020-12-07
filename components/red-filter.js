export default function RedFilter() {
  return (
    <div>
      <svg xmlns="http://www.w3.prg/2000/svg" style={{height: 0, left: '-9999em', margin: 0, padding: 0, position: 'absolute', width: 0}}>
        <filter id="red-flat">
          <feColorMatrix type="matrix" result="grayscale" values="0 1.75 0 0 0 
                    0 1.75 0 0 0
                    0 1.75 0 0 0
                    0 0 0 1 0">
          </feColorMatrix>
          <feComponentTransfer colorInterpolationFilters="sRGB" result="duotone">
            <feFuncR type="table" tableValues="0 0.8196078431" />
            <feFuncG type="table" tableValues="0 0.2196078431" />
            <feFuncB type="table" tableValues="0 0.1647058824" />
            <feFuncA type="table" tableValues="0 1" />
          </feComponentTransfer>
        </filter>
      </svg>
    </div>
  )

}
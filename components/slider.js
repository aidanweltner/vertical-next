import Slider from "react-slick"
import { useState } from "react"

function NextArrow(props) {
  const { className, /* style, */ onClick } = props;
  return (
    <div
      className={`${className} text-gray-50`}
      /* style={...style} */
      onClick={onClick}
    >
      <svg className="text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { className, /* style, */ onClick } = props;
  return (
    <div
      className={`${className} text-gray-50`}
      /* style={...style} */
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
      </svg>
    </div>
  );
}

export default function({slides}) {
  var settings = {
    infinite: true,
    autoplay: true,
    cssEase: 'ease-in-out',
    speed: 1000,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

  const [ largeSlider, toggle ] = useState(false);

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide)=>(
          <div className={`relative ${largeSlider ? 'h-80screen' : 'h-96'} border-2 border-gray-900`}>
            <img className={`${largeSlider ? 'object-contain h-80screen' : 'object-cover h-96'} w-full`} src={slide.src} alt={slide.alt}/>
          </div>
        ))}
      </Slider>
      <button className="mt-2 underline flex mx-auto items-center" onClick={() => toggle(!largeSlider)}>
        {largeSlider ? 
          <span>Reduce slideshow</span> : 
          <span>Expand slideshow</span>
        }
        <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </>
  );
}
import Head from "next/head";
import ImageHeader from "./imageHeader";
import Layout from "./layout";
/* import Testimonial from "../components/testimonial"; */
import TextSection from "./textSection";
/* import { Splide, SplideSlide } from '@splidejs/react-splide'; */

export default function Project({meta, children}) {
  /* const project = {
    title: 'Example Project',
    image: '/images/Eberlestock-Vertical-Construction.jpg',
    description: 'A unique take on a downtown classic',
    details: [
      'Downtown Boise, ID',
      '5,860sq ft',
      '2006',
    ],
    topText: '<p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p><p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p><p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>',
    slideshow: [
      {
        src: '/images/Eberlestock-Vertical-Construction.jpg',
        alt: 'Eberlestock Warehouse',
      },
      {
        src: '/images/bardenay-boise-vertical-construction.jpg',
        alt: 'Bardenay Restaurant',
      },
      {
        src: '/images/Eagle-River-Vertical-Construction.jpg',
        alt: 'Eagle River Office Complex',
      },
    ],
    testimonial: {
      project: '/',
      quote: 'Todd runs a tight ship and he took our vision to the next level.',
      source: 'Kevin Settles',
      sourcePosition: 'Owner, Bardenay',
      projectTitle: 'Bardenay Boise',
      projectImage: '/images/bardenay-boise-vertical-construction.jpg',
    },
    bottomText: '<p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p><p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p><p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>',
    projects: [
      'Eberlestock',
      'OEC',
    ]
  }; */

  return (
    <Layout>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <ImageHeader
        image={meta.image}
        title={meta.title}
        description={meta.description}
        details={meta.details}
      />
      <TextSection>
        {/* {project.topText}
        <Splide>
          {project.slideshow.map((slide)=>{
            <SplideSlide>
              <div className="h-96 w-full">
                <img src={slide.src} alt={slide.alt} className="object-cover h-96"/>
              </div>
            </SplideSlide>
          })}
        </Splide>
        {project.testimonial ?
            <Testimonial
              classes="p-0"
              project={project.testimonial.project}
              quote={project.testimonial.quote}
              source={project.testimonial.source}
              sourcePosition={project.testimonial.sourcePosition}
              projectTitle={project.testimonial.projectTitle}
              projectImage={project.testimonial.projectImage}  
            />
            : ''  
        }
        {project.bottomText} */
        children}
      </TextSection>
    </Layout>
  )
}
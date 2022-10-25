import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import ImageHeader from "../components/imageHeader";
import Layout from "../components/layout";
import { siteTitle, siteImage, siteUrl } from "@components/layout";
import President from "../components/president";
import Team from "../components/team";
import TextSection from "../components/textSection";

const team = [
  {
    image: '/images/TimAustin.jpg',
    name: 'Tim Austin',
    title: 'Project Executive',
    subTitle: 'Major BSU fan. Loves all that Idaho has to offer.'
  },
  {
    image: '/images/LarryVaughn.jpg',
    name: 'Larry Vaugn',
    title: 'Superintendent',
    subTitle: 'Recent Oregon transplant. Loves to hunt.'
  },
  {
    image: '/images/Jennie.jpg',
    name: 'Jennie',
    title: 'Maintains our image',
    subTitle: 'Also the president\'s wife.'
  },
]

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="About | Vertical Construction"
        description="VERTICAL Construction is a general contractor in Boise, Idaho. With over 30 years of construction experience, we offer a high level of personal service."
        openGraph={{
          type: 'website',
          url: `${siteUrl + '/about/'}`,
          title: "About | Vertical Construction",
          description: "VERTICAL Construction is a general contractor in Boise, Idaho. With over 30 years of construction experience, we offer a high level of personal service.",
          images: [
            {
              url:`${siteUrl + siteImage}`,
              width:1600,
              height:900,
              alt: `${siteTitle}`,
            }
          ]
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <LocalBusinessJsonLd
        type='GeneralContractor'
        id={`${siteUrl}`}
        name="Vertical Construction"
        description="VERTICAL Construction is a general contractor in Boise, Idaho. With over 30 years of construction experience, we offer a high level of personal service."
        url={`${siteUrl}`}
        telephone='+12083369860'
        address={{
          streetAddress: '300 East 35th St',
          addressLocality: 'Boise',
          addressRegion: 'ID',
          postalCode: '83714',
          addressCountry: 'US',
        }}
        openingHours={[
          {
            opens: '08:00',
            closes: '17:00',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
            ],
            validFrom: '2021-03-03',
            validThrough: '2025-12-31',
          },
        ]}
        geo={{
          latitude: '43.6256588',
          longitude: '-116.2392819',
        }}
        images={[
          `${siteUrl + siteImage}`,
        ]}
      />
      <ImageHeader
        image="/images/Eberlestock-Vertical-Construction.jpg"
        title="About"
      />
      <TextSection className="pb-12">
        <h4 className="text-3xl lg:text-4xl font-bold">When you hire VERTICAL</h4>
        <h5>You’re getting more than 30 years of experience.</h5>
        <p>VERTICAL Corporation is a general contracting company based in Boise, Idaho. VERTICAL offers clients a high level of personal attention and customer service. Our mission is to provide the most professional construction services in the region. Because our business is built upon relationships, we are driven to make your building and your building experience a complete success.</p>
        <p>With every general contracting project we aspire to achieve these four important goals:</p>
        <ul>
          <li>Deliver your project on time</li>
          <li>Balance cost with quality and function</li>
          <li>Facilitate open and honest communication</li>
          <li>And exceed your expectations</li>
        </ul>
        <p>And when we meet these four goals, our clients come back for more.  Many VERTICAL projects are from repeat clients, who consider us their trusted building partner.</p>
      </TextSection>
      <President
        title="Meet Todd"
        subTitle="Your new building partner"
        subTitle2="oh, and President &amp; CEO"
        image="/images/Todd.jpg"
        quote="From our initial meetings, to the final product, your thorough approach delivered one of the most painless construction experiences I have ever had."
        source="Pat Kelly"
        sourcePosition="Executive Director, Your Health Idaho"
      >
        <p>With trust and integrity as his guiding principles, Todd founded VERTICAL Construction in 2002 believing that great projects are built on strong relationships.</p>
        <p>Todd is a veteran of the construction industry.   After graduating from Oregon State University’s construction engineering program, he was recruited by a large contractor in California where he gained invaluable experience on large scale, multi-million dollar projects. Todd moved to Boise in 1989 and worked for smaller firms specializing in custom homes and commercial projects in the Pacific Northwest.</p>
        <p>He is a married father of two kids and a chocolate lab. He’s an avid mountain biker, camper and hiker and supporter of worthy community organizations such as the <a href="http://www.youthranch.org/" target="_blank">Idaho Youth Ranch.</a></p>
        {/* <h3>Todd's reccomended formula for a sucessful project:</h3>
        <ol>
          <li>
            <h4>Talk to your builder first</h4>
            <p>Frankfurter beef ribs jowl pig leberkas doner bresaola, bacon turducken fatback chuck drumstick. Chuck bacon turducken, salami andouille jowl tri-tip sirloin buffalo. Filet mignon buffalo ribeye ball tip pastrami, capicola swine short loin ham.</p>
          </li>
          <li>
            <h4>Consider adding a cusion to your budget</h4>
            <p>Frankfurter beef ribs jowl pig leberkas doner bresaola, bacon turducken fatback chuck drumstick. Chuck bacon turducken, salami andouille jowl tri-tip sirloin buffalo. Filet mignon buffalo ribeye ball tip pastrami, capicola swine short loin ham.</p>
          </li>
        </ol> */}
      </President>
      <Team
        teamHeading="The rest of the team"
        team={team}  
      />
    </Layout>
  )
}
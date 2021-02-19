import { NextSeo } from "next-seo";
import ImageHeader from "../components/imageHeader";
import Layout from "../components/layout";
import { siteTitle, siteImage, siteUrl } from "@components/layout";
import President from "../components/president";
import Team from "../components/team";
import TextSection from "../components/textSection";

const team = [
  {
    image: '/images/Pm.jpg',
    name: 'Brayden Sielaff',
    title: 'Superintendent & Project Manager',
    subTitle: 'a sucker for a craft brew'
  },
  {
    image: '/images/Jennie.jpg',
    name: 'Jennie',
    title: 'Maintains our image',
    subTitle: 'also the presidents wife'
  },
]

export default function About() {
  return (
    <Layout>
      <NextSeo
        title="About | Vertical Construction"
        description="VERTICAL Construction is a general contractor in Boise, Idaho. With over 30 years of construction experience, we offer a high level of personal service."
        openGraph={{
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
      />
      <ImageHeader
        image="/images/Eberlestock-Vertical-Construction.jpg"
        title="About"
      />
      <TextSection className="pb-12">
        <h4>When you hire VERTICAL</h4>
        <h5>You’re getting more than 30 years in construction</h5>
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
        <p>He is a married father of two kids and a dog named Mayla. He’s an avid mountain biker, camper and hiker and supporter of worthy community organizations such as the <a href="http://www.youthranch.org/" target="_blank">Idaho Youth Ranch.</a></p>
        <h3>Todd's reccomended formula for a sucessful project:</h3>
        <ol>
          <li>
            <h4>Talk to your builder first</h4>
            <p>Frankfurter beef ribs jowl pig leberkas doner bresaola, bacon turducken fatback chuck drumstick. Chuck bacon turducken, salami andouille jowl tri-tip sirloin buffalo. Filet mignon buffalo ribeye ball tip pastrami, capicola swine short loin ham.</p>
          </li>
          <li>
            <h4>Consider adding a cusion to your budget</h4>
            <p>Frankfurter beef ribs jowl pig leberkas doner bresaola, bacon turducken fatback chuck drumstick. Chuck bacon turducken, salami andouille jowl tri-tip sirloin buffalo. Filet mignon buffalo ribeye ball tip pastrami, capicola swine short loin ham.</p>
          </li>
        </ol>
      </President>
      <Team
        teamHeading="The rest of the team"
        team={team}  
      />
    </Layout>
  )
}
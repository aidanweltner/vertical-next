import Head from "next/head";
import ImageHeader from "../components/imageHeader";
import Layout from "../components/layout";
import President from "../components/president";
import Team from "../components/team";
import TextSection from "../components/textSection";

const team = [
  {
    image: '/images/Books.jpg',
    name: 'Bookeeper',
    title: 'Welcomes you in the door',
    subTitle: 'and keeps the books'
  },
  {
    image: '/images/Pm.jpg',
    name: 'Superindendent',
    title: 'Oversees your job',
    subTitle: 'not related to the present, phew'
  },
  {
    image: '/images/Jennie.jpg',
    name: 'Jennie',
    title: 'Maintains our image',
    subTitle: 'the presidents wife'
  },
  {
    image: '/images/Aidan.jpg',
    name: 'Aidan',
    title: 'Puts your project on the website, occasionally cleans your job site',
    subTitle: 'also related to the president'
  },
]

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
      </Head>
      <ImageHeader
        image="/images/Eberlestock-Vertical-Construction.jpg"
        title="About"
      />
      <TextSection className="pb-12">
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
      </TextSection>
      <President
        title="Meet Todd"
        subTitle="Your new building partner"
        subTitle2="oh, and the president of the company"
        image="/images/Todd.jpg"
        quote="Todd runs a tight ship and he took our vision to the next level."
        source="The Simplots"
        sourcePosition="Idaho's most notorious family"
        favoritesTitle="Todd's Favorite Projects"
        favorites={[
          {
            image: '/images/bardenay-boise-vertical-construction.jpg',
            quote: 'Glen Eberly and I had a great working relationship and the shop is one of the best looking warehouses in town.'
          },
          {
            image: '/images/Eagle-River-Vertical-Construction.jpg',
            quote: 'I was so pleased with the result of a Downtown Boise classic. It helps that the food is so delicious.'
          }
        ]}
      >
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
      </President>
      <Team
        teamHeading="The rest of the team"
        team={team}  
      />
    </Layout>
  )
}
import Head from "next/head";
import ImageHeader from "../components/imageHeader";
import Layout from "../components/layout";
import TextSection from "../components/textSection";

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
      <TextSection>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
      </TextSection>
    </Layout>
  )
}
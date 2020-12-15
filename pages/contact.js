import ContactForm from "../components/contactForm";
import Head from "next/head";
import Layout from "../components/layout";
import TextSection from "../components/textSection";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <TextSection>
        <h1>Contact</h1>
        <p>Beef ribs andouille swine, turkey kevin jerky t-bone buffalo ball tip pastrami. Jowl jerky short ribs meatball pork belly turducken. Pork belly doner drumstick tri-tip andouille ribeye ham short ribs landjaeger kevin shank meatloaf. Bresaola ham short ribs, meatball sirloin venison corned beef salami. Tail doner shankle porchetta, meatball flank sirloin bacon hamburger pork belly landjaeger. Flank fatback salami rump pancetta shank.</p>
      </TextSection>
      <section>
        <div className="max-w-screen-sm xl:max-w-screen-md px-4 lg:px-12 mx-auto py-6">
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}
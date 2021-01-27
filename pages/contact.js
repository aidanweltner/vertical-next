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
        <p>Let’s build something together!</p>
      </TextSection>
      <section>
        <div className="max-w-screen-sm xl:max-w-screen-md px-4 lg:px-12 mx-auto py-6">
          <ContactForm />
        </div>
      </section>
    </Layout>
  )
}
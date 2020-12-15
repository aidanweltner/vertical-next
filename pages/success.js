import Head from "next/head";
import Layout from "../components/layout";
import TextSection from "../components/textSection";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Form Successfully Submitted</title>
      </Head>
      <TextSection>
        <h1>Success</h1>
        <p>Thank you for contacting us. You'll hear from us in 2-3 business days.</p>
      </TextSection>
    </Layout>
  )
}
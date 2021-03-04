import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import TextSection from "../components/textSection";

export default function Contact() {
  return (
    <Layout>
      <NextSeo
        title="Message Successfully Sent"
        nofollow
        noindex
      />
      <TextSection>
        <h1>Success</h1>
        <p>Thank you for contacting us. You'll hear from us in 2-3 business days.</p>
      </TextSection>
      <div className="h-24 sm:h-32"></div>
    </Layout>
  )
}
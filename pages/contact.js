import ContactForm from "../components/contactForm";
import Layout from "../components/layout";
import { siteTitle, siteImage, siteUrl } from "@components/layout";
import TextSection from "../components/textSection";
import { NextSeo } from "next-seo";

export default function Contact() {
  return (
    <Layout>
      <NextSeo
        title="Contact | Vertical Construction"
        description="Contact VERTICAL Construction, a general contractor in Boise, Idaho."
        openGraph={{
          url: `${siteUrl + '/contact/'}`,
          title: "Contact | Vertical Construction",
          description: "Contact VERTICAL Construction, a general contractor in Boise, Idaho.",
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
import HomeHeader from "@components/homeHeader";
import HomeLayout from "../components/homeLayout";
import HomeSection from "../components/homeSection";
import { siteTitle, siteDescription, siteImage, siteUrl } from "../components/layout";
import { NextSeo } from 'next-seo';
import TextSection from "../components/textSection";

export default function Home() {
  return (
    <HomeLayout>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        openGraph={{
          url: `${siteUrl}`,
          title: `${siteTitle}`,
          description: `${siteDescription}`,
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
      <HomeSection
        title="Portfolio"
        href="/portfolio"
        top="At VERTICAL, we specialize in..."
        bg="projects/bardenay/bardenay-boise-vertical-construction.jpg"
      >
        <HomeHeader>Office remodels</HomeHeader>
        <HomeHeader>Construction management</HomeHeader>
        <HomeHeader>Design-Build</HomeHeader>
        <HomeHeader>Repeat Clients</HomeHeader>
      </HomeSection>
      <HomeSection
        title="Contact"
        href="/contact"
        top="We believe in..."
        bg="Eagle-River-Vertical-Construction.jpg"
      >
        <HomeHeader>Forging relationships</HomeHeader>
        <HomeHeader>Safety</HomeHeader>
        <HomeHeader>Delivering your project on time</HomeHeader>
        <HomeHeader>Balancing cost with quality and function</HomeHeader>
        <HomeHeader>Facilitating open and honest communication</HomeHeader>
        <HomeHeader>Exceeding expectations</HomeHeader>
      </HomeSection>
      <TextSection>
        <p>Since 2002, VERTICAL has completed hundreds of projects in Idaho and beyond. Our portfolio features projects that range from simple tenant improvements to complex remodels and  ground-up construction.  We are particularly proud of the projects we have constructed for repeat clients.  These relationships are forged through mutual respect and trust and are a testament to the value we offer our building partners.  With VERTICAL as your building partner, the challenge of balancing cost, quality and time is considered and calculated long before the dirt and nails fly.</p>
        <p>We are honored to have played a part in building the dreams of business and homeowners throughout the region.</p>

      </TextSection>
    </HomeLayout>
  )
}
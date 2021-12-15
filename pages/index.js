import HomeHeader from "@components/homeHeader";
import HomeLayout from "../components/homeLayout";
import HomeSection from "../components/homeSection";
import { siteTitle, siteDescription, siteImage, siteUrl } from "../components/layout";
import { NextSeo, LocalBusinessJsonLd } from 'next-seo';
import TextSection from "../components/textSection";

export default function Home() {
  return (
    <HomeLayout>
      <NextSeo
        title={siteTitle}
        description={siteDescription}
        openGraph={{
          type: 'website',
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
        <h2>Waterhouse row</h2>
        <p><strong>What’s New?</strong></p>
        <p>Construction has begun on Phase II of Waterhouse Row, a multi-family development near the Boise River and Greenbelt.  This 16 unit mixed-use project includes townhomes to own, apartments to rent and commercial spaces to lease. VERTICAL completed construction of Phase I of Waterhouse Row in 2020. The development is nestled in the heart of an up-and- coming area of Garden City, ID.  Thanks to the vision of local developers, the area is poised to become an even larger hub for an active, river-loving community.</p>
        <a
          href="/project/waterhouse-row-ii"
          className="bg-primary hover:bg-red-600 focus:bg-red-600 shadow-md hover:shadow-lg p-2 lg:px-4 lg:py-3 my-4 lg:my-0 font-semibold text-sm lg:text-base uppercase tracking-wide text-white inline-flex items-center border-none"
          title="View Waterhouse Row Phase II project"
        >
          View project
          <svg className="w-4 h-4 ml-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </TextSection>
      <div className="h-24 sm:h-32"></div>
    </HomeLayout>
  )
}
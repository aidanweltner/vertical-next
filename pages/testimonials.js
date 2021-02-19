import { NextSeo } from "next-seo";
import Layout from "../components/layout";
import { siteTitle, siteImage, siteUrl } from "@components/layout";
import Testimonial from "../components/testimonial";
import TextSection from "../components/textSection";

export default function Testimonials() {
  return (
    <Layout>
      <NextSeo
        title="Testimonials | Vertical Construction"
        description="Testimonals of praise for Vertical Construction. A general contractor in Boise, Idaho."
        openGraph={{
          url: `${siteUrl + '/testimonials/'}`,
          title: "Testimonials | Vertical Construction",
          description: "Testimonals of praise for Vertical Construction. A general contractor in Boise, Idaho.",
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
        <h1>Testimonials</h1>
        <Testimonial
            quote="From our initial meetings, to the final product, your thorough approach delivered one of the most painless construction experiences I have ever had."
            source="Pat Kelly"
            sourcePosition="Executive Director, Your Health Idaho"
          />
          <p>On behalf of Your Health Idaho, I wanted to thank you for the tremendous job you did for Your Health Idaho on our tenant improvements. From our initial meetings, to the final product, your thorough approach delivered one of the most painless construction experiences I have ever had. Your team of subcontractors were efficient, effective and respectful of other tenants; communications before and during the project were timely, concise and clear; the project came in under budget and on time.  All the above was accomplished despite a global pandemic which stretched the supply chain and workforce like no other time in our country’s history.  While our job wasn’t the biggest on your plate, you ensured we had all the support we needed and then some.</p>
          <hr/>
          <Testimonial
            quote="I am also grateful for Todd’s willingness to pull the subs together early on and explore cost saving ideas since we’re a non-profit social enterprise with a lean budget."
            source="Tara Russell"
            sourcePosition="Founder, Create Common Good"
          />
          <p>We were fortunate to work with our friends and partners at VERTICAL Construction.  We so appreciate Todd and his team’s great work, and we thoroughly enjoyed the process.  I was especially impressed with the quality of the subs involved in the construction remodel work on our facility.  I am also grateful for Todd’s willingness to pull the subs together early on and explore cost saving ideas since we’re a non-profit social enterprise with a lean budget.  The VERTICAL team does high-quality work and cares deeply about their customers.  We appreciate their partnership!</p>
          <hr/>
          <Testimonial
            project="/project/big-creek"
            quote="Because of his expertise, experience, patient persistence, and willingness to go the extra mile, we now have a beautiful “million dollar” lodge at Big Creek."
            source="Jim Davies"
            sourcePosition="President, Idaho Aviation Foundation"
            projectTitle="Big Creek Aviation Lodge"
            projectImage="/images/projects/big-creek/BigCreekAviationLodgeIdaho.jpg"
          />
          <p>Todd/VERTICAL jumped in with both feet, brought the project under control and saw it through to completion 3 years later. The lodge is built on a Forest Service lease and Todd guided us through the maze of documentation mandated by numerous government agencies for ecological, design and safety considerations. Once all permits and environmental regulations were complied with, he skillfully managed the many challenges inherent in building off the grid in the backcountry, short building seasons, logistical complexities, subcontractor unpredictability, and overall quality control are but a few of the things that he skillfully and successfully dealt with. Because of his expertise, experience, patient persistence, and willingness to go the extra mile, we now have a beautiful “million dollar” lodge at Big Creek. I enthusiastically recommend Todd and VERTICAL for challenging construction projects without reservation.</p>
          <hr/>
          <Testimonial
            quote="Their coordination with the architect, design consultants and numerous City agencies was praiseworthy…"
            source="Mike Langley"
            sourcePosition="Project Manager, The Village Charter School"
          />
          <p>Aside from the numerous [challenges], the construction was during one of the worst winters in Boise. Vertical and its subcontractors displayed excellent flexibility in modifying work schedules to accommodate these changes. Their coordination with the architect, design consultants and numerous City agencies was praiseworthy in getting changes designed and approved to maintain schedules while minimizing additional costs.</p>
          <hr/>
          <Testimonial
            project="/project/bittercreek"
            quote="I awarded Todd the following two projects without bidding it."
            source="Dave Krick"
            sourcePosition="Owner, Bittercreek Alehouse &amp; Red Feather Lounge"
            projectTitle="Bittercreek Alehouse"
            projectImage="/images/projects/bittercreek/BitterCreekAlehouseDowntownBoise.jpg"
          />
          <p>Working with VERTICAL was such a great experience I awarded Todd the following two projects without bidding it. I did this because Todd can be trusted to share actual financial information. He uses solid project management tools and understands timelines and he is a quality professional. I can’t imagine working with anyone else if Todd is available for my future projects. I highly recommend Todd for any building project you may have.</p>
          <hr/>
          <Testimonial
            project="/project/bown-commons"
            quote="His industry knowledge, likeability and above all commanding respect allow him to make things happen."
            source="John Baker"
            sourcePosition="Managing Partner, Riverside Office Group LLC | Bown Office Commons"
            projectTitle="Bown Commons"
            projectImage="/images/projects/bown-commons/BownCommonsExterior.jpg"
          />
          <p>Todd Weltner and his company VERTICAL Corporation run an outstanding operation. His industry knowledge, likeability and above all commanding respect allow him to make things happen. Integrity, honesty and loyalty are characteristics not always found in the general contracting business. Add the personal traits of being punctual, organized and professional and you have Todd. Having VERTICAL Corp as the general building contractor on our office project was a real asset and ticket to our success. I look forward to working with Todd on many building projects in the future. I can only offer the highest of recommendations to Todd and VERTICAL Corp.</p>
          <hr/>
          <Testimonial
            project="/project/bardenay"
            quote="...when it came time for us to add a second location, Todd was the only contractor I talked to."
            source="Kevin C. Settles"
            sourcePosition="President, Bardenay Restaurant &amp; Distillery"
            projectTitle="Bardenay Restaurants"
            projectImage="/images/projects/bardenay/Bardenay.Boise_.jpg"
          />
          <p>Todd Weltner has been the contractor for both my restaurants. The first one was a build-out that went so well that, when it came time for us to add a second location, Todd was the only contractor I talked to. Todd’s knowledge, honesty and people skills make him a pleasure to work with but more importantly, those same traits allowed our second project to be finished early and 7.5 percent under budget.</p>
          <hr/>
          <Testimonial
            project="/project/idaho-neurosurgeons"
            quote="Without any reservation, VERTICAL Construction receives my highest recommendation and continued thanks for exceeding expectations on a very difficult job."
            source="Frank Clark"
            sourcePosition="COO, Idaho Neurological Associates"
            projectTitle="Idaho Neurological Office"
            projectImage="/images/projects/idaho-neurosurgeons/Idaho_NeuroSurgical_Lobby_StAlphonsus.jpg"
          />
          <p>We are a clinic of eight neurosurgeons. These are individuals of excessively high standards who on a daily basis never stop their quest for perfection. I could not imagine another contractor satisfying their standards while maintaining any discipline of a schedule. VERTICAL has met a very demanding schedule and magically continues to pursue very high standards of work. Without any reservation, VERTICAL Construction receives my highest recommendation and continued thanks for exceeding expectations on a very difficult job.</p>
          <hr/>
          <Testimonial
            project="/project/ram-restaurant"
            quote="We also appreciate Todd’s hands-on, active involvement in this project which undoubtedly results in a more efficient overhead cost which we respect and value."
            source="Jeffrey B. Iverson"
            sourcePosition="President, Ram International"
            projectTitle="Ram Restaurant"
            projectImage="/images/projects/ram-restaurant/RamRestaurantBarAreaMeridian.jpg"
          />
          <p>It has been nothing but a pleasure working with Todd Weltner and VERTICAL Construction on our new restaurant in Meridian, ID. Todd’s calm demeanor, humility, professionalism and frugal approach matched the values we hold dear at our company. We also appreciate Todd’s hands-on, active involvement in this project which undoubtedly results in a more efficient overhead cost which we respect and value. Todd put much effort into the early design/build portion of the project and his efforts paid off well for all involved. Our company looks forward to working with VERTICAL in the future.</p>
          <hr/>
          <Testimonial
            quote="Their professionalism, hard work, expertise and willingness to become a partner of yours, makes VERTICAL an excellent candidate for any building project."
            source="Joe Eiguren"
            sourcePosition="Owner, Intelligent Office"
          />
          <p>We would not hesitate to recommend VERTICAL Construction’s services given the great experience we had with them on the Intelligent Office project.  Their professionalism, hard work, expertise and willingness to become a partner of yours, makes VERTICAL an excellent candidate for any building project.</p>
          <hr/>
          <Testimonial
            project="/project/northwest-pets"
            quote="As a small business, it was also very important to stay within our target budget and you were able to achieve that request with clear communication along the way."
            source="Del Peterson"
            sourcePosition="President, Northwest Pets, Inc."
            projectTitle="Northwest Pets"
            projectImage="/images/projects/northwest-pets/NorthwestPets.jpg"
          />
          <p>Being new to the commercial construction process, we thank you for coordinating the planning and construction processes in an efficient and thoughtful manner. Given the complexities of dealing with both a general contractor and a separate interior store designer in another state, we are quite surprised that the process went so smoothly! As a small business, it was also very important to stay within our target budget and you were able to achieve that request with clear communication along the way.</p>
      </TextSection>
    </Layout>
  )
}
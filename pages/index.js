import Head from "next/head";
import HomeLayout from "../components/homeLayout";
import HomeSection from "../components/homeSection";
import { siteTitle } from "../components/layout";
import TextSection from "../components/textSection";

export default function Home() {
  return (
    <HomeLayout>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <HomeSection
        title="Portfolio"
        href="/"
        top="30+ years of experience of construction management experience makes VERTICAL"
        heading="The first step in your building journey"
        bg="bardenay-boise-vertical-construction.jpg"
      />
      <HomeSection
        title="Contact"
        href="/"
        top="Our unique process ensures that your project moves smoothly"
        heading="From the drawing board to reality"
        bg="Eagle-River-Vertical-Construction.jpg"
      />
      <TextSection>
        <p>Bacon ipsum dolor amet hamburger tri-tip ribeye, nulla sausage occaecat frankfurter cillum shank minim tenderloin pork short loin incididunt ex. Pancetta ham aute, alcatra fatback sed eiusmod. Ut ball tip swine qui buffalo. Non veniam aute laboris in, deserunt ground round boudin ad esse adipisicing. Tempor mollit ut, cillum in nostrud culpa biltong irure flank adipisicing burgdoggen pork belly strip steak bresaola.</p>
        <p>Leberkas short ribs flank, <a href="#">ipsum sint ground</a> round ullamco cupim eiusmod anim fatback. Commodo qui dolor in kevin ad non salami alcatra sunt. Pig buffalo prosciutto aute tempor bresaola. Salami chuck bacon, kevin shoulder deserunt esse turducken velit nostrud landjaeger andouille non excepteur tenderloin.</p>
        <p>Irure tempor in, kevin sed mollit enim. Shank id nisi, spare ribs <strong>eu ground round</strong> alcatra bacon sed tenderloin irure picanha. Dolor dolore magna, beef drumstick proident flank bacon velit shoulder spare ribs ullamco strip steak anim. Officia bresaola ball tip meatball ullamco.</p>
        <p>Dolor qui quis ipsum, <em>proident aliquip sed</em> ball tip tri-tip corned beef porchetta officia chicken fatback swine. Proident leberkas pariatur consequat turducken kevin prosciutto consectetur short ribs pork loin. Tempor culpa shank, spare ribs magna ex strip steak sausage brisket deserunt aute nulla. Sint cupidatat tenderloin, spare ribs strip steak nisi incididunt fugiat dolore shank ribeye turkey aliquip.</p>
      </TextSection>
    </HomeLayout>
  )
}
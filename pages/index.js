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
        href="/portfolio"
        top="30+ years of experience of construction management experience makes VERTICAL"
        heading="The first step in your building journey"
        bg="projects/bardenay/bardenay-boise-vertical-construction.jpg"
      />
      <HomeSection
        title="Contact"
        href="/contact"
        top="Our unique process ensures that your project moves smoothly"
        heading="From the drawing board to reality"
        bg="Eagle-River-Vertical-Construction.jpg"
      />
      <TextSection>
        <h1>HTML Ipsum Presents</h1>
        <p><strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.</p>
        <h2>Header Level 2</h2>
        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>
        <blockquote><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.</p></blockquote>
        <hr/>
        <h3>Header Level 3</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>
        <pre><code>{"\n"}{"        "}#header h1 a {"{"}{"\n"}{"          "}display: block;{"\n"}{"          "}width: 300px;{"\n"}{"          "}height: 80px;{"\n"}{"        "}{"}"}{"\n"}{"        "}</code></pre>
        <table>
          <thead>
            <tr>
              <th>Sample</th>
              <th>Sample</th>
              <th>Sample</th>
              <th>Sample</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sample</td>
              <td>Sample</td>
              <td>Sample</td>
              <td>Sample</td>
            </tr>
            <tr>
              <td>Sample</td>
              <td>Sample</td>
              <td>Sample</td>
              <td>Sample</td>
            </tr>
            <tr>
              <td>Sample</td>
              <td>Sample</td>
              <td>Sample</td>
              <td>Sample</td>
            </tr>
          </tbody>
        </table>
      </TextSection>
    </HomeLayout>
  )
}
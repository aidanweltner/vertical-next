export default function ContactForm() {
  return (
    <form name="contact" action="/success" method="POST" netlify-honeypot="bot-field" data-netlify="true">
      <p className="hidden">
        <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
      </p>
      <input type="hidden" name="form-name" value="contact" />
      <p className="mb-3">
        <input className="w-72 p-2 bg-gray-700 text-white focus:ring-primary ring-opacity-60" type="text" name="name" id="yourname" placeholder="John Doe" />  <br />
        <label className="text-sm lg:text-md font-light mt-1" htmlFor="yourname">
          Name
        </label>
      </p>
      <p className="mb-3">
        <input className="w-72 p-2 bg-gray-700 text-white focus:ring-primary ring-opacity-60" type="email" name="email" id="youremail" placeholder="john.doe@company.com" /> <br/>
        <label className="text-sm lg:text-md font-light mt-1" htmlFor="youremail">
          Email
        </label>
      </p>
      <p className="mb-3">
        <input className="w-72 p-2 bg-gray-700 text-white focus:ring-primary ring-opacity-60" type="text" name="subject" id="subject" placeholder="I'm ready to build" /> <br/>
        <label className="text-sm lg:text-md font-light mt-1" htmlFor="subject">
          Subject
        </label>
      </p>
      <p className="mb-3">
        <textarea className="w-72 p-2 bg-gray-700 text-white focus:ring-primary ring-opacity-60" name="message" id="yourmessage" placeholder="Your message"></textarea>
      </p>
      <p className="mb-3">
        <button className="py-2 px-6 mt-2 bg-primary uppercase text-white font-medium tracking-wider" type="submit">Send</button>
      </p>
    </form>
  )
}
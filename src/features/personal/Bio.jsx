import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "../../ui/Icon";
import Timeline from "./Timeline";
import Content from "../../ui/Content";

function Bio() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="max-w-5xl px-6 gap-20 items-stretch">
        <section className="mb-10">
          <h1>Hi, I'm Rizzi Cabrera!</h1>
          <div className="mt-3">
            <Icon type="regular" icon={<FaEnvelope />} title="Email" />
            <Icon type="regular" icon={<FaLinkedin />} title="LinkedIn" />
            <Icon type="regular" icon={<FaGithub />} title="Github" />
          </div>
        </section>
        <section>
          <Content>
            <p>
              I'm a frontend dev that was introduced to the world of HTML and
              CSS back in 6th grade, it was an extremely bare bones type of
              introduction but ever since that moment, I've held a fascination
              towards anything relating to websites and webapps.
            </p>
            <p>
              My journey started with limited access to internet tools. In
              college, I also didn't have proper opportunities to formally study
              web development. I found myself exploring roles in back-office
              support and database administration instead.
            </p>
            <p>
              Still, I kept looking for that same thrill I felt when I launched
              my very first “Hello World” that was glowing against a bright neon
              background, on a browser at my school's computer lab.
            </p>
            <p>
              It has been a long and solo journey but through perseverance, and
              powered by my pure drive of curiosity, I managed to teach myself
              the proper foundations on HTML, CSS, and JavaScript. Eventually I
              dipped my toes in React, Tailwind, and Sass.
            </p>
          </Content>
        </section>
        <Timeline />

        {/* sent */}
        <section></section>
      </div>
    </div>
  );
}

export default Bio;

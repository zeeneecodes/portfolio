import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "../../ui/Icon";

function Hero() {
  return (
    <header className="bg-[url(header.jpg)] md:bg-[url(header-md.jpg)] lg:bg-[url(header-lg.jpg)] bg-bottom-right bg-contain bg-no-repeat lg:bg-cover lg:bg-center h-dvh flex items-start lg:items-center md:pl-[10%] max-md:justify-center">
      <div className="mt-60 md:mt-30 lg:mt-0 mx-5">
        <h1 className="text-5xl md:text-7xl lg:text-8xl">Hi, I'm Rizzi!</h1>
        <p>
          Endless curiosity and learning is what drives me. I love single player
          games and reading books.
        </p>
        <p>📖 Currently reading: The Stormlight Archive</p>
        <div className="mt-5">
          <Icon
            type="regular"
            icon={<FaEnvelope />}
            title="Email"
            link="mailto:cabrerarizzi@gmail.com"
          />
          <Icon
            type="regular"
            icon={<FaLinkedin />}
            title="LinkedIn"
            link="https://www.linkedin.com/in/rizzi-eunice-cabrera-54a687148/"
          />
          <Icon
            type="regular"
            icon={<FaGithub />}
            title="Github"
            link="https://github.com/zeeneecodes"
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;

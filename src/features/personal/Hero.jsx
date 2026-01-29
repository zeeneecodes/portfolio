import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "../../ui/Icon";

function Hero() {
  return (
    <header className="bg-[url(header.jpg)] md:bg-[url(header-md.jpg)] lg:bg-[url(header-lg.jpg)] bg-bottom-right bg-contain bg-no-repeat lg:bg-cover lg:bg-center h-dvh flex items-center md:pl-[10%] max-md:justify-center">
      <div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl">Hi, I'm Rizzi!</h1>
        <p className="mb-3">Some text and personal intro</p>
        <Icon type="regular" icon={<FaEnvelope />} title="Email" />
        <Icon type="regular" icon={<FaLinkedin />} title="LinkedIn" />
        <Icon type="regular" icon={<FaGithub />} title="Github" />
      </div>
    </header>
  );
}

export default Hero;

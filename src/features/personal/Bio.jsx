import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "../../ui/Icon";
import Timeline from "./Timeline";

function Bio() {
  return (
    <section className="w-full">
      <section>
        <h1>Hi, I'm Rizzi Cabrera!</h1>
        <div>
          <Icon type="regular" icon={<FaEnvelope />} title="Email" />
          <Icon type="regular" icon={<FaLinkedin />} title="LinkedIn" />
          <Icon type="regular" icon={<FaGithub />} title="Github" />
        </div>
      </section>
      <section className="my-20">
        <Timeline />
      </section>

      {/* sent */}
      <section></section>
    </section>
  );
}

export default Bio;

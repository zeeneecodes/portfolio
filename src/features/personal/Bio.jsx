import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Icon from "../../ui/Icon";
import Timeline from "./Timeline";
import Content from "../../ui/Content";

function Bio() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="max-w-5xl px-6 gap-20 items-stretch">
        <section>
          <h1>Hi, I'm Rizzi Cabrera!</h1>
          <div>
            <Icon type="regular" icon={<FaEnvelope />} title="Email" />
            <Icon type="regular" icon={<FaLinkedin />} title="LinkedIn" />
            <Icon type="regular" icon={<FaGithub />} title="Github" />
          </div>
        </section>
        <section>
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              sed totam nam in, nostrum distinctio fugiat facilis minima optio
              modi temporibus unde, vitae iure quo nobis. Corporis minima
              possimus consectetur.
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

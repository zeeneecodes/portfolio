import "./App.css";

import Tag from "./ui/Tag";
import Icon from "./ui/Icon";
import {
  FaCss3,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinkedin,
  FaNpm,
  FaPaperPlane,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiVite } from "react-icons/si";
import Content from "./ui/Content";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import Card from "./ui/Card";

function App() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="max-w-5xl flex flex-col justify-center items-center px-6">
        <h1>Header 1</h1>
        <h2>header 2</h2>
        <h3>header 3</h3>

        <a href="#" target="_blank" rel="noopener noreferrer">
          Link
        </a>
        <br />
        <br />
        <button class="btn-primary">Live Code</button>
        <button class="btn-primary">Read More</button>
        <div>
          <Tag tag="Tag" />
          <Tag tag="Tag2" />
          <Tag tag="Tag3" />
        </div>
        <br />
        <section className="w-full">
          <h1>My Toolbox</h1>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 w-72 md:w-[600px] lg:w-[720px]">
              <Icon type="tech" icon={<FaHtml5 />} title="HTML" />
              <Icon type="tech" icon={<FaCss3 />} title="CSS" />
              <Icon type="tech" icon={<FaJs />} title="JavaScript" />
              <Icon type="tech" icon={<FaReact />} title="React" />
              <Icon type="tech" icon={<FaSass />} title="Sass" />
              <Icon type="tech" icon={<RiTailwindCssFill />} title="Tailwind" />
              <Icon type="tech" icon={<FaNpm />} title="NPM" />
              <Icon type="tech" icon={<RiSupabaseFill />} title="Supabase" />
              <Icon type="tech" icon={<SiVite />} title="Vite" />
            </div>
          </div>
        </section>
        <br />
        <div>
          <h2>Regular Tags</h2>
          <Icon type="regular" icon={<FaEnvelope />} title="Email" />
          <Icon type="regular" icon={<FaLinkedin />} title="LinkedIn" />
          <Icon type="regular" icon={<FaGithub />} title="Github" />
        </div>
        <br />
        <div>
          <Content title="Lorem Ipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In semper
              aliquam rhoncus. Nullam tristique erat vehicula, interdum augue
              sed, laoreet tellus. Sed commodo lectus nulla, id tempor dolor
              viverra bibendum. Curabitur ornare sapien ac neque sodales, at
              ullamcorper erat facilisis. Vivamus euismod dignissim eros, sit
              amet iaculis neque. Aliquam dapibus, magna vitae venenatis porta,
              velit mauris dignissim velit, id tincidunt quam sapien at ante.
              Aenean eget tincidunt ante, vel ullamcorper turpis. Aliquam
              suscipit libero at consequat finibus.
            </p>
            <p>
              Curabitur maximus, odio in luctus maximus, ipsum erat fermentum
              orci, sit amet hendrerit purus enim ac dolor. Integer elementum
              orci et ipsum tempus porttitor. Etiam volutpat volutpat felis, nec
              ullamcorper sapien semper consectetur. Nam a mauris est. Interdum
              et malesuada fames ac ante ipsum primis in faucibus. Sed mauris
              elit, eleifend varius libero vel, convallis imperdiet nulla.
              Phasellus maximus ipsum ut ultricies hendrerit. Vestibulum ac
              euismod mauris. Proin iaculis lacinia risus non cursus. Nullam
              rutrum est vitae tellus pharetra, nec volutpat nisi aliquam. Fusce
              lorem mauris, consectetur at pellentesque dictum, bibendum et
              risus.
            </p>
            <p>
              Mauris ac ipsum nec tortor ornare maximus. Maecenas maximus arcu a
              lacinia sagittis. Etiam at dolor et ipsum finibus mollis a in
              massa. Curabitur et enim nulla. Donec dui nisl, consequat in
              sagittis et, bibendum gravida ipsum. Aliquam erat volutpat.
              Phasellus lorem ante, auctor ac mi sed, dapibus interdum est.
              Integer malesuada magna sem, a sagittis massa porta ac. Maecenas
              ut magna eget nunc scelerisque hendrerit. Pellentesque placerat
              ligula nec felis pellentesque fringilla. Aliquam erat volutpat.{" "}
            </p>
          </Content>
        </div>
        <br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card
            title="Phainon"
            image="phainon-296w.png"
            tags={["Khaslana", "Flame Reaver"]}
            description="He is Phainon of Aedes Elysiae. A nameless hero who wished to fulfill everyone's wishes."
            alt="phainon pic"
          />
          <Card
            title="Phainon"
            image="phainon-296w.png"
            tags={["Khaslana", "Flame Reaver"]}
            description="He is Phainon of Aedes Elysiae. A nameless hero who wished to fulfill everyone's wishes."
            alt="phainon pic"
          />
          <Card
            title="Phainon"
            image="phainon-296w.png"
            tags={["Khaslana", "Flame Reaver"]}
            description="He is Phainon of Aedes Elysiae. A nameless hero who wished to fulfill everyone's wishes."
            alt="phainon pic"
          />
          <Card
            title="Phainon"
            image="phainon-296w.png"
            tags={["Khaslana", "FlameReaver", "hmmmmmmmmm", "this is another"]}
            description="He is Phainon of Aedes Elysiae. A nameless hero who wished to fulfill everyone's wishes."
            alt="phainon pic"
          />
        </div>
      </div>
    </main>
  );
}

export default App;

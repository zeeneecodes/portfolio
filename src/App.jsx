import "./App.css";

import Icon from "./ui/Icon";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import Content from "./ui/Content";
import Card from "./ui/Card";
import ToolBox from "./features/toolbox/ToolBox";
import PersonalProjects from "./features/projects/StudyProjects";

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
        <ToolBox />
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
      </div>
    </main>
  );
}

export default App;

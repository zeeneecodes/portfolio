import { FaCss3, FaHtml5, FaJs, FaNpm, FaReact, FaSass } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import Icon from "../../ui/Icon";

function ToolBox() {
  return (
    <section className="w-full">
      <h1>My Toolbox</h1>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 w-72 md:w-150 lg:w-225">
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
  );
}

export default ToolBox;

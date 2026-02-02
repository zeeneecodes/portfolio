import Hero from "../features/personal/Hero";
import PersonalProjects from "../features/projects/PersonalProjects";
import ToolBox from "../features/toolbox/ToolBox";

function Home() {
  return (
    <>
      <Hero />
      <main className="flex flex-col justify-center items-center pt-30">
        <div className="w-full max-w-5xl flex flex-col justify-center items-center px-6 gap-30">
          <ToolBox />
          <PersonalProjects />
        </div>
      </main>
    </>
  );
}

export default Home;

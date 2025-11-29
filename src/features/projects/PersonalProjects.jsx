import Content from "../../ui/Content";
import ProjectPreview from "../../ui/ProjectPreview";
import Tag from "../../ui/Tag";

function PersonalProjects() {
  return (
    <section className="w-full">
      {/* BIG FINISHED PROJECTS */}
      <section className="mb-10">
        <h1>Projects</h1>
        <ProjectPreview
          img="https://upload-os-bbs.hoyolab.com/upload/2024/12/16/19612479/57d5ece48080fc485856bcabc24158f4_2511853629224699986.jpeg"
          title="Amphoreus"
          tags={["Remembrance", "Destruction", "Erudition"]}
          description="The Scepter δ-me13, a creation of Rubert II, is an astral computer that the simulated world of Amphoreus runs on in continuous cycles. Unlike other Scepters, δ-me13 once served as a Celestial-Body Neuron for Nous, but was later discarded."
          liveLink="https://honkai-star-rail.fandom.com/wiki/Amphoreus"
          studyLink="https://honkai-star-rail.fandom.com/wiki/Amphoreus"
        />
        <ProjectPreview
          img="https://upload-os-bbs.hoyolab.com/upload/2024/12/16/19612479/57d5ece48080fc485856bcabc24158f4_2511853629224699986.jpeg"
          title="Amphoreus"
          tags={["Remembrance", "Destruction", "Erudition"]}
          description="The Scepter δ-me13, a creation of Rubert II, is an astral computer that the simulated world of Amphoreus runs on in continuous cycles. Unlike other Scepters, δ-me13 once served as a Celestial-Body Neuron for Nous, but was later discarded."
          liveLink="https://honkai-star-rail.fandom.com/wiki/Amphoreus"
          studyLink="https://honkai-star-rail.fandom.com/wiki/Amphoreus"
        />
      </section>

      {/* PAST PROJECTS */}
      <section>
        <h2>Study Projects</h2>
        <div className="flex gap-4 mt-4 mb-40">
          <div className="bg-primary w-1.5 h-auto"></div>
          {/* <div className="before:content-['*'] before:bg-primary before:w-2.5 before:h-1"> */}
          <div>
            <p>
              I started with small, hands-on projects that helped me grasp the
              essentials of Front End Development, namely, HTML, CSS, JavaScript
              and eventually React.
            </p>
            <button className="btn-neutral mt-5">See Projects</button>
          </div>
        </div>
      </section>

      {/* IN PROGRESS PROJECT/S */}
      <section className="mb-10">
        <div className="flex gap-1 flex-wrap">
          <Tag tag="in  progress" />
        </div>
        <Content heading="h2" title="Note App">
          <p>
            I am currently working on a note webapp that has a Rich Text Format
            (RTF) functionality
          </p>
        </Content>
      </section>
    </section>
  );
}

export default PersonalProjects;

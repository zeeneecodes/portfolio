import Card from "../../ui/Card";
import Content from "../../ui/Content";
import ProjectPreview from "../../ui/ProjectPreview";
import Tag from "../../ui/Tag";
import StudyProjects from "./StudyProjects";

function PersonalProjects() {
  return (
    <section className="w-full">
      {/* BIG FINISHED PROJECTS */}
      <section className="mb-36">
        <h1 className="mb-15">Featured Projects</h1>
        {/* <ProjectPreview
          img="https://upload-os-bbs.hoyolab.com/upload/2024/12/16/19612479/57d5ece48080fc485856bcabc24158f4_2511853629224699986.jpeg"
          title="Money Pouch"
          tags={[
            "React",
            "JavaScript",
            "React Router",
            "Tanstack Query",
            "Supabase",
            "Sass",
            "React Hook Form",
          ]}
          description=""
          liveLink=""
          studyLink=""
        />
        <ProjectPreview
          img="https://upload-os-bbs.hoyolab.com/upload/2024/12/16/19612479/57d5ece48080fc485856bcabc24158f4_2511853629224699986.jpeg"
          title="Portfolio"
          tags={["React", "Tailwind"]}
          description="The Scepter δ-me13, a creation of Rubert II, is an astral computer that the simulated world of Amphoreus runs on in continuous cycles. Unlike other Scepters, δ-me13 once served as a Celestial-Body Neuron for Nous, but was later discarded."
          liveLink=""
          studyLink=""
        />
        
        <ProjectPreview
          img="https://upload-os-bbs.hoyolab.com/upload/2024/12/16/19612479/57d5ece48080fc485856bcabc24158f4_2511853629224699986.jpeg"
          title="CAWPILE Rating Calculator"
          tags={["React", "Tailwind"]}
          description="The Scepter δ-me13, a creation of Rubert II, is an astral computer that the simulated world of Amphoreus runs on in continuous cycles. Unlike other Scepters, δ-me13 once served as a Celestial-Body Neuron for Nous, but was later discarded."
          liveLink=""
          studyLink=""
        /> */}
        <ProjectPreview
          title="Money Pouch"
          tags={[
            "React",
            "JavaScript",
            "React Router",
            "Tanstack Query",
            "Supabase",
            "Sass",
            "React Hook Form",
          ]}
          img={[
            {
              pic: "/moneypouch-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/moneypouch-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          description="A personal budgeting tool that is inspired by Dave Ramsey's cash envelope system, zero based budgeting, and YNAB. It allows users to manually allocate their income, create categories, and track transactions. It is the accumulation of everything I learned from Jonas Schmedtmann's Udemy React Course"
          liveLink="https://money-pouch.vercel.app/"
          studyLink="overview/moneypouch"
        />
        <ProjectPreview
          title="Basic Cashier"
          tags={["Advanced JavaScript", "DOM Manipulation"]}
          description="A basic web app built using vanilla HTML, CSS, and JavaScript. Created for a sibling of a friend's school project, this was my first hands-on exploration of how JavaScript can drive web app behavior through features like UI filtering and a simple cashier calculator."
          img={[
            {
              pic: "/cashier-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/cashier-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          liveLink="https://kath-basic-cashier.vercel.app/"
          studyLink="overview/cashier"
          alt='Picture of the Basic Cashier webapp Screenshot with on a green background and an additional context subtitle of "Interactive Static Page"'
        />
      </section>

      {/* PAST PROJECTS */}
      <section>
        <h1>My Other Works</h1>
        <div className="flex gap-4 mt-4 mb-40">
          <StudyProjects />
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

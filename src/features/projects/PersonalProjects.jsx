import Card from "../../ui/Card";
import Content from "../../ui/Content";
import ProjectPreview from "../../ui/ProjectPreview";
import Tag from "../../ui/Tag";
import StudyProjects from "./StudyProjects";

function PersonalProjects() {
  return (
    <section className="w-full">
      {/* BIG FINISHED PROJECTS */}
      <section>
        <h1 className="mb-15">Featured Projects</h1>
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

      {/* IN PROGRESS PROJECT/S */}
      <section className="my-20">
        <Content heading="h2" title="CAWPILE Calculator">
          <div className="flex gap-1 flex-wrap mt-3">
            <Tag tag="in  progress" />
          </div>
          <p className="mt-5">
            A web app calculator based on a book rating system created by Book
            Roast.
          </p>
        </Content>
      </section>

      {/* <StudyProjects /> */}
      <section>
        <h1>My Other Works</h1>
        <p className="mb-15">
          These are the small/foundational knowledge projects that I have worked
          on!
        </p>

        <ProjectPreview
          title="Bitendo"
          tags={["Advanced JavaScript", "DOM Manipulation", "Sass"]}
          description="A parody imitation of Nintendo Switch's store page that toes the line between a static and a dynamic app. This is a practice project that is focused on exploring how Advanced JavaScript and DOM manipulation can really bring a web app to life. The carousel, like button, cards, and accordions are all interactive."
          img={[
            {
              pic: "/bitendo-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/bitendo-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          liveLink="https://bitendo-product-page.vercel.app/"
          alt='Picture of Bitendo Screenshot with on a green background and an additional context subtitle of "Interactive Static Page"'
        />
        <ProjectPreview
          title="Excuse Generator"
          tags={["React", "JavaScript", "State Management"]}
          description="An applied learning project built after studying basic JavaScript API calls and foundational React concepts, including reusable components, useState, and useEffect."
          img={[
            {
              pic: "/excuse-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/excuse-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          liveLink="https://zeeneecodes.github.io/excuse-generator/"
          alt='Picture with a green background containing screenshots of the Excuse Generator webapp. Additional context subtitle of "Frontend Project with External API"'
        />
        <ProjectPreview
          title="Flower"
          tags={["HTML", "Sass", "JavaScript"]}
          description="A learning exercise on how javascript can make an html element interactive. This is also a hands-on practice on responsive websites."
          img={[
            {
              pic: "/flower-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/flower-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          liveLink="https://zeeneecodes.github.io/pricing-page/"
          alt='Picture of screenshots of the Flower website with on a green background and an additional context subtitle of "Interactive Static Page"'
        />
        <ProjectPreview
          title="Preppy"
          tags={["HTML", "Sass", "Responsive Design"]}
          description="A purely static website that also doubles as a practice on responsive websites."
          img={[
            {
              pic: "/preppy-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/preppy-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          liveLink="https://zeeneecodes.github.io/practice-faq-landing/"
          alt='Picture of two screenshots of the Preppy website with on a green background and an additional context subtitle of "Interactive Static Page"'
        />
        <ProjectPreview
          title="YouTube Clone"
          tags={["HTML", "CSS", "Responsive Design", "JavaScript"]}
          description="After completing the final project of Supersimpledev's HTML & CSS course, this was my attempt at challenging myself and picking off from the project's base static landing YouTube page. I added all the missing features and interactivity that I wanted to see by only using HTML, vanilla CSS, and vanilla JavaScript. My continuation is based on YouTube's 2024 UI/UX."
          img={[
            {
              pic: "/ytclone-xs.jpg",
              media: "(max-width:640px)",
            },
            {
              pic: "/ytclone-md.jpg",
              media: "(max-width:768px)",
            },
          ]}
          liveLink="https://zeeneecodes.github.io/youtube-clone/"
          alt='Picture of two screenshots of the YouTube Clone website with on a green background and an additional context subtitle of "Interactive Static Page"'
        />
      </section>
    </section>
  );
}

export default PersonalProjects;

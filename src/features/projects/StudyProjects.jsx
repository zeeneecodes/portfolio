import Card from "../../ui/Card";
import ProjectPreview from "../../ui/ProjectPreview";

function StudyProjects() {
  return (
    <div className="mb-36">
      <p className="mb-15">
        These are the small/foundational knowledge projects that I have worked
        on!{" "}
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
    </div>
  );
}
// function StudyProjects() {
//   return (
//     <div className="w-full max-w-[900px] mx-auto">
//       <p className="mb-5">
//         These are the small/foundational knowledge projects that I have worked
//         on!
//       </p>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
//         <Card
//           image="/phainon-296w.png"
//           tags={["Advanced JavaScript", "Sass", "DOM Manipulation"]}
//           title="Bitendo Store Page"
//           description="A parody imitation of Nintendo Switch's store page. This project was a practice project focused on exploring how advanced JavaScript and DOM manipulation can bring a web app to life."
//           liveLink="https://bitendo-product-page.vercel.app/"
//         />
//         <Card
//           title="Excuse Generator"
//           tags={["React", "JavaScript", "CSS", "State Management"]}
//           description="This was an applied learning project after learning basic API calls in JavaScript and basic React concepts such as reusable components, useState, and useEffect."
//           liveLink="https://zeeneecodes.github.io/excuse-generator/"
//         />
//         <Card
//           title="Flower - A Static Pricing Page"
//           tags={["React", "JavaScript", "CSS", "State Management"]}
//           description="A learning exercise on how javascript can make an html element interactive. This is also a hands-on practice on responsive websites."
//           liveLink="https://zeeneecodes.github.io/pricing-page/"
//         />
//         <Card
//           title="Preppy - A Static FAQ Page"
//           tags={["HTML", "Sass"]}
//           description="A learning exercise on how javascript can make an html element interactive. This is also a hands-on practice on responsive websites."
//           liveLink="https://zeeneecodes.github.io/practice-faq-landing/"
//         />
//         <Card
//           title="YouTube Clone - Static UI"
//           tags={["HTML", "CSS", "JavaScript"]}
//           description="This was my attempt at challenging myself after completing the final project of Supersimpledev's HTML & CSS course project. I added all the missing features and interactivity that I wanted to see by only using HTML, vanilla CSS, and vanilla JavaScript. My continuation is based on YouTube's 2024 UI/UX."
//           liveLink="https://zeeneecodes.github.io/youtube-clone/"
//         />
//       </div>
//     </div>
//   );
// }

export default StudyProjects;

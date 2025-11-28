import Card from "../../ui/Card";

function StudyProjects() {
  return (
    <div>
      <h1>Study Projects</h1>
      <p className="mb-5">
        These are the small/foundational knowledge projects that I have worked
        on!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[900px]">
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
          liveLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
          studyLink="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images"
        />
        <Card
          title="Phainon"
          image="phainon-296w.png"
          tags={["Khaslana", "FlameReaver", "hmmmmmmmmm", "this is another"]}
          description="He is Phainon of Aedes Elysiae. A nameless hero who wished to fulfill everyone's wishes."
          studyLink="yey"
          alt="phainon pic"
        />
      </div>
    </div>
  );
}

export default StudyProjects;

import Content from "../../ui/Content";
import Tag from "../../ui/Tag";

function Project() {
  return (
    <section className="w-full">
      <section className="mb-20">
        <div className="flex gap-1 flex-wrap mb-3">
          <Tag tag="react" />
          <Tag tag="supabase" />
          <Tag tag="react router" />
        </div>
        <h1>Project Title</h1>
        <figure>
          <img src="phainon-296w.png" className="mt-5" alt="" />
          <p className="italic text-xs">
            Front-end web app with backend integration
          </p>
        </figure>
      </section>
      <section>
        <Content heading="h2" title="Overview">
          <p>What problem or did this project tackle?</p>
        </Content>
        <Content heading="h2" title="My Role">
          <p>UI, state management, database design, deployment.</p>
        </Content>
        <Content heading="h2" title="What I built / learned">
          <ul>
            <li>1</li>

            <li>2</li>
            <li>3</li>
          </ul>
        </Content>
        <Content heading="h2" title="Challenges & Problem-Solving">
          <p>
            What broke, what confused you, and how you approached fixing it.
          </p>
        </Content>
      </section>
    </section>
  );
}

export default Project;

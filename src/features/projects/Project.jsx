import Content from "../../ui/Content";
import Tag from "../../ui/Tag";

const mediaSize = {
  xs: "",
  md: "",
};

function Project() {
  return (
    <main className="flex flex-col justify-center items-center pt-30">
      <div className="max-w-5xl flex flex-col justify-center px-6 gap-20 items-stretch">
        <section>
          <div className="flex gap-1 flex-wrap mb-3">
            <Tag tag="react" />
            <Tag tag="supabase" />
            <Tag tag="react router" />
          </div>
          <h1>Project Title 976x586</h1>
          <figure>
            {/* <picture>
        {img.map((img, i) => {
          return <source key={i} srcSet={img.pic} media={img.media} />;
        })}
        <img loading="lazy" src={img[1].pic} alt={alt} />
      </picture> */}
            <picture></picture>
            <img
              src="/ytclone-lg.jpg"
              className="mt-5 w-[976px] h-[586px] object-cover object-center"
              alt=""
            />
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
      </div>
    </main>
  );
}

export default Project;

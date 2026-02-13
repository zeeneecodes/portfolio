import Content from "../../ui/Content";
import Tag from "../../ui/Tag";
import { mediaSize } from "../../utils/constants";

const { xs, md } = mediaSize;

function Portfolio() {
  return (
    <main className="flex flex-col justify-center items-center my-20">
      <div className="max-w-5xl flex flex-col justify-center px-6 gap-5 items-stretch">
        <section>
          <h1>Portfolio</h1>
          <div className="flex gap-1 flex-wrap mb-3">
            <Tag tag="react" />
            <Tag tag="tailwind" />
          </div>
          <figure className="cs-h-img">
            <picture>
              <source srcSet="/portfolio-xs.jpg" media={xs} />
              <source srcSet="/portfolio-md.jpg" media={md} />
              <img src="/portfolio-lg.jpg" alt="" />
            </picture>
            <p className="italic text-xs">Personal Project Showcase</p>
          </figure>
        </section>
        <section>
          <Content heading="h2" title="Overview">
            <p>
              A personal portfolio website showcasing the projects I am proud
              off during my upskilling.
            </p>
          </Content>
          <Content heading="h2" title="What I built / learned">
            <ul>
              <li>Getting comfortable with using tailwind</li>
              <li>Planning ahead when using responsive ui/ux</li>
            </ul>
          </Content>
          <Content heading="h2" title="Challenges & Problem-Solving">
            <p>
              I worked on this mini project shortly after finishing my
              foundations in HTML, CSS, and JavaScript. At the time, I had just
              started learning about the DOM, so this project became my first
              real chance to experiment with how JavaScript can affect the UI.
            </p>
            <p>
              One of the main challenges was figuring out how UI filtering
              actually works. This was a completely new concept and I didn't
              fully understand the logic at first. It took several days of trial
              and error before I realized I could directly control what appeared
              on screen by manipulating the DOM with basic JavaScript.
            </p>
            <p>
              Another challenge was imitating a cashier-style interface that is
              similar to what I'd seen on fastfood ordering screens. I wanted
              duplicate items to appear as a separate instance when clicked
              multiple times, and, for the total price to update correctly. At
              first, items wouldn't duplicate as I wanted to and the
              calculations were wrong ignoring the duplicates. After a bunch
              trials and errors, I managed to make it work by treating each
              click as a new item entry then recalculate the total based on
              everything that is in the cart.
            </p>
            <p>
              I had to work within the limits of the JavaScript topics given by
              their teacher, while still meeting the project requirements. This
              pushed me to keep my solution simple and intentional instead of
              overcomplicating it. This project was also my real "aha" moment
              outside of courses and tutorials. It gave me a clearer
              understanding on how JavaScript is also the life behind a
              frontend.
            </p>
            <p>
              This project was a fun and eye-opening experience that helped me
              better understand how JavaScript drives interactivity and gave me
              confidence to explore UI logic on my own.
            </p>
          </Content>
        </section>
      </div>
    </main>
  );
}

export default Portfolio;

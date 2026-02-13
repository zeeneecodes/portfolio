import Content from "../../ui/Content";
import Tag from "../../ui/Tag";
import { mediaSize } from "../../utils/constants";

const { xs, md } = mediaSize;

function MoneyPouch() {
  return (
    <main className="flex flex-col justify-center items-center my-20">
      <div className="max-w-5xl flex flex-col justify-center px-6 gap-5 items-stretch">
        <section>
          <h1>Money Pouch</h1>
          <div className="flex gap-1 flex-wrap my-6">
            <Tag tag="react" />
            <Tag tag="supabase" />
            <Tag tag="react router" />
            <Tag tag="tanstack query (react query)" />
            <Tag tag="sass" />
          </div>
          <figure className="cs-h-img">
            <source srcSet="/moneypouch-xs.jpg" media={xs} />
            <source srcSet="/moneypouch-md.jpg" media={md} />
            <img src="/moneypouch-lg.jpg" alt="" />
            <p className="italic text-xs">
              Front-end App / Full-stack Prototype / Learning Project
            </p>
          </figure>
        </section>
        <section>
          <Content heading="h2" title="Overview">
            <p>
              Money Pouch is a personal budgeting tool that is inspired by Dave
              Ramsey's cash envelope system, zero based budgeting, and YNAB. It
              allows users to manually allocate their income, create categories,
              and track transactions. It is the accumulation of everything I
              learned from{" "}
              <a
                href="https://www.udemy.com/course/the-ultimate-react-course/"
                target="_blank"
                className="text-link"
              >
                Jonas Schmedtmann's Udemy React Course
              </a>
            </p>
            <p>
              This project came to life as I was figuring out on how I would
              handle my future money to avoid past mistakes. Yes, there are
              existing apps out there that provides a similar service, but I
              wanted something that is very straightforward to use: a budgeting
              webapp that encourages the use of zero-based budgeting strategy
              without the need for a bunch of fancy graphs, confusing
              automations, and countless reports.
            </p>
          </Content>
          <Content heading="h2" title="What I built / learned">
            <ul>
              <li>
                Created reusable React components and custom hooks for budget
                management
              </li>
              <li>
                Managed complex data flow between income, categories, and
                transactions
              </li>
              <li>Set up authentication and RLS in Supabase</li>
              <li>
                Deployed the app using Vercel with environment configuration
              </li>
              <li>
                Strengthened understanding of database relationships and API
                interaction
              </li>
            </ul>
          </Content>
          <Content heading="h2" title="Challenges & Problem-Solving">
            <p>
              This project introduced challenges I hadn't encountered in smaller
              exercises, especially around keeping category balances accurate
              after reallocations, transactions, and manual edits. Since I
              hadn't seen this problem in tutorials before, I had to reason
              through the logic on my own.
            </p>
            <p>
              My first idea was to store the updated balance directly in the
              database after every change. After reconsidering the scope of the
              app, I realized this would add unnecessary complexity for a
              project without reporting or analytics. I decided to handle
              balance calculations on the client side instead, which better fit
              both the project's needs and my current skill level.
            </p>
            <p>
              I also had to think carefully about how balance transfers between
              categories should work. This was my first time designing data
              relationships beyond simple fields, and it pushed me to think in
              terms of references and data flow rather than isolated values.
            </p>
            <p>
              As my first large solo project, this experience also taught me how
              to plan features, prioritize essential functionality, and break a
              complex idea into manageable steps. It was both challenging and
              rewarding, and it taught me a lot about how I should approach
              projects from now on.
            </p>
          </Content>
        </section>
      </div>
    </main>
  );
}

export default MoneyPouch;

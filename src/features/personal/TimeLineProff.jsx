import Content from "../../ui/Content";

function TimeLineProff() {
  return (
    <main className="flex flex-col justify-center items-center mt-20 mb-5">
      <div className="max-w-5xl flex flex-col justify-center px-6 gap-10 items-stretch">
        {/* PROFESSIONAL DEVELOPMENT */}
        <h1>Professional Development / Upskilling Timeline</h1>
        <section>
          <h2>• August 2025 - Present</h2>
          <Content>
            <p>
              Moved from practice and small exercises to bigger and more
              organized bigger projects. These projects focused on applying
              everything that I have learned.
            </p>
          </Content>
          <h2>• January 2025</h2>
          <Content>
            <p>
              Enrolled in{" "}
              <a
                href="https://www.udemy.com/course/the-ultimate-react-course/"
                className="text-link"
              >
                Jonas Schmedtmann's Udemy React Course
              </a>
              . Practiced component design, state management, routing, and
              practical UI patterns.
            </p>
          </Content>
          <h2>• Late 2024</h2>
          <Content>
            <p>
              Moved from fundamentals to advanced topics. Studied modern
              JavaScript (ES6+), async behavior, API usage, and DOM
              manipulation. Built small tools and mini-projects to practice
              problem solving and code organization.
            </p>
          </Content>
          <h2>• Mid-2024</h2>
          <Content>
            <p>
              Shifted from fundamentals to a more structured learning. Studied
              modern JavaScript (ES6+), async behavior, API usage, and DOM
              manipulation. Focused on mini-projects to practice problem solving
              and code organization.
            </p>
          </Content>
          <h2>• December 2023</h2>
          <Content>
            <p className="mt-3 mb-25">
              Started studying the fundamentals of Front End Development by
              further understanding how HTML, CSS, and Javascript works
              together. I spent this early phase doing small practice exercises.
            </p>
          </Content>
        </section>
      </div>
    </main>
  );
}

export default TimeLineProff;

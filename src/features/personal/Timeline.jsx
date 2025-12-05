function Timeline() {
  return (
    <>
      <h2 className="mb-10">Work Timeline</h2>
      <section className="timeline mb-30">
        <ol>
          <li class="entry">
            <h3>2018, May</h3>
            <small className="title">@St. Paul University Manila</small>
            <p>Graduated Bachelor of Science in Computer Science </p>
          </li>
          <li class="entry">
            <h3>2019, August</h3>
            <small className="title">@Adec Innovations</small>
            <p>Worked as a Business Process Associate</p>
          </li>
          <li class="entry">
            <h3>2022, November</h3>
            <small className="title">@Collabera</small>
            <p>
              First IT job as a junior Database Administrator, assigned to work
              at Security Bank
            </p>
          </li>
        </ol>
      </section>

      {/* PROFESSIONAL DEVELOPMENT */}
      <h2 className="mb-10">Profesional Development Timeline</h2>
      <section className="timeline">
        <ol>
          <li class="entry">
            <h3>2023, December</h3>
            <small className="title">@Professional Development</small>
            <p>
              Started studying the fundamentals of Front End Development by
              further understanding how HTML, CSS, and Javascript works
              together.
            </p>
            <p>Spent this early phase doing small practice exercises.</p>
          </li>
          <li class="entry">
            <h3>2024, Mid-Year</h3>
            <small className="title">@Professional Development</small>
            <p>
              Shifted from fundamentals to a more structured learning. Studied
              modern JavaScript (ES6+), async behavior, API usage, and DOM
              manipulation. Focused on mini-projects to practice problem solving
              and code organization.
            </p>
          </li>
          <li class="entry">
            <h3>2024, Late</h3>
            <small className="title">@Professional Development</small>
            <p>
              Moved from fundamentals to advanced topics. Studied modern
              JavaScript (ES6+), async behavior, API usage, and DOM
              manipulation. Built small tools and mini-projects to practice
              problem solving and code organization.
            </p>
          </li>
          <li class="entry">
            <h3>2025, January</h3>
            <small className="title">@Professional Development</small>
            <p>
              Enrolled in a structured React course (Udemy). Practiced component
              design, state management, routing, and practical UI patterns.
            </p>
          </li>
          <li class="entry after:bg-primary">
            <h3>2025, August - Present</h3>
            <small className="title">@Professional Development</small>
            <p>
              Moved from practice and small exercises to bigger and more
              organized bigger projects. These projects focused on applying
              everything that I have learned.
            </p>
          </li>
        </ol>
      </section>
    </>
  );
}

export default Timeline;

// inspired by https://codepen.io/preetkakkar/pen/xbZoVXO

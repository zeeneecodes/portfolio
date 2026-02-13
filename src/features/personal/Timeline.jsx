import { Link } from "react-router-dom";

function Timeline() {
  return (
    <div className="flex flex-col w-70">
      <Link className="text-link mb-7" to="/overview/timeline/upskill">
        Click here to view my upskill timeline!
      </Link>
      <div>
        <p className="mb-5 font-serif text-primary text-[2rem]">
          Work Timeline
        </p>
        <section className="timeline">
          <ol>
            <li className="entry">
              <span className="tld">2018, May</span>
              <small className="title">@St. Paul University Manila</small>
              <p className="mt-3">
                Graduated Bachelor of Science in Computer Science
              </p>
            </li>
            <li className="entry">
              <span className="tld">2019, August</span>
              <small className="title">@Adec Innovations</small>
              <p className="mt-3">Worked as a Business Process Associate</p>
            </li>
            <li className="entry">
              <span className="tld">2022, November</span>
              <small className="title">@Collabera</small>
              <p className="mt-3">
                First IT job as a junior Database Administrator, assigned to
                work at Security Bank
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Timeline;

// inspired by https://codepen.io/preetkakkar/pen/xbZoVXO

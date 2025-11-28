import Tag from "./Tag";

function ProjectPreview({
  title,
  img,
  tags,
  description,
  liveLink,
  studyLink,
}) {
  return (
    <div className="project">
      <img src={img} alt="" />
      <div>
        <h2>{title}</h2>
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
        <p className="mt-5">{description}</p>

        {/* BUTTONS */}
        {liveLink || studyLink ? (
          <div className="flex mt-6 justify-between">
            {liveLink && (
              <button className="btn-primary">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </button>
            )}
            {studyLink && (
              <button className="btn-neutral">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProjectPreview;

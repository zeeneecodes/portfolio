import Tag from "./Tag";

function Card({ tags, title, description, liveLink, studyLink, image, alt }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <div className="flex w-[254px] gap-1 flex-wrap">
        {tags.map((tag, i) => (
          <Tag key={i} tag={tag} />
        ))}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

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
  );
}

export default Card;

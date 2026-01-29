import Tag from "./Tag";

function Card({ tags, title, description, liveLink, studyLink, image, alt }) {
  return (
    <div className="card">
      <img loading="lazy" src={image} alt={alt} />
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
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary">Live Demo</button>
            </a>
          )}
          {studyLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-neutral">Read More</button>
            </a>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Card;

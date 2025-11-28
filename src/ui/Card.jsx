import Tag from "./Tag";

function Card({ tags, title, description, liveLink, studyLink, image, alt }) {
  return (
    <div className="card">
      <img src={image} alt={alt} />
      <div className="flex w-[254px] gap-1 flex-wrap">
        {tags.map((tag) => (
          <Tag tag={tag} />
        ))}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>

      {liveLink || studyLink ? (
        <div className="flex mt-6 justify-around">
          {liveLink && <button className="btn-primary">Live Demo</button>}
          {studyLink && <button className="btn-primary">Read More</button>}
        </div>
      ) : null}
    </div>
  );
}

export default Card;

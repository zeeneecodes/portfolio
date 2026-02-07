import Tag from "./Tag";

function ProjectPreview({
  title,
  img,
  tags,
  description,
  liveLink,
  studyLink,
  alt,
}) {
  return (
    <article className="project">
      <picture>
        {img.map((img, i) => {
          return <source key={i} srcSet={img.pic} media={img.media} />;
        })}
        <img
          className="w-full h-auto"
          loading="lazy"
          src={img[1].pic}
          alt={alt}
        />
      </picture>
      <div className="flex flex-col flex-1 h-80">
        <h2 className="mt-0">{title}</h2>
        <div className="flex gap-1 flex-wrap mt-3">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
        <p className="mt-5 md:w-100">{description}</p>

        {/* BUTTONS */}
        {liveLink || studyLink ? (
          <div className="flex items-end mt-5 lg:mt-auto gap-2">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <button className="btn-primary">Live Demo</button>
              </a>
            )}
            {studyLink && (
              <a href={studyLink}>
                <button className="btn-neutral">Read More</button>
              </a>
            )}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectPreview;

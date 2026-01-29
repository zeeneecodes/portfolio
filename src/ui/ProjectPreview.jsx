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
      {/* 
      <picture>
	<source srcset="picture-300px.png" media="(max-width:500px)">
	<source srcset="picture-400px.png" media="(max-width:650px)">
	<source srcset="picture-500px.png" media="(max-width:800px)">
	
	<!-- 
	  - the image that loads if browser does not support picture element 
	  - the catch-all / default image
	-->
	<img src="picture.png" alt="A Picture" />
</picture>
      */}
      {/* <img src={img} alt="" /> */}
      <picture>
        {img.map((img, i) => {
          return <source key={i} srcSet={img.pic} media={img.media} />;
        })}
        <img loading="lazy" src={img[1].pic} alt={alt} />
      </picture>
      <div className="max-w-[450px]">
        <h2 className="mt-0">{title}</h2>
        <div className="flex gap-1 flex-wrap mt-3">
          {tags.map((tag, i) => (
            <Tag key={i} tag={tag} />
          ))}
        </div>
        <p className="mt-5">{description}</p>

        {/* BUTTONS */}
        {liveLink || studyLink ? (
          <div className="flex mt-6 gap-2">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <button className="btn-primary">Live Demo</button>
              </a>
            )}
            {studyLink && (
              <a href={studyLink} target="_blank" rel="noopener noreferrer">
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

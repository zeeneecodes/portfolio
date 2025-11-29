function Content({ heading, title, children }) {
  return (
    <article className="content">
      {heading === "h1" && <h1>{title}</h1>}
      {heading === "h2" && <h2>{title}</h2>}
      {heading === "h3" && <h3>{title}</h3>}
      {children}
    </article>
  );
}

export default Content;

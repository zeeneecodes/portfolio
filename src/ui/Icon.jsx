function Icon({ type, icon, title, link }) {
  if (type === "regular")
    return (
      <a
        className="icon-regular"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon}
      </a>
    );
  if (type === "tech")
    return (
      <div className="icon-tech">
        {icon}
        <span>{title}</span>
      </div>
    );
}

export default Icon;

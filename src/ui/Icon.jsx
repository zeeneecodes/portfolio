function Icon({ type, icon, title }) {
  if (type === "regular")
    return (
      <div className="icon-regular" title={title}>
        {icon}
      </div>
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

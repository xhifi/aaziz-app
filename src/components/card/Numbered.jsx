const Numbered = ({ number, heading, description, ...rest }) => {
  return (
    <div className="aa-numbered-card" {...rest}>
      <div className="aa-dynamic">
        <span>{number}</span>
        {heading && <p>{heading}</p>}
        {description && description}
      </div>
    </div>
  );
};
export default Numbered;

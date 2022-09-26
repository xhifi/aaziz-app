const Numbered = ({ children, number, heading, description, ...rest }) => {
  return (
    <div className="col" {...rest}>
      <div className="border-1 card h-100 p-3">
        <span className="numbered-index">{number}</span>
        {heading && <p className="h4">{heading}</p>}
        {children}
      </div>
    </div>
  );
};
export default Numbered;

const Numbered = ({ children, number, ...rest }) => {
  return (
    <div className="col" {...rest}>
      <div className="border-1 card h-100 p-3">
        <span className="numbered-index">{number}</span>
        {children}
      </div>
    </div>
  );
};
export default Numbered;

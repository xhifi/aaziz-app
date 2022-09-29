const Divider = ({ heading }) => {
  if (!heading) return <div className="aa-divider-nis"></div>;

  return <div className="aa-divider">{heading}</div>;
};
export default Divider;

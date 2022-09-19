const Icon = (props) => {
  const { of, className, ...rest } = props;
  return <i className={`bi bi-${of}`} {...rest}></i>;
};

export default Icon;

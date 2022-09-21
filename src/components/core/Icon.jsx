const Icon = (props) => {
  const { of, className, ...rest } = props;
  return <i {...rest} className={`bi bi-${of} ${className}`}></i>;
};

export default Icon;

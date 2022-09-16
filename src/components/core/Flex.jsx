function Flex({ children, cols, center, ...rest }) {
  const num = cols;
  return (
    <div {...rest} className={`d-flex ${(center && "align-items-center justify-content-center") || ""}`}>
      {cols <= 9 && cols >= 1 ? <div className={`row row-cols-${cols || 1}`}>{children}</div> : children}
    </div>
  );
}

export default Flex;

function Flex({ children, cols, center, ...rest }) {
  return (
    <div {...rest} className={checkCenter(center)}>
      {cols <= 9 && cols >= 1 ? <div className={`row row-cols-${cols || 1}`}>{children}</div> : children}
    </div>
  );
}

const checkCenter = (input) => {
  if (input === "items") return "d-flex align-items-center";
  if (input === "content") return "d-flex justify-content-center";
  if (input || input === "") return "d-flex align-items-center justify-content-center";
  if (!input) return "";
};
export default Flex;

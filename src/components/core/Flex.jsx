const checkCenter = (input) => {
  if (input === "items") return "d-flex align-items-center";
  if (input === "content") return "d-flex justify-content-center";
  if (input || input === "") return "d-flex align-items-center justify-content-center";
  if (!input) return "";
};

const bpEval = (input = {}) => {
  return Object.entries(input)
    .map((v) => `row-cols-${v[0]}-${v[1]}`)
    .join(" ");
};

function Flex({ children, cols, center, breakPoints, ...rest }) {
  console.log(breakPoints);
  return (
    <div {...rest} className={`${checkCenter(center)}`}>
      {cols <= 9 && cols >= 1 ? <div className={`row row-cols-${cols || 1} ${bpEval(breakPoints)}`}>{children}</div> : children}
    </div>
  );
}

export default Flex;

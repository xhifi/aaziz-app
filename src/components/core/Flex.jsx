const checkCenter = (input) => {
  if (input) {
    if (input === "items") return "d-flex align-items-center";
    if (input === "content") return "d-flex justify-content-center";
    if (input === "") return "d-flex align-items-center justify-content-center";
    return "d-flex align-items-center justify-content-center";
  }
  if (!input) return "";
};

const bpEval = (input = {}) => {
  return Object.entries(input)
    .map((v) => `row-cols-${v[0]}-${v[1]}`)
    .join(" ");
};

const checkGutter = (input) => {
  let scoped = [0, 1, 2, 3, 4, 5];
  let res = "";
  let scope = scoped.indexOf(input);
  if (typeof input === "number" || typeof input === "string") {
    typeof input === "string" && parseInt(input);
    if (scope === -1) scope = null;
    if (scope || scope === 0) return ` g-${scoped[scope]}`;
  }
  if (typeof input === "object") {
    if (input.x && input.y) return res.concat(` gx-${input.x} gy-${input.y}`);
    if (input.x) return res.concat(` gx-${input.x}`);
    if (input.y) return res.concat(` gy-${input.y}`);
  }
  return res;
};

function Flex({ children, cols, center, breakPoints, gutter, ...rest }) {
  console.log(gutter);

  return (
    <div {...rest} className={`aa-flex ${checkCenter(center)}`}>
      {cols <= 9 && cols >= 1 ? <div className={`row row-cols-${cols || 1} ${bpEval(breakPoints)} ${checkGutter(gutter).toString()}`}>{children}</div> : children}
    </div>
  );
}

export default Flex;

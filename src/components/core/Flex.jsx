const checkCenter = (input) => {
  if (input) {
    if (input === "items") return "d-flex align-items-center";
    if (input === "content") return "d-flex justify-content-center";
    if (input === "") return "d-flex align-items-center justify-content-center";
    return "d-flex align-items-center justify-content-center";
  }
  if (!input) return "";
};

const checkJustification = (input) => {
  if (input) {
    if (input === "start") return `justify-content-start`;
    if (input === "center") return `justify-content-center`;
    if (input === "end") return `justify-content-end`;
    if (input === "between") return `justify-content-between`;
    return ``;
  }
  return ``;
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

function Flex({ children, cols, center, breakPoints, gutter, rowCenter, justify, ...rest }) {
  return (
    <div {...rest} className={`aa-flex ${checkCenter(center)}`}>
      {cols <= 9 && cols >= 1 ? (
        <div className={`row row-cols-${cols || 1} ${bpEval(breakPoints)} ${checkGutter(gutter).toString()} ${rowCenter && checkCenter(rowCenter)} ${checkJustification(justify)}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default Flex;

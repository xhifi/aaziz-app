import coreFuncs from "lib/core";

export default function Container({ children, fluid, ...rest }) {
  return (
    <div {...rest} className={`aa-container ${coreFuncs.checkFluid(fluid)} ${rest.className}`}>
      {children}
    </div>
  );
}

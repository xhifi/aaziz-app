import Stacker from "./Stacker";
import Numbered from "./Numbered";

export default function Card({ type, options, children }) {
  if (type === "stacker") {
    return <Stacker heading={options.heading} description={options?.description} icon={options?.icon} button={options?.button} />;
  }
  if (type === "numbered") {
    return <Numbered>{children}</Numbered>;
  }
  return;
}

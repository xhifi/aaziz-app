import Stacker from "./Stacker";

export default function Card({ type, options }) {
  if (type === "stacker") {
    return <Stacker heading={options.heading} description={options?.description} icon={options?.icon} button={options?.button} />;
  }
  return;
}

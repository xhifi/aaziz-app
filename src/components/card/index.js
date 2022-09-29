import Stacker from "./Stacker";
import Numbered from "./Numbered";
import Team from "./Team";

export default function Card({ type, options, children }) {
  if (type === "stacker") {
    return <Stacker heading={options.heading} description={options?.description} icon={options?.icon} button={options?.button} />;
  }
  if (type === "numbered") {
    return (
      <Numbered heading={options.heading} description={options.description} number={options.number}>
        {children}
      </Numbered>
    );
  }
  if (type === "team") {
    return <Team title={options?.title} designation={options?.designation} image={options?.image} social={options?.social} />;
  }
  return;
}

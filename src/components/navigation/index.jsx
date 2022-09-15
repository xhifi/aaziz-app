import ApexNavigation from "./ApexNavigation";
import InfoNavigation from "./InfoNavigation";
import { Logo } from "components";

export default function Navigation() {
  return (
    <>
      <ApexNavigation />
      <h2>This is the Navigation Index</h2>
      <Logo />
      <InfoNavigation />
    </>
  );
}

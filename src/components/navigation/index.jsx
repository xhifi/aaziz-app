import { createContext } from "react";
import ApexNavigation from "./ApexNavigation";
import InfoNavigation from "./InfoNavigation";

export default function Navigation() {
  const navContext = createContext(false);
  const isOpen = true;
  return (
    <navContext.Provider value={isOpen}>
      <InfoNavigation />
      <ApexNavigation />
    </navContext.Provider>
  );
}

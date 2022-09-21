import { Navigation, Footer } from "components";

export default function Generic({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

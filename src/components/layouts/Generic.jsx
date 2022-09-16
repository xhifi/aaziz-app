import { Navigation, Footer, Container } from "components";

export default function Generic({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

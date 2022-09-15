import { Navigation, Footer, Container } from "components";

export default function Generic({ children }) {
  return (
    <Container fluid className = "bg-red text-black">
      <Navigation />
      {children}
      <Footer />
    </Container>
  );
}

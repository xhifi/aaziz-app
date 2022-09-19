import FooterList from "./FooterList";
// import LogoColumn from "./LogoColumn";
import { Flex, Container } from "components";

const details = [
  { name: "Home", ref: "/" },
  { name: "About", ref: "/about" },
];

export default function Footer() {
  return (
    <Container className="px-4" fluid>
      <Flex cols={3}>
        {/* <LogoColumn /> */}
        <FooterList details={details} />
        <FooterList details={details} />
        <FooterList details={details} />
      </Flex>
    </Container>
  );
}

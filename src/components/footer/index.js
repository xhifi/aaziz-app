import FooterList from "./FooterList";
import LogoColumn from "./LogoColumn";
import { Flex, Container } from "components";

export default function Footer() {
  const det = {
    footer: [
      [
        { name: "Home", ref: "/" },
        { name: "About", ref: "/about" },
        { name: "Services", ref: "/services" },
      ],
      [
        { name: "Health", ref: "/health" },
        { name: "Security", ref: "/security" },
        { name: "Concerns", ref: "/concerns" },
      ],
      [
        { name: "Facebook", ref: "https://www.facebook.com" },
        { name: "Google", ref: "https://www.google.com" },
        { name: "Twitter", ref: "https://www.twitter.com" },
      ],
    ],
  };

  return (
    <Container className="px-4 py-4 mt-3 border-top" fluid>
      <Flex cols={4}>
        <LogoColumn />
        {/* {details.map((v, i) => (
          <FooterList key={i} details={v.list1} />
        ))} */}
        {det.footer.map((val, i) => {
          return <FooterList key={i} details={val.map((val) => val)} />;
        })}
      </Flex>
    </Container>
  );
}

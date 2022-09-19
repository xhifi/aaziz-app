import { Container, Flex, Link } from "components";

export default function InfoNavigation() {
  return (
    <Container fluid className="px-4">
      <Flex className="" center="items">
        <ul className="list-unstyled mb-0">
          <li>
            <Link to="/" icon="whatsapp">
              Whatsapp
            </Link>
            <Link to="/" icon="phone">
              Phone
            </Link>
            <Link to="/" icon="mailbox">
              Address
            </Link>
          </li>
        </ul>
        <ul className="ms-auto list-unstyled mb-0">
          <li>
            <Link to="/" icon="facebook">
              Facebook
            </Link>
            <Link to="/" icon="twitter">
              Twitter
            </Link>
            <Link to="/" icon="youtube">
              Youtube
            </Link>
          </li>
        </ul>
      </Flex>
    </Container>
  );
}

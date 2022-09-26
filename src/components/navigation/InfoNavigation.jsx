import { Container, Flex, Link } from "components";

export default function InfoNavigation() {
  return (
    <Container fluid className="aa-info-nav-container px-4">
      <Flex center="items">
        <ul className="list-unstyled mb-0">
          <li>
            <Link to="/" icon="whatsapp">
              Whatsapp
            </Link>
          </li>
          <li>
            <Link to="/" icon="phone">
              Phone
            </Link>
          </li>
          <li>
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
          </li>
          <li>
            <Link to="/" icon="twitter">
              Twitter
            </Link>
          </li>
          <li>
            <Link to="/" icon="youtube">
              Youtube
            </Link>
          </li>
        </ul>
      </Flex>
    </Container>
  );
}

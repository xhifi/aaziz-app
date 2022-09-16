import { Container, Flex, Image, Link, Logo } from "components";

const mockData = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Contact", link: "/contact" },
];

const ListNavLinks = ({ list }) => {
  return (
    <ul className="mb-0 list-unstyled d-flex align-items-center">
      {list.map((v, i) => {
        return (
          <li key={i} className={i !== mockData.length - 1 ? "me-2" : ""}>
            <Link to={v.link} className={`nav-link ${window.location.pathname === v.link ? "active" : ""}`}>
              {v.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default function ApexNavigation() {
  return (
    <Container fluid className="px-4 my-0 border-bottom py-2">
      <Flex className="align-content-center">
        <Logo />
        <nav className="nav d-flex align-items-center ms-auto">
          <ListNavLinks list={mockData} />
        </nav>
      </Flex>
    </Container>
  );
}

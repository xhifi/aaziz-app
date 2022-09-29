import { Container, Flex, Link, Logo } from "components";

import ListComponent from "./ListComponent";
import dataBase from "data/dataBase.json";

export default function ApexNavigation() {
  return (
    <Container fluid className="apex-navigation-container sticky-top bg-light">
      <Flex center="items">
        <Logo className="aaziz-brand" />
        <nav className="apex-navigation-nav">
          <ListComponent list={dataBase.navigationData} />
        </nav>
        <div>
          <Link to="/signin" className="me-3 fw-bold text-decoration-none">
            Sign In
          </Link>
          <Link button className="btn btn-primary btn-lg">
            Sign Up
          </Link>
        </div>
      </Flex>
    </Container>
  );
}

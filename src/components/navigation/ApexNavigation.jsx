import { Container, Flex, Logo } from "components";
// import useFetch from "lib/fetch";

import ListComponent from "./ListComponent";
import dataBase from "data/dataBase.json";

export default function ApexNavigation() {
  // const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <Container fluid className="px-4 my-0 border-bottom py-2">
      <Flex center="items">
        <Logo />
        <nav className="nav d-flex align-items-center ms-auto">
          <ListComponent list={dataBase.navigationData} />
        </nav>
      </Flex>
    </Container>
  );
}

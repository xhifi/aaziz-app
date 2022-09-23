import { GenericLayout, Card, Flex, Link } from "components";

export default function About() {
  return (
    <GenericLayout>
      <h1>This is the About page</h1>
      <Flex center cols={4} gutter={0} className="g-0">
        {[...new Array(10)].map((v, i) => {
          return (
            <Card type="numbered" key={i} number={1} className="rounded-0">
              <h1>This is the end</h1>
              <p>
                Fall over and turn again!
                <br />
                Move my heart and burn again!
              </p>
              <Link to="/about" className="btn btn-sm btn-success">
                Hola
              </Link>
            </Card>
          );
        })}
      </Flex>
    </GenericLayout>
  );
}

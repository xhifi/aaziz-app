import { Container, GenericLayout } from "components";
import { Card, Flex } from "components";

export default function Home() {
  const breakPoints = { sm: 1, md: 2, lg: 4, xlg: 5 };
  return (
    <GenericLayout>
      <Container fluid className="px-4 py-0">
        <Flex center="" cols={1} breakPoints={breakPoints} className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          <Card
            className="p-3"
            type="stacker"
            options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }}
          />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
        </Flex>
      </Container>
    </GenericLayout>
  );
}

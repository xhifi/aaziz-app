import { Container, GenericLayout } from "components";
import { Card, Flex } from "components";

export default function Home() {
  const breakPoints = { sm: 1, md: 2, lg: 4, xlg: 5 };
  return (
    <GenericLayout>
      <Container fluid className="px-4 py-0 my-5">
        <Flex center cols={1} breakPoints={breakPoints} className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          <Card
            className="p-3"
            type="stacker"
            options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }}
          />
          <Card
            type="stacker"
            options={{
              heading: "Hello Hello Dirty Fellow",
              description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
              icon: "google",
              button: { name: "Read More", ref: "/contact" },
            }}
          />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google" }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
          <Card type="stacker" options={{ heading: "Hello Hello Dirty Fellow", description: "Lorem 30", icon: "google", button: { name: "Read More", ref: "/contact" } }} />
        </Flex>
      </Container>
    </GenericLayout>
  );
}

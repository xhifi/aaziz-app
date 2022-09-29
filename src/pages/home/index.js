import { Container, GenericLayout, Link } from "components";
import { Card, Flex, Presentation } from "components";

const numberedMock = [
  {
    heading: "Credible Team Network",
    description:
      "Our team is comprised of qualified accountants, who have valuable experience in advising, monitoring, and coordinating with clients to make sure that all necessary regulatory requirements are fulfilled.",
    button: {
      address: "/",
      text: "Learn More",
    },
  },
  {
    heading: "Modern Infrastructure",
    description:
      "We are a friendly & approachable, independent registered firm of Professional accountants, operating from welcoming offices suited with most cutting edge and digital infrastructure we can find in this line of work.",
  },
  {
    heading: "Diverse Abilities",
    description:
      "We deal with every aspect of your tax, ranging from the preparation and submission of your self-assessment tax returns to pro-actively managing your tax affairs for partnerships, Limited companies and contractorship.",
  },
  {
    heading: "Professional Work Ethics",
    description:
      "Aziz and Co has the ability to offer comprehensive tailor-made solutions to its diversified clientele with utmost professionalism. We don't consider any job small and give our whole to any and every client.",
  },
  {
    heading: "Always Meeting the Deadlines",
    description: "Our highly experienced and skilled management team of SFA is capable of performing complex and daunting tasks seamlessly while meeting tight deadlines.",
  },
  {
    heading: "Long Term Relationships",
    description:
      "Our team is focused on building long-term relationships and craft practical, and affordable solutions for the best interest of our respectable clients. You won't believe it but we hold 5.0 Star rating on our Google Profile.",
  },
  {
    heading: "Long Term Relationships",
    description:
      "Our team is focused on building long-term relationships and craft practical, and affordable solutions for the best interest of our respectable clients. You won't believe it but we hold 5.0 Star rating on our Google Profile.",
  },
  {
    heading: "Long Term Relationships",
    description:
      "Our team is focused on building long-term relationships and craft practical, and affordable solutions for the best interest of our respectable clients. You won't believe it but we hold 5.0 Star rating on our Google Profile.",
  },
];

export default function Home() {
  const breakPoints = { sm: 1, md: 2, lg: 4, xlg: 5 };
  return (
    <GenericLayout>
      <Container fluid className="px-5 py-5">
        <Flex center cols={1} breakPoints={breakPoints} className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {numberedMock.map((v, i) => {
            return (
              <Card
                className="p-3"
                key={i}
                type="stacker"
                options={{ heading: v.heading, description: v.description, icon: "google", button: { name: "Read More", ref: "/contact" } }}
              />
            );
          })}
        </Flex>
      </Container>
      <Container fluid className="px-5 py-5">
        <Flex gutter={0} center="content" cols={1} breakPoints={breakPoints} className="row-cols-1 row-cols-md-2 row-cols-lg-4">
          {numberedMock.map((v, i) => {
            return <Card key={i} type="numbered" options={{ heading: v.heading, description: v.description, number: i + 1 }} />;
          })}
        </Flex>
      </Container>
      <Container fluid className="px-5 py-5">
        {numberedMock.map((v, i) => {
          return (
            <Flex cols={2} key={i} gutter={0} rowCenter="items" justify="between">
              <Presentation direction={i % 2 !== 0 ? "left" : "right"} image="https://bityl.co/El5u" className="mb-3">
                <h3>{v.heading}</h3>
                <p className="">{v.description}</p>
                {v.button && (
                  <Link key={i + 100} to={v.button.address} className="btn btn-sm btn-primary">
                    {v.button.text}
                  </Link>
                )}
              </Presentation>
            </Flex>
          );
        })}
      </Container>
      <Container fluid className="px-5 py-5">
        <Flex cols="4" gutter={3} rowCenter="items">
          <Card type="team" options={{ title: "Ajmal Baig", designation: "Director", social: { facebook: "ajmal", twitter: "ajmal", linkedin: "ajmal" } }} />
          <Card type="team" options={{ title: "Ajmal Baig", designation: "Director", social: { facebook: "ajmal", twitter: "ajmal", linkedin: "ajmal" } }} />
          <Card type="team" options={{ title: "Ajmal Baig", designation: "Director", social: { facebook: "ajmal", twitter: "ajmal", linkedin: "ajmal" } }} />
          <Card type="team" options={{ title: "Ajmal Baig", designation: "Director", social: { facebook: "ajmal", twitter: "ajmal", linkedin: "ajmal", instagram: "ajmal" } }} />
        </Flex>
      </Container>
    </GenericLayout>
  );
}

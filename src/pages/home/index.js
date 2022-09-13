import { GenericLayout, Link } from "components";

const sayHello = () => {
  return `Hey there!`;
};

export default function Home() {
  return (
    <GenericLayout>
      <Link to="/about" text="About Page" className="btn btn-sm btn-primary" />
      <Link to="https://www.google.com" text="Google" className="btn btn-lg btn-success" />
      <Link text="Greeting on Click" className="btn btn-sm btn-info" button onClick={sayHello} />
    </GenericLayout>
  );
}

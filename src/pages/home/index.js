import { GenericLayout, Link } from "components";

export default function Home() {
  return (
    <GenericLayout>
      <Link to="/about" text="About Page" icon="mailbox" className="btn btn-sm btn-primary">
        About Button
      </Link>
      <Link to="https://www.google.com" text="Google" icon="home" className="btn btn-lg btn-success">
        Google
      </Link>
      <Link text="Greeting on Click" className="btn btn-sm btn-info" button>
        Greetings
      </Link>
    </GenericLayout>
  );
}

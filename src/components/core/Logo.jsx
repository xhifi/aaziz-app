import { Image, Link } from "components";

export default function Logo({ width, height }) {
  return (
    <div className="brand">
      <Link to="/" className="navbar-brand">
        <Image src="https://www.aazizandco.co.uk/assets/logo/aaziz.svg" width={width || "250px"} height={height} className="img-fluid" />
      </Link>
    </div>
  );
}

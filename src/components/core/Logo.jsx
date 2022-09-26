import { Image, Link } from "components";

export default function Logo({ width, height, className }) {
  return (
    <Link to="/" className={`navbar-brand ${className}`}>
      <Image src="https://www.aazizandco.co.uk/assets/logo/aaziz.svg" width={width || "250px"} height={height} className="img-fluid" />
    </Link>
  );
}

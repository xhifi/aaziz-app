import { Link } from "components";

export default function FooterList({ details, ...rest }) {
  if (details) {
    return (
      <ul className="mb-0 list-unstyled decoration-none" {...rest}>
        {details.map((detail, i) => {
          return (
            <li key={i}>
              <Link to={detail.ref}>{detail.name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

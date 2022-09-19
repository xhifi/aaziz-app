import { Link } from "components";

export default function ListNavLinks({ list }) {
  return (
    <ul className="mb-0 list-unstyled d-flex align-items-center">
      {list.map((v, i) => {
        return (
          <li key={i} className={i !== list.length - 1 ? "me-2" : ""}>
            <Link to={v.link} className={`nav-link ${window.location.pathname === v.link ? "active" : ""}`}>
              {v.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

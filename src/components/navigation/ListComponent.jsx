import { Link } from "components";

export default function ListNavLinks({ list, itemClassName, linkClassName, ...rest }) {
  return (
    <ul className={`mb-0 list-unstyled d-flex align-items-center`} {...rest}>
      {list.map((v, i) => {
        return (
          <li key={i} className={`${window.location.pathname === v.link ? "active" : ""} ${i !== list.length - 1 ? "me-2" : ""} ${itemClassName | ""} `}>
            <Link to={v.link} className={`nav-link ${linkClassName}`}>
              {v.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

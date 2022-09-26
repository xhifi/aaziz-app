import { Icon, Link } from "components";

export default function Stacker({ heading, description, icon, button, ...rest }) {
  return (
    <div className="col" {...rest}>
      <div className="border-0 card h-100 p-3">
        <Icon of={icon} className="h1" />
        <h4>{heading}</h4>
        <p className={button ? "" : "mb-0"}>{description}</p>
        {button && (
          <Link to={button.ref} className="btn btn-sm btn-outline-primary card-btn">
            {button.name}
          </Link>
        )}
      </div>
    </div>
  );
}

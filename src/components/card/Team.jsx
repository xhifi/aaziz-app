import { Link, Image } from "components";

export default function Team({ title, designation, image, social, ...rest }) {
  return (
    <div className="aa-team col" {...rest}>
      <div className="shadow border-primary card h-100 p-3 text-center d-flex align-items-center p-4">
        <Image src="https://bityl.co/EmVE" width="70%" className="img-fluid rounded-circle mb-4 shadow-sm" />
        <h4>{title}</h4>
        <p className="">{designation}</p>
        {social && (
          <ul className="list-unstyled mb-0 d-flex align-items-center">
            {Object.entries(social).map((v, i) => {
              return (
                <li key={i}>
                  <Link to={`https://www.${v[0]}.com/${v[1]}`} icon={v[0]} iconClassName={i === Object.entries(social).length - 1 ? "me-0" : ""}></Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

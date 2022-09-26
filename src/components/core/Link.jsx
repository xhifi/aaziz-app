import { Link as RLink } from "react-router-dom";
import coreFuncs from "lib/core";
import Icon from "./Icon";

export default function Link({ children, to, className, button, onClick, icon, ...rest }) {
  if (button) {
    if (onClick) {
      return (
        <button onClick={onClick} {...rest} className={`aa-btn ${className}`}>
          {icon && <Icon of={icon} />}
          {children}
        </button>
      );
    }
    return (
      <button {...rest} className={`aa-btn ${className}`}>
        {icon && <Icon of={icon} />}
        {children}
      </button>
    );
  }
  if (!coreFuncs.checkLink(to))
    return (
      <RLink to={to} {...rest} className={`aa-link ${className}`}>
        {icon && <Icon of={icon} />}
        {children}
      </RLink>
    );

  return (
    <a href={to} target="_blank" rel="noreferrer" {...rest} className={`aa-link ${className}`}>
      {icon && <Icon of={icon} />}
      {children}
    </a>
  );
}

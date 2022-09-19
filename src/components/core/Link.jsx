import { Link as RLink } from "react-router-dom";
import coreFuncs from "lib/core";
import Icon from "./Icon";

export default function Link({ to, children, className, button, onClick, icon }) {
  if (button) {
    if (onClick) {
      return (
        <button className={className} onClick={onClick}>
          {icon && <Icon of={icon} />}
          {children}
        </button>
      );
    }
    return (
      <button className={className}>
        {icon && <Icon of={icon} />}
        {children}
      </button>
    );
  }
  if (!coreFuncs.checkLink(to))
    return (
      <RLink to={to} className={className}>
        {icon && <Icon of={icon} />}
        {children}
      </RLink>
    );

  return (
    <a href={to} target="_blank" rel="noreferrer" className={className}>
      {icon && <Icon of={icon} />}
      {children}
    </a>
  );
}

import { Link as RLink } from "react-router-dom";
import coreFuncs from "lib/core";

export default function Link({to, children, className, button, onClick, }) {
  if (button) {
    if (onClick) {
      return (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      );
    }
    return <button className={className}>{children}</button>;
  }
  if (!coreFuncs.checkLink(to))
    return (
      <RLink to={to} className={className}>
        {children}
      </RLink>
    );

  return (
    <a href={to} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

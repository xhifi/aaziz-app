import { Link as RLink } from "react-router-dom";

const checkLink = (url) => (url.indexOf("http") === 0 ? true : false);
// Fat Arrow Functions which means short hand for js functions
// Ternary Statements or short hand for If else Shorthand in Js

export default function Link(props) {
  const { to, text, className, button, onClick } = props;
  if (button) {
    if (onClick) {
      return (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      );
    }
    return <button className={className}>{text}</button>;
  }
  if (!checkLink(to))
    return (
      <RLink to={to} className={className}>
        {text}
      </RLink>
    );

  return (
    <a href={to} target="_blank" rel="noreferrer" className={className}>
      {text}
    </a>
  );
}

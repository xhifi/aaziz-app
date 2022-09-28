export default function Image(props) {
  const { src, alt, ...rest } = props;

  return <img src={src} alt={alt} className={`aa-img ${rest.className}`} {...rest} />;
}

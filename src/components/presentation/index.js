import { Image } from "components";

export default function Presentation({ children, direction, className, image, ...rest }) {
  if (direction === "left") {
    return (
      <>
        <div className="col order-2">{children}</div>
        <div className={`col-5 px-0 overflow-hidden order-1 rounded-3`}>
          <Image src={image} className="img-fluid" alt="Hero" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="col">{children}</div>
      <div className={`col-5 px-0 overflow-hidden order-1 rounded-3`}>
        <Image src={image} className="img-fluid" alt="Hero" />
      </div>
    </>
  );
}

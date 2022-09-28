import { Image, Flex } from "components";

export default function Presentation({ children, direction, className, image, ...rest }) {
  if (direction === "left") {
    return (
      <Flex cols={2} gutter={5} rowCenter="items" justify="between" className={className}>
        <div className="col order-2">
          <p>{children}</p>
        </div>
        <div className={`col-5 px-0 overflow-hidden order-1 rounded-3`}>
          <Image src={image} className="img-fluid" alt="Hero" />
        </div>
      </Flex>
    );
  }

  return (
    <Flex cols={2} gutter={5} rowCenter="items" justify="between" className={className}>
      <div className="col">
        <p>{children}</p>
      </div>
      <div className={`col-5 px-0 overflow-hidden order-1 rounded-3`}>
        <Image src={image} className="img-fluid" alt="Hero" />
      </div>
    </Flex>
  );
}

import { SVGProps } from "react";

type direction = "up" | "down" | "left" | "right";

type ArrowTransform = {
  [key in direction]: string;
};

const arrowTransform: ArrowTransform = {
  up: "rotate(45deg)",
  down: "rotate(225deg)",
  right: "rotate(135deg)",
  left: "rotate(-45deg)",
};

const IconArrow: React.FC<
  SVGProps<SVGSVGElement> & { direction?: direction }
> = ({ direction, style, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: arrowTransform[direction || "up"], ...style }}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        markerWidth={3}
        d="M0.814516 10.2873C0.423991 9.8968 0.423991 9.26363 0.814516 8.87311L9.29292 0.3947C9.68345 0.00417536 10.3166 0.00417565 10.7071 0.3947L19.1855 8.87311C19.5761 9.26363 19.5761 9.8968 19.1855 10.2873C18.795 10.6778 18.1619 10.6778 17.7713 10.2873L11 3.51602V20.8982C11 21.4505 10.5523 21.8982 10 21.8982C9.44774 21.8982 9.00003 21.4505 9.00003 20.8982L9.00003 3.51602L2.22873 10.2873C1.8382 10.6778 1.20504 10.6778 0.814516 10.2873Z"
        fill={props.color || "#C8C9D0"}
      />
    </svg>
  );
};

export default IconArrow;

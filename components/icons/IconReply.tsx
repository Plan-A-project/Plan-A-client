import { SVGProps } from "react";

const IconReply: React.FC<SVGProps<SVGSVGElement>> = ({ color, ...props }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 1.5C2.27614 1.5 2.5 1.72386 2.5 2V13.5H14C14.2761 13.5 14.5 13.7239 14.5 14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V2C1.5 1.72386 1.72386 1.5 2 1.5Z"
        fill={color || "#C8C9D0"}
      />
    </svg>
  );
};

export default IconReply;

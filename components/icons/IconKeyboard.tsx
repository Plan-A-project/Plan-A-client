import { SVGProps } from "react";

const IconKeyboard: React.FC<SVGProps<SVGSVGElement>> = ({
  color,
  ...props
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6 6H8V8H6V6Z" fill={color || "#9193A1"} />
      <path d="M8 9H6V11H8V9Z" fill={color || "#9193A1"} />
      <path d="M9 9H14V11H9V9Z" fill={color || "#9193A1"} />
      <path d="M18 9H15V11H18V9Z" fill={color || "#9193A1"} />
      <path d="M9 6H11V8H9V6Z" fill={color || "#9193A1"} />
      <path d="M14 6H12V8H14V6Z" fill={color || "#9193A1"} />
      <path d="M15 6H18V8H15V6Z" fill={color || "#9193A1"} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2C2.89543 2 2 2.89543 2 4V13C2 14.1046 2.89543 15 4 15H20C21.1046 15 22 14.1046 22 13V4C22 2.89543 21.1046 2 20 2H4ZM20 4H4V13H20V4Z"
        fill={color || "#9193A1"}
      />
      <path
        d="M9.78361 17.3033C9.37559 16.8989 8.71405 16.8989 8.30602 17.3033C7.89799 17.7077 7.89799 18.3634 8.30602 18.7678L11.2612 21.6967C11.6692 22.1011 12.3308 22.1011 12.7388 21.6967L15.694 18.7678C16.102 18.3634 16.102 17.7077 15.694 17.3033C15.286 16.8989 14.6244 16.8989 14.2164 17.3033L12 19.5L9.78361 17.3033Z"
        fill={color || "#9193A1"}
      />
    </svg>
  );
};

export default IconKeyboard;

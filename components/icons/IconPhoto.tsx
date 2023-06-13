import { SVGProps } from "react";

const IconPhoto: React.FC<SVGProps<SVGSVGElement>> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6705 5.36377C16.5731 4.58466 15.9108 4 15.1256 4H8.87438C8.08921 4 7.42692 4.58466 7.32953 5.36377C7.23214 6.14288 6.56984 6.72754 5.78468 6.72754H4.74012C3.2268 6.72754 2 7.95433 2 9.46766V16.0003C2 17.6571 3.34315 19.0003 5 19.0003H19C20.6569 19.0003 22 17.6571 22 16.0003V9.46766C22 7.95433 20.7732 6.72754 19.2599 6.72754H18.2153C17.4302 6.72754 16.7679 6.14288 16.6705 5.36377Z"
        fill="#DBDCE1"
      />
      <ellipse cx="12" cy="12.1933" rx="4.54545" ry="4.41176" fill="#C8C9D0" />
    </svg>
  );
};

export default IconPhoto;

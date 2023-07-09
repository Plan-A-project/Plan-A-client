import { SVGProps } from "react";

const IconNoticeMark: React.FC<SVGProps<SVGSVGElement>> = props => {
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
        d="M11.1353 1.99976C9.87979 1.99976 8.89527 3.28501 9.00894 4.77567L9.68831 13.6848C9.78829 14.9959 10.7104 15.9998 11.8147 15.9998H12.1853C13.2896 15.9998 14.2117 14.9959 14.3117 13.6848L14.9911 4.77567C15.1047 3.28501 14.1202 1.99976 12.8647 1.99976H11.1353ZM12 17.9998C10.8954 17.9998 10 18.8952 10 19.9998C10 21.1043 10.8954 21.9998 12 21.9998C13.1046 21.9998 14 21.1043 14 19.9998C14 18.8952 13.1046 17.9998 12 17.9998Z"
        fill={props.color || "#F90B66"}
      />
    </svg>
  );
};

export default IconNoticeMark;

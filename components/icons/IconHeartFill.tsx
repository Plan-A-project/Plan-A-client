import { SVGProps } from "react";

const IconHeartFill: React.FC<SVGProps<SVGSVGElement>> = props => {
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
        d="M7.94998 3.49098C7.94998 3.49098 7.86019 3.39981 7.69741 3.26257C6.93773 2.62205 4.58841 0.977837 2.35885 2.91311C-0.348423 5.26305 1.37918 9.43171 4.1378 11.7731C6.89641 14.1146 7.94998 13.9881 7.94998 13.9881C7.94998 13.9881 8.93942 14.2961 11.912 11.7731C14.8845 9.25013 16.2882 5.26302 13.4723 2.91311C11.1303 0.958664 8.864 2.65503 8.16755 3.28133C8.02663 3.40806 7.94998 3.49098 7.94998 3.49098Z"
        fill="#F90B66"
      />
    </svg>
  );
};

export default IconHeartFill;

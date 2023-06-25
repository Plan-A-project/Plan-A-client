import { SVGProps } from "react";

const IconHeart: React.FC<SVGProps<SVGSVGElement>> = ({ color, ...props }) => {
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
        d="M7.94998 3.49098C7.94998 3.49098 7.86019 3.39981 7.69741 3.26257C6.93773 2.62205 4.58841 0.977837 2.35885 2.91311C-0.348423 5.26305 1.37918 9.43171 4.1378 11.7731C6.89641 14.1146 7.94998 13.9881 7.94998 13.9881C7.94998 13.9881 8.93942 14.2961 11.912 11.7731C14.8845 9.25013 16.2882 5.26302 13.4723 2.91311C11.1303 0.958664 8.864 2.65503 8.16755 3.28133C8.02663 3.40806 7.94998 3.49098 7.94998 3.49098ZM8.1161 13.0721C8.17461 13.0633 8.29212 13.038 8.47759 12.9666C8.96357 12.7794 9.86352 12.2954 11.3041 11.0726C12.6762 9.90806 13.6367 8.44318 13.9529 7.07286C14.2593 5.74463 13.9677 4.53431 12.8704 3.6186C12.3044 3.14621 11.7867 2.97007 11.3405 2.93163C10.8825 2.89217 10.4367 2.99298 10.0244 3.1686C9.61073 3.34484 9.25723 3.58555 9.00321 3.78841C8.87789 3.88848 8.78116 3.97584 8.71806 4.03574C8.68661 4.06559 8.66383 4.08832 8.65035 4.10203L8.63728 4.11551L8.63659 4.11624L7.97153 4.8357L7.28328 4.13696L7.28228 4.13598L7.26753 4.12166C7.25261 4.10737 7.22779 4.08403 7.1938 4.05354C7.12561 3.99239 7.02177 3.90359 6.88817 3.802C6.61753 3.59618 6.24276 3.35162 5.80951 3.17241C4.97109 2.8256 3.98206 2.73232 2.97451 3.60689C1.95993 4.48755 1.72569 5.71612 2.10054 7.10888C2.48238 8.52759 3.48385 10.0017 4.74563 11.0726C6.07835 12.2038 6.95257 12.6984 7.44996 12.9119C7.69676 13.0178 7.84433 13.0518 7.90427 13.0622C7.90612 13.0626 7.90956 13.0631 7.90956 13.0631L8 13.0769L8.1161 13.0721Z"
        fill={color || "#303136"}
      />
    </svg>
  );
};

export default IconHeart;

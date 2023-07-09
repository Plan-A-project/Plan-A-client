import { SVGProps } from "react";

const IconSearch: React.FC<SVGProps<SVGSVGElement>> = ({ color, ...props }) => {
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
        d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM15.1814 16.0956C13.7855 17.2833 11.9764 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 11.7204 17.4569 13.314 16.5329 14.6187L22.2071 20.2929C22.5976 20.6834 22.5976 21.3166 22.2071 21.7071C21.8166 22.0976 21.1834 22.0976 20.7929 21.7071L15.1814 16.0956Z"
        fill={color || "#9193A1"}
      />
    </svg>
  );
};

export default IconSearch;

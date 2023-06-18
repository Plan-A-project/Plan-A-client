import { SVGProps } from "react";

const IconSend: React.FC<SVGProps<SVGSVGElement>> = ({ color, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.75 2.36896C23.0138 2.67289 23.0742 3.09604 22.9054 3.45766L14.8155 20.7839C13.9911 22.5495 11.332 22.3457 10.8057 20.4766L8.8756 13.6218L2.22666 10.5942C0.413648 9.76869 0.667796 7.20213 2.60992 6.72399L21.6677 2.03199C22.0655 1.93406 22.4862 2.06503 22.75 2.36896ZM10.9876 13.2571L12.8677 19.9342L19.0315 6.73306L10.9876 13.2571ZM17.6579 5.15074L3.13739 8.72565L9.61399 11.6747L17.6579 5.15074Z"
        fill={color}
      />
    </svg>
  );
};

export default IconSend;

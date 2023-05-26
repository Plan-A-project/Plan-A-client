import { useRouter } from "next/router";

export default function LeftArrowIcon() {
  const router = useRouter();

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.back()}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9999 2.29289C17.3904 2.68342 17.3904 3.31658 16.9999 3.70711L8.70703 12L16.9999 20.2929C17.3904 20.6834 17.3904 21.3166 16.9999 21.7071C16.6094 22.0976 15.9762 22.0976 15.5857 21.7071L7.29282 13.4142C6.51177 12.6332 6.51177 11.3668 7.29282 10.5858L15.5857 2.29289C15.9762 1.90237 16.6094 1.90237 16.9999 2.29289Z"
        fill="#303136"
      />
    </svg>
  );
}

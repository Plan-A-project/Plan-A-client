import React, { MouseEventHandler } from "react";

type BigCloseProps = {
  onClick: MouseEventHandler<SVGSVGElement>;
};

export default function BigClose({ onClick }: BigCloseProps) {
  return (
    <svg
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5364 3.2636C4.18492 2.91213 3.61508 2.91213 3.2636 3.2636C2.91213 3.61508 2.91213 4.18492 3.2636 4.5364L10.7272 12L3.2636 19.4636C2.91213 19.8151 2.91213 20.3849 3.2636 20.7364C3.61508 21.0879 4.18492 21.0879 4.5364 20.7364L12 13.2728L19.4636 20.7364C19.8151 21.0879 20.3849 21.0879 20.7364 20.7364C21.0879 20.3849 21.0879 19.8151 20.7364 19.4636L13.2728 12L20.7364 4.5364C21.0879 4.18493 21.0879 3.61508 20.7364 3.26361C20.3849 2.91213 19.8151 2.91213 19.4636 3.26361L12 10.7272L4.5364 3.2636Z"
        fill="#303136"
      />
    </svg>
  );
}

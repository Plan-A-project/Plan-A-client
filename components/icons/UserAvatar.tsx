export default function UserAvatar() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <circle cx="28" cy="28" r="28" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_526_8325" transform="scale(0.00625)" />
        </pattern>
        <image
          id="image0_526_8325"
          width="160"
          height="160"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}

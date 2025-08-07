import * as React from "react";

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    height={20}
    width={20}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    className="stroke-current"
    {...props}
  >
    <g clipPath="url(#clip0_4418_10214)">
      <path
        d="M17 20H7C4 20 2 18 2 15V9C2 6 4 4 7 4H17C20 4 22 6 22 9V15C22 18 20 20 17 20Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4 9.49933L13.9 10.9993C14.8 11.5993 14.8 12.4993 13.9 13.0993L11.4 14.5993C10.4 15.1993 9.59998 14.6993 9.59998 13.5993V10.5993C9.59998 9.29933 10.4 8.89933 11.4 9.49933Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_4418_10214">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default YoutubeIcon;

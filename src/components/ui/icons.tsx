import React from "react";

export const USAFlag = (
  props: React.SVGProps<SVGSVGElement>,
  { height = 32 }: { height?: number }
) => {
  return (
    <svg height={height} viewBox="0 0 7410 3900" {...props}>
      <rect width="7410" height="3900" fill="#b22234" />
      <path
        d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
        stroke="#fff"
        strokeWidth="300"
      />
      <rect width="2964" height="2100" fill="#3c3b6e" />
      <g fill="#fff">
        <use x="988" />
        <use x="1976" />
        <use x="2470" />
      </g>
    </svg>
  );
};

export const GermanyFlag = (
  props: React.SVGProps<SVGSVGElement>,
  { height = 32 }: { height?: number }
) => {
  return (
    <svg height={height} viewBox="0 0 5 3" {...props}>
      <desc>Flag of Germany</desc>
      <rect width="5" height="3" y="0" x="0" fill="#000" />
      <rect width="5" height="2" y="1" x="0" fill="#D00" />
      <rect width="5" height="1" y="2" x="0" fill="#FFCE00" />
    </svg>
  );
};

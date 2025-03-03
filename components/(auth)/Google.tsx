import React from "react";

const GoogleLogo = ({
  color,
  width,
  height,
}: {
  color: string;
  width: number;
  height: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23 10V15H22V17H21V19H20V20H19V21H17V22H15V23H9V22H7V21H5V20H4V19H3V17H2V15H1V9H2V7H3V5H4V4H5V3H7V2H9V1H15V2H17V3H19V5H18V6H17V7H15V6H9V7H7V9H6V15H7V17H9V18H15V17H17V15H18V14H12V10H23Z"
        fill={color}
      />
    </svg>
  );
};

export default GoogleLogo;
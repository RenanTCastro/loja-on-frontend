import React from "react";
import Cookies from 'js-cookie';

function AddIconComponent(props) {
  const color = Cookies.get("color");
  const { width, height } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "25"}
      height={height ? height : "25"}
      fill="none"
      viewBox="0 0 25 25"
      onClick={props.onClick}
    >
      <rect width="25" height="25" fill={color} rx="5"></rect>
      <g clipPath="url(#clip0_609_79)">
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M19.99 19.423H6.53L7.97 7.885h1.97A3.357 3.357 0 0113.26 5a3.355 3.355 0 013.316 2.885h1.972l1.442 11.538zM13.26 5.962a2.397 2.397 0 00-2.346 1.923h4.691a2.398 2.398 0 00-2.345-1.923zM8.732 8.846L7.49 18.462H19.03l-1.202-9.616H8.732zm6.691 2.404a.722.722 0 110-1.443.722.722 0 010 1.443zm-4.327 0a.721.721 0 110-1.442.721.721 0 010 1.442z"
          clipRule="evenodd"
        ></path>
        <ellipse
          cx="8.635"
          cy="18.846"
          fill={color}
          rx="6.058"
          ry="5.769"
        ></ellipse>
      </g>
      <path
        fill="#fff"
        d="M8.256 19.821v-3.942h.756v3.942h-.756zM6.618 18.21v-.711h4.032v.711H6.618z"
      ></path>
      <defs>
        <clipPath id="clip0_609_79">
          <path
            fill="#fff"
            d="M0 0H14.423V14.423H0z"
            transform="translate(6.038 5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default AddIconComponent;
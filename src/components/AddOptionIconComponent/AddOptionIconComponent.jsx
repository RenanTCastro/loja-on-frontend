import React from "react";
import Cookies from 'js-cookie';

function AddOptionIconComponent(props) {
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
      <path
        fill="#fff"
        d="M11.45 18.725V7.775h2.1v10.95h-2.1zM6.9 14.25v-1.975h11.2v1.975H6.9z"
      ></path>
    </svg>
  );
}

export default AddOptionIconComponent;

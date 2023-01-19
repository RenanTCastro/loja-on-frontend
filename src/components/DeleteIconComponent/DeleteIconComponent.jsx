import React from "react";
import Cookies from 'js-cookie';

function DeleteIconComponent(props) {
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
      value={props.value}
    >
        <rect width="25" height="25" fill={color} rx="5"></rect>
        <g fill="#fff" clipPath="url(#clip0_657_24)">
          <path d="M15.5 20H9.425a2.217 2.217 0 01-2.213-2.212V11c0-.225.15-.375.376-.375.224 0 .375.15.375.375v6.788c0 .825.674 1.462 1.462 1.462H15.5c.825 0 1.462-.675 1.462-1.462V11c0-.225.15-.375.375-.375.226 0 .375.15.375.375v6.788c0 1.2-1.012 2.212-2.212 2.212zM17.488 6.838h-2.85A2.213 2.213 0 0012.462 5a2.213 2.213 0 00-2.175 1.838h-2.85A1.52 1.52 0 005.9 8.375c0 .863.675 1.5 1.537 1.5h10.088a1.52 1.52 0 001.538-1.537c0-.863-.713-1.5-1.575-1.5zM12.463 5.75c.675 0 1.237.45 1.387 1.088h-2.813c.188-.638.75-1.088 1.425-1.088zm5.025 3.375H7.438a.792.792 0 01-.788-.787c0-.413.337-.788.787-.788h10.088c.413 0 .788.338.788.788-.038.45-.375.787-.825.787z"></path>
          <path d="M9.838 18.163c-.225 0-.375-.15-.375-.375v-6.263c0-.225.15-.375.375-.375s.375.15.375.375v6.263a.403.403 0 01-.375.375zM15.375 18.012c-.225 0-.375-.15-.375-.375v-6.262c0-.225.15-.375.375-.375s.375.15.375.375v6.262a.403.403 0 01-.375.375zM12.463 18.163c-.225 0-.375-.15-.375-.375v-6.263c0-.225.15-.375.375-.375s.375.15.375.375v6.263a.403.403 0 01-.375.375z"></path>
        </g>
        <defs>
          <clipPath id="clip0_657_24">
            <path fill="#fff" d="M0 0H15V15H0z" transform="translate(5 5)"></path>
          </clipPath>
        </defs>
    </svg>
  );
}

export default DeleteIconComponent;

import React from "react";
import Cookies from 'js-cookie';

function EditIconComponent(props) {
  const color = Cookies.get("color");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
      onClick={props.onClick}
    >
      <rect width="25" height="25" fill={color} rx="5"></rect>
      <path
        fill="#fff"
        d="M19.5 11.465a.45.45 0 00-.45.45v6.415a1 1 0 01-1.055 1h-11a1 1 0 01-1.06-1V7.925A1 1 0 016.96 6.95h8.565a.45.45 0 000-.9H6.96A1.92 1.92 0 005 7.925V18.33a1.92 1.92 0 001.96 1.875H18a1.92 1.92 0 001.955-1.875v-6.415a.45.45 0 00-.455-.45z"
      ></path>
      <path
        fill="#fff"
        d="M23 6.62a1.58 1.58 0 00-.5-1.12l-1.325-1.28a1.565 1.565 0 00-2.15 0L12.2 10.665a.455.455 0 00-.14.27l-.415 3.185a.424.424 0 00.125.37.442.442 0 00.32.14h.045l3.305-.32a.5.5 0 00.265-.12l5.82-5.5 1-.925A1.56 1.56 0 0023 6.62zm-7.805 6.805l-2.585.25.32-2.465 5.315-5 2.3 2.18-5.35 5.035zm6.695-6.32l-.69.65-2.3-2.18.745-.7a.665.665 0 01.91 0l1.335 1.26a.666.666 0 010 .97z"
      ></path>
    </svg>
  );
}

export default EditIconComponent;
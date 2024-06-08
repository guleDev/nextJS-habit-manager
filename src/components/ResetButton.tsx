import React from "react";

export default function ResetButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <button type="reset">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 9h13a5 5 0 0 1 0 10H7M3 9l4-4M3 9l4 4"
        />
      </svg>
    </button>
  );
}

import type { SVGProps } from "react";

export const GmailIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2.5" fill="white" />
      <path d="M4.5 7.5 12 13l7.5-5.5V18a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V7.5Z" fill="#EA4335" />
      <path
        d="M4.5 7.5V6.5a1 1 0 0 1 1-1h.3L12 10.3l6.2-4.8h.3a1 1 0 0 1 1 1v1l-7.5 5.5-7.5-5.5Z"
        fill="#FBBC04"
      />
      <path d="M4.5 18V7.5L8.6 10.5V19h-3.1a1 1 0 0 1-1-1Z" fill="#C5221F" />
      <path d="M19.5 18V7.5L15.4 10.5V19h3.1a1 1 0 0 0 1-1Z" fill="#C5221F" />
      <path d="M8.6 19V10.5L12 13l3.4-2.5V19H8.6Z" fill="#EA4335" />
    </svg>
  );
};

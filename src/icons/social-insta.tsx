import React from "react";

interface SocialInstaIconProps {
  className?: string;
}

export const SocialInstaIcon: React.FC<SocialInstaIconProps> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 2.25H8C6.60807 2.25149 5.27358 2.80509 4.28933 3.78933C3.30509 4.77358 2.75149 6.10807 2.75 7.5V16.5C2.75149 17.8919 3.30509 19.2264 4.28933 20.2107C5.27358 21.1949 6.60807 21.7485 8 21.75H17C18.3919 21.7485 19.7264 21.1949 20.7107 20.2107C21.6949 19.2264 22.2485 17.8919 22.25 16.5V7.5C22.2485 6.10807 21.6949 4.77358 20.7107 3.78933C19.7264 2.80509 18.3919 2.25149 17 2.25ZM12.5 16.5C11.61 16.5 10.74 16.2361 9.99993 15.7416C9.25991 15.2471 8.68314 14.5443 8.34254 13.7221C8.00195 12.8998 7.91283 11.995 8.08647 11.1221C8.2601 10.2492 8.68868 9.44736 9.31802 8.81802C9.94736 8.18868 10.7492 7.7601 11.6221 7.58647C12.495 7.41283 13.3998 7.50195 14.2221 7.84254C15.0443 8.18314 15.7471 8.75991 16.2416 9.49993C16.7361 10.24 17 11.11 17 12C16.9988 13.1931 16.5243 14.337 15.6806 15.1806C14.837 16.0243 13.6931 16.4988 12.5 16.5ZM18.125 7.5C17.9025 7.5 17.685 7.43402 17.5 7.3104C17.315 7.18679 17.1708 7.01109 17.0856 6.80552C17.0005 6.59995 16.9782 6.37375 17.0216 6.15552C17.065 5.93729 17.1722 5.73684 17.3295 5.5795C17.4868 5.42217 17.6873 5.31502 17.9055 5.27162C18.1238 5.22821 18.35 5.25049 18.5555 5.33564C18.7611 5.42078 18.9368 5.56498 19.0604 5.74998C19.184 5.93499 19.25 6.1525 19.25 6.375C19.25 6.67337 19.1315 6.95952 18.9205 7.1705C18.7095 7.38147 18.4234 7.5 18.125 7.5ZM15.5 12C15.5 12.5933 15.3241 13.1734 14.9944 13.6667C14.6648 14.1601 14.1962 14.5446 13.6481 14.7716C13.0999 14.9987 12.4967 15.0581 11.9147 14.9424C11.3328 14.8266 10.7982 14.5409 10.3787 14.1213C9.95912 13.7018 9.6734 13.1672 9.55764 12.5853C9.44189 12.0033 9.5013 11.4001 9.72836 10.8519C9.95542 10.3038 10.3399 9.83524 10.8333 9.50559C11.3266 9.17595 11.9067 9 12.5 9C13.2956 9 14.0587 9.31607 14.6213 9.87868C15.1839 10.4413 15.5 11.2044 15.5 12Z"
        fill="currentColor"
      />
    </svg>
  );
};
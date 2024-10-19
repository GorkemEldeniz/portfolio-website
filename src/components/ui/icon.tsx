import React from "react";

export type IconTypes =
  | "up"
  | "left"
  | "right"
  | "download"
  | "read-more"
  | "logo"
  | "twitter"
  | "git"
  | "github"
  | "linkedin"
  | "gmail"
  | "python"
  | "javascript"
  | "typescript"
  | "html5"
  | "react"
  | "next"
  | "css"
  | "tailwind"
  | "nodejs";

interface IIcon extends React.ComponentPropsWithoutRef<"svg"> {
  icon: IconTypes;
}

export function Icon({ icon, className, ...props }: IIcon) {
  return (
    <svg className={className} {...props}>
      <use href={`/icons/base.svg#${icon}`} />
    </svg>
  );
}

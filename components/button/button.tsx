import React from "react";
import { overrideTailwindClasses } from "tailwind-override";

import { classNames } from "../../utils/string";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  xs?: boolean;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  light?: boolean;
  danger?: boolean;
  full?: boolean;
}

/**
 * Button Component
 * Implements a basic core button component
 * @param {*} props
 */
export const Button = ({
  children,
  className = "",
  xs = false,
  sm = false,
  lg = false,
  xl = false,
  light = false,
  full = false,
  disabled = false,
  ...props
}: ButtonProps): JSX.Element => {
  const isDisabled = disabled && "cursor-not-allowed opacity-50";
  return (
    <button
      className={overrideTailwindClasses(
        classNames(
          "cursor-pointer px-4 py-3",
          "inline-flex items-center border border-transparent",
          "text-sm font-medium rounded-xl shadow-sm ",
          "flex justify-center",
          "font-black",
          "text-lg",

          full ? "w-full" : "",
          xs ? "px-2.5 py-1.5 text-xs rounded" : "",
          sm ? "px-3 py-2 leading-4 rounded-md" : "",
          lg ? "px-4 py-2 text-base" : "",
          xl ? "px-6 py-3 text-base" : "",
          light
            ? "border-gray-300 text-blue-900 bg-blue-200" +
                " hover:bg-blue-900 ripple-on-surface hover:text-white"
            : "bg-yellow-400 text-black",

          isDisabled ? isDisabled : "",
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};

import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  textboxRef?: React.RefObject<HTMLInputElement>;
}

function Textbox({ className, textboxRef, ...props }: Readonly<Props>) {
  return (
    <input
      {...props}
      ref={textboxRef}
      className={`w-full p-2 border-2 border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${className}`}
      // className="w-full p-2 border-2 border-primary rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  );
}

export default Textbox;

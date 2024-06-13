import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Textbox({ ...props }: Props) {
  return (
    <input
      {...props}
      className="w-full p-2 border-2 border-primary rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
    />
  );
}

export default Textbox;

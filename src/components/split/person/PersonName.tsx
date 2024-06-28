import { CheckIcon, PencilIcon } from "@heroicons/react/20/solid";
import React from "react";
import Textbox from "../../common/textbox/Textbox";

type Props = {
  personName: string;
  nameOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isNameEditable: boolean;
  setIsNameEditable: (value: boolean) => void;
  spentAmount: number;
};

function PersonName({
  personName,
  nameOnChange,
  isNameEditable,
  setIsNameEditable,
  spentAmount,
}: Readonly<Props>) {
  if (isNameEditable) {
    return (
      <div className="w-full flex items-center justify-between space-x-2">
        <Textbox
          placeholder="John Doe"
          value={personName}
          onChange={(e) => {
            nameOnChange(e);
          }}
        />
        <CheckIcon
          className="h-5 w-5 text-primary"
          onClick={() => setIsNameEditable(false)}
        />
      </div>
    );
  } else {
    return (
      <div className="w-full flex items-center justify-between space-x-2">
        <label
          htmlFor="name"
          className="text-black dark:text-white font-semibold textlg md:text-xl min-w-max"
        >
          {personName}
        </label>
        <PencilIcon
          className="h-5 w-5 text-primary"
          onClick={() => setIsNameEditable(true)}
        />
        <div className="w-full flex items-center justify-end space-x-2 mx-2">
          <span className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
            Total:
          </span>
          <span className="text-black dark:text-white font-semibold">
            {spentAmount}
          </span>
        </div>
      </div>
    );
  }
}

export default PersonName;

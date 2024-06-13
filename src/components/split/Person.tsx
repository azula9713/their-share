import {
  CheckIcon,
  PencilIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Textbox from "../common/textbox/Textbox";

interface ISpending {
  id: number;
  name: string;
  amount: number;
}

function Person() {
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [spendings, setSpendings] = useState<ISpending[]>([]);

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded mt-2 w-full">
      {isNameEditable ? (
        <div className="w-full flex items-center justify-between space-x-2">
          <Textbox placeholder="John Doe" />
          <CheckIcon
            className="h-5 w-5 text-primary"
            onClick={() => setIsNameEditable(!isNameEditable)}
          />
        </div>
      ) : (
        <div className="w-full flex items-center justify-between">
          <label
            htmlFor="name"
            className="text-black dark:text-white font-semibold"
          >
            John Doe
          </label>
          <PencilIcon
            className="h-5 w-5 text-primary"
            onClick={() => setIsNameEditable(!isNameEditable)}
          />
        </div>
      )}

      <div>
        {spendings.map((spending) => (
          <div
            key={spending.id}
            className="relative flex flex-col items-center justify-between w-full border border-gray-300 dark:border-gray-700 rounded mt-4 p-2"
          >
            <XMarkIcon
              className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold rounded-full size-5 m-[-10px]"
              onClick={() => {
                setSpendings(spendings.filter((s) => s.id !== spending.id));
              }}
            />

            <input
              type="text"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mt-2"
              placeholder="What did they spend on?"
            />
            <input
              type="number"
              className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded mt-2"
              placeholder="How much did they spend?"
            />
          </div>
        ))}

        {/* add another item text button on right corner */}

        {spendings.length === 0 ? (
          <div className="w-full max-w-lg">
            <button
              className="w-full p-1 bg-primary text-white rounded mt-4 flex items-center justify-center"
              onClick={() =>
                setSpendings([
                  ...spendings,
                  { name: "", amount: 0, id: spendings.length },
                ])
              }
            >
              Add an item
            </button>
          </div>
        ) : (
          <div className="flex justify-end mt-2">
            <button
              className="text-primary flex items-center"
              onClick={() =>
                setSpendings([
                  ...spendings,
                  { name: "", amount: 0, id: spendings.length },
                ])
              }
            >
              <PlusIcon className="h-5 w-5" />
              Add another item
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Person;

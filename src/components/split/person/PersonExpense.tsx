import { PlusIcon, XMarkIcon } from "@heroicons/react/20/solid";

import { ISplitItem } from "../../../interfaces/SplitInterface";
import { splitItemIdGenerator } from "../../../utils/IdGenerator";
import CTAButton from "../../common/ctaButton/CTAButton";
import Textbox from "../../common/textbox/Textbox";

type Props = {
  spendings: ISplitItem[];
  setSpendings: (value: ISplitItem[]) => void;
};

function PersonExpense({ spendings, setSpendings }: Readonly<Props>) {
  return (
    <div>
      {spendings.map((spending) => (
        <div
          key={spending.id}
          className="relative flex flex-col items-center justify-between w-full border border-gray-300 dark:border-gray-700 rounded-xl mt-4 p-2"
        >
          <XMarkIcon
            className="absolute top-0 right-0 bg-red-500 hover:bg-red-700 text-white font-bold rounded-full size-5 m-[-10px]"
            onClick={() => {
              setSpendings(spendings.filter((s) => s.id !== spending.id));
            }}
          />
          <div className="w-full flex-col items-center justify-center space-y-2">
            <Textbox placeholder="What did they spend on?" />
            <Textbox placeholder="How much did they spend?" type="number" />
          </div>
        </div>
      ))}

      {spendings.length === 0 ? (
        <div className="w-full max-w-lg">
          <CTAButton
            hierarchy="primary"
            text="Add an expense"
            className="mt-4"
            onClick={() =>
              setSpendings([
                ...spendings,
                {
                  description: "",
                  amount: 0,
                  id: splitItemIdGenerator(),
                  splitBetween: [],
                },
              ])
            }
          />
        </div>
      ) : (
        <div className="flex justify-end mt-2">
          <button
            className="text-primary flex items-center"
            onClick={() =>
              setSpendings([
                ...spendings,
                {
                  description: "",
                  amount: 0,
                  id: splitItemIdGenerator(),
                  splitBetween: [],
                },
              ])
            }
          >
            <PlusIcon className="h-5 w-5" />
            Add another item
          </button>
        </div>
      )}
    </div>
  );
}

export default PersonExpense;

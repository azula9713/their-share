import { CheckIcon } from "@heroicons/react/20/solid";

import Textbox from "../../common/textbox/Textbox";

function SplitTitle() {
  return (
    <div className="w-full flex items-center justify-between space-x-4">
      <Textbox placeholder="Eg: Sunday Brunch, Groceries, etc" />
      <CheckIcon className="h-5 w-5 text-primary" />
    </div>
  );
}

export default SplitTitle;

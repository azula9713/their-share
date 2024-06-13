import Textbox from "../components/common/textbox/Textbox";
import Person from "../components/split/Person";
import BaseLayout from "../layout/BaseLayout";

function Split() {
  return (
    <BaseLayout>
      <div className="bg-white dark:bg-gray-900 flex flex-col items-center justify-start w-full p-4">
        <div className="w-full max-w-lg flex flex-col space-y-4 items-start justify-center mb-4">
          <h3 className="text-2xl text-black dark:text-white font-bold">
            What are we splitting?
          </h3>
          <Textbox placeholder="Eg: Sunday Brunch, Groceries, etc" />
        </div>
        <div className="w-full max-w-lg flex flex-col space-y-4 items-start justify-center mb-4">
          <h3 className="text-2xl text-black dark:text-white font-bold">
            Who spent how much?
          </h3>
          <div className="w-full">
            <Person />
          </div>
        </div>
        <div className="w-full max-w-lg">
          <button className="w-full p-2 bg-primary text-white rounded mt-2">
            Add another person
          </button>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Split;

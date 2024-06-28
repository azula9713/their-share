import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { IPerson, ISplit } from "../../../interfaces/SplitInterface";
import { updateSplit } from "../../../redux/features/split.slice";
import { RootState } from "../../../redux/store";
import PersonExpense from "./PersonExpense";
import PersonName from "./PersonName";

type PersonProps = {
  person: IPerson;
  splitId: string;
};

function Person({ person, splitId }: Readonly<PersonProps>) {
  const dispatch = useAppDispatch();
  const splitState = useSelector((state: RootState) => state.split);

  const currentSplit = splitState.splits.find(
    (split) => split.splitId === splitId
  );

  const [isNameEditable, setIsNameEditable] = useState(false);

  const updateName = (
    e: React.ChangeEvent<HTMLInputElement>,
    split: ISplit
  ) => {
    dispatch(
      updateSplit({
        splitId: splitId,
        updates: {
          persons: split.persons.map((p) => {
            if (p.id === person.id) {
              return { ...p, name: e.target.value };
            }
            return p;
          }),
        },
      })
    );
  };

  const updateSplitItems = (value: IPerson["splitItems"], split: ISplit) => {
    dispatch(
      updateSplit({
        splitId: splitId,
        updates: {
          persons: split.persons.map((p) => {
            if (p.id === person.id) {
              return { ...p, splitItems: value };
            }
            return p;
          }),
        },
      })
    );
  };

  if (currentSplit === undefined) return null;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl mt-2 w-full">
      <PersonName
        personName={person.name}
        nameOnChange={(e) => updateName(e, currentSplit)}
        isNameEditable={isNameEditable}
        setIsNameEditable={setIsNameEditable}
        spentAmount={person.splitItems.reduce(
          (acc, item) => acc + item.amount,
          0
        )}
      />

      <PersonExpense
        spendings={person.splitItems.map((item) => ({
          id: item.id,
          description: item.description,
          amount: item.amount,
          splitBetween: item.splitBetween,
        }))}
        setSpendings={(value) => updateSplitItems(value, currentSplit)}
      />
    </div>
  );
}

export default Person;

import { motion } from "framer-motion";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SubTitle from "../components/common/heading/SubTitle";
import Person from "../components/split/person/Person";
import SplitTitle from "../components/split/splitTitle/SplitTitle";
import { useAppDispatch } from "../hooks/reduxHooks";
import { ISplit } from "../interfaces/SplitInterface";
import BaseLayout from "../layout/BaseLayout";
import { setSplitId } from "../redux/features/split.slice";
import { RootState } from "../redux/store";

function Split() {
  const dispatch = useAppDispatch();
  const splitState = useSelector((state: RootState) => state.split);
  const { id } = useParams();

  const currentSplit = splitState.splits.find(
    (split) => split.splitId === id
  ) as ISplit;

  useEffect(() => {
    if (currentSplit === undefined) {
      dispatch(setSplitId(id as string));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, currentSplit]);

  if (currentSplit === undefined) return null;

  return (
    <BaseLayout>
      <div className="bg-gray-200 dark:bg-gray-900 flex flex-col items-center justify-start w-full p-4 h-[calc(100vh-100px)]">
        <motion.div
          className="w-full max-w-lg flex flex-col space-y-8 items-start justify-center mb-4 mt-4 md:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <SplitTitle split={currentSplit} />
        </motion.div>
        {currentSplit.splitTitle !== "" && (
          <div className="w-full max-w-lg flex flex-col items-start justify-center my-2">
            <SubTitle title="Who spent how much?" />
            <div className="w-full space-y-4">
              {currentSplit.persons.map((person) => (
                <Person
                  key={person.id}
                  person={person}
                  splitId={id as string}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseLayout>
  );
}

export default Split;

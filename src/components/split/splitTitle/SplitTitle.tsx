import { CheckIcon, PencilIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState } from "react";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import { ISplit } from "../../../interfaces/SplitInterface";
import { updateSplit } from "../../../redux/features/split.slice";
import CTAButton from "../../common/ctaButton/CTAButton";
import Heading from "../../common/heading/Heading";
import SubTitle from "../../common/heading/SubTitle";
import Textbox from "../../common/textbox/Textbox";

type SplitTitleProps = {
  split: ISplit;
};

function SplitTitle({ split }: Readonly<SplitTitleProps>) {
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState(split.splitTitle);
  const [titleEditMode, setTitleEditMode] = useState(false);

  return (
    <div className="w-full flex flex-col items-center justify-start">
      {split.splitTitle !== "" ? (
        <SubTitle title="Splitting" />
      ) : (
        <SubTitle title="Create a split" />
      )}

      <motion.div className="w-full flex items-center justify-start space-x-4 mt-2">
        {!titleEditMode && split.splitTitle !== "" ? (
          <Heading title={split.splitTitle} headingLevel={3} />
        ) : (
          <Textbox
            placeholder="Eg: Sunday Brunch, Groceries, etc"
            className="text-lg md:text-2xl md:px-8"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}
        {titleEditMode && (
          <CheckIcon
            className="h-5 w-5 text-primary"
            onClick={() => {
              dispatch(
                updateSplit({
                  splitId: split.splitId,
                  updates: { splitTitle: title },
                })
              );
              setTitleEditMode(false);
            }}
          />
        )}
        {split.splitTitle !== "" && !titleEditMode && (
          <PencilIcon
            className="h-5 w-5 text-primary cursor-pointer"
            onClick={() => setTitleEditMode(true)}
          />
        )}
      </motion.div>

      {split.splitTitle === "" && (
        <motion.div
          className="w-full max-w-[200px] flex items-center justify-center mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        >
          <CTAButton
            text="Next"
            className="text-lg md:text-xl"
            hierarchy="primary"
            onClick={() =>
              dispatch(
                updateSplit({
                  splitId: split.splitId,
                  updates: { splitTitle: title },
                })
              )
            }
            disabled={!title}
          />
        </motion.div>
      )}
    </div>
  );
}

export default SplitTitle;

import { nanoid } from "nanoid";

function splitIdGenerator() {
  //start id with split_
  return `split_${nanoid(10)}`;
}

const personIdGenerator = () => {
  return `person_${nanoid(10)}`;
};

const splitItemIdGenerator = () => {
  return `splitItem_${nanoid(10)}`;
};

export { personIdGenerator, splitIdGenerator, splitItemIdGenerator };

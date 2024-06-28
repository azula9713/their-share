type Props = {
  title: string;
};

function SubTitle({ title }: Readonly<Props>) {
  return (
    <span className="text-lg md:text-xl text-gray-500 dark:text-gray-400 w-full">
      {title}
    </span>
  );
}

export default SubTitle;

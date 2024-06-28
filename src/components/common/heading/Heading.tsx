type Props = {
  title: string;
  headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
};

function Heading({ title, headingLevel }: Readonly<Props>) {
  switch (headingLevel) {
    case 1:
      return (
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black dark:text-white font-bold w-max">
          {title}
        </h1>
      );
    case 2:
      return (
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-black dark:text-white font-bold w-max">
          {title}
        </h2>
      );
    case 3:
      return (
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white font-bold w-max">
          {title}
        </h3>
      );
    case 4:
      return (
        <h4 className="text-xl md:text-2xl lg:text-3xl text-black dark:text-white font-bold w-max">
          {title}
        </h4>
      );
    case 5:
      return (
        <h5 className="text-lg md:text-xl lg:text-2xl text-black dark:text-white font-bold w-max">
          {title}
        </h5>
      );
    case 6:
      return (
        <h6 className="text-base md:text-lg lg:text-xl text-black dark:text-white font-bold w-max">
          {title}
        </h6>
      );
    default:
      return (
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-black dark:text-white font-bold w-max">
          {title}
        </h3>
      );
  }
}

export default Heading;

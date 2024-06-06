type Props = {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  hierarchy?: "primary" | "secondary";
};

function CTAButton({
  text,
  onClick = () => {},
  disabled = false,
  hierarchy = "primary",
}: Readonly<Props>) {
  return (
    <button
      className={`block visible py-4 px-8 font-semibold leading-none  rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block w-full
                ${
                  hierarchy === "primary"
                    ? "bg-primary text-light hover:bg-green-600 ease-in-out duration-150"
                    : "bg-slate-100 text-dark hover:bg-slate-200 ease-in-out duration-150"
                }`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default CTAButton;

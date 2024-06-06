import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

type Props = {
  theme: string;
  toggleTheme: () => void;
};

function DarkMode({ theme, toggleTheme }: Readonly<Props>) {
  return (
    <button
      type="button"
      className="p-2.5 text-primary dark:text-gray-200"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="size-6" aria-hidden="true" />
      ) : (
        <MoonIcon className="size-6" aria-hidden="true" />
      )}
    </button>
  );
}

export default DarkMode;

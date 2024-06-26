import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

type Props = {
  theme: string;
  toggleTheme: () => void;
  testId?: string;
};

function DarkMode({
  theme,
  toggleTheme,
  testId = "darak-mode",
}: Readonly<Props>) {
  return (
    <button
      type="button"
      data-testid={testId}
      className="p-2.5 text-primary dark:text-gray-200"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="size-6" aria-hidden="true" icon-attribute="sun" />
      ) : (
        <MoonIcon className="size-6" aria-hidden="true" icon-attribute="moon" />
      )}
    </button>
  );
}

export default DarkMode;

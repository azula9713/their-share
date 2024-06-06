import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/theirsharelogo.png";
import darkLogo from "../../assets/theirsharelogodark.png";
import DarkMode from "../common/darkMode/DarkMode";
import Logo from "../common/logo/Logo";

import { useTheme } from "../../utils/themeProvider";

const featrues = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-10 h-[100px]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <Logo logo={logo} darkLogo={darkLogo} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <div className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary">
            <span className="sr-only">Open main menu</span>

            <DarkMode theme={theme} toggleTheme={toggleTheme} />
            <Bars3Icon
              className={`h-6 w-6 ${theme === "dark" ? "text-gray-200" : ""}`}
              aria-hidden="true"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        </div>
        <PopoverGroup className="hidden lg:flex py-2 lg:gap-x-8 ">
          <Link
            to="/new-share"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            New Share
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
              Features
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400 dark:text-gray-300"
                aria-hidden="true"
              />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-100/5">
                <div className="p-4">
                  {featrues.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-900 dark:group-hover:bg-gray-800">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 dark:text-gray-400 dark:group-hover:text-indigo-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900 dark:text-gray-100"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-gray-900">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400 dark:text-gray-300"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            About
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-12 lg:py-4 items-center">
          <Link
            to="/login"
            className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
          <DarkMode theme={theme} toggleTheme={toggleTheme} />
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel
          className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-gray-800 px-4 py-2 
        sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:ring-gray-100/10"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <Logo logo={logo} darkLogo={darkLogo} />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton
                        className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7
                       text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                      >
                        Product
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {[...featrues, ...callsToAction].map((item) => (
                          <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 
                            text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                          >
                            {item.name}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="/new-share"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
                  text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                >
                  New Share
                </Link>
                <Link
                  to="/features"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7
                   text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7
                   text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                >
                  About
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7
                   text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-900"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Header;

import Link from "next/link";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const languages = [
  {
    name: "English",
  },
  {
    name: "Español",
  },
];

const navLinks = [
  { name: "dev", url: "/development" },
  { name: "overview", url: "/" },
  { name: "art", url: "/art" },
];

const footerLinks = [
  {
    href: "https://www.github.com/jaxmerius",
    img: "github",
  },
  {
    href: "https://www.linkedin.com/in/ethanmathes",
    img: "linkedin",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Container({ currentPage, children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavLinks = () => {
    return navLinks.map((item, idx) => {
      return (
        <Link
          key={idx}
          href={item.url}
          className={classNames(
            currentPage == item.name
              ? "underline decoration-4 underline-offset-4"
              : "",
            "hover:bg-primary-700 uppercase px-3 pt-2 pb-3 rounded-md font-bold text-secondary-400 focus:outline-none"
          )}
        >
          {item.name}
        </Link>
      );
    });
  };

  const MobileNavLinks = () => {
    return navLinks.map((item, idx) => {
      return (
        <Link
          key={idx}
          href={item.url}
          className={classNames(
            currentPage == item.name
              ? "text-secondary-400"
              : "text-primary-400",
            "block uppercase px-3 pt-2 pb-3 rounded-md font-bold focus:outline-none"
          )}
        >
          {item.name}
        </Link>
      );
    });
  };

  return (
    <div className="min-h-screen h-full flex flex-col bg-primary-900 text-primary-300">
      <div className="flex-[1_0_auto]">
        <nav className="fixed w-full z-20 top-0 left-0 bg-primary-900">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:py-6 lg:px-8">
            <div className="flex lg:flex-1">
              <Link href="/">
                <img
                  className="h-8 sm:h-12 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-10 sm:h-12 w-auto" />
              </button>
            </div>
            <Popover.Group className="hidden lg:flex lg:gap-x-2">
              <NavLinks />
            </Popover.Group>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Popover className="relative">
                <Popover.Button className="hover:bg-primary-700 uppercase px-3 pt-2 pb-3 rounded-md font-bold text-primary-400 focus:outline-none">
                  English
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 -translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 mt-1 bg-primary-700 w-full">
                    {languages.map((item) => (
                      <button
                        key={item.name}
                        className="hover:text-secondary-400 uppercase px-3 py-2 font-bold text-primary-400"
                      >
                        {item.name}
                      </button>
                    ))}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <img
                  className="h-8 sm:h-12 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-10 sm:h-12 w-auto" />
              </button>
            </div>
            <div className="divide-y divide-secondary-400">
              <div className="-mx-3 space-y-2 py-6">
                <MobileNavLinks />
              </div>
              <div className="py-6">
                <Disclosure as="div">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between py-2 font-bold text-secondary-400 uppercase">
                        English
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {languages.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="div"
                            className="block py-2 px-3 font-bold text-primary-400 uppercase"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-5 sm:pb-10">
          {children}
        </div>
      </div>
      <footer className="w-full shrink-0">
        <div className="max-w-7xl mx-auto py-4 md:py-8 px-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <span className="text-sm text-primary-400 sm:text-center">
              © {new Date().getFullYear()} Ethan Mathes. All Rights Reserved.
            </span>
            <div className="flex space-x-2 justify-center">
              {footerLinks.map((item, idx) => {
                return (
                  <Link key={idx} href={item.href} target="_blank">
                    <img
                      className="h-5 w-auto"
                      src={"/" + item.img + ".svg"}
                      alt={item.img}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

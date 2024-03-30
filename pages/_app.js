import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { useState } from "react";
import { Dialog, Disclosure, Menu, Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const languages = [
  { name: "English", code: "en" },
  { name: "Español", code: "es" },
  { name: "Coming Soon!", code: "" },
];

const navLinks = [
  { name: { en: "Dev", es: "Desarrollo" }, url: "/development" },
  {
    name: { en: "Overview", es: "Visión de Conjunto" },
    url: "/",
  },
  { name: { en: "Art", es: "Arte" }, url: "/art" },
];

const footerLegal = {
  en: "All Rights Reserved.",
  es: "Reservados todos los derechos.",
};

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

function MyApp({ Component, pageProps }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const router = useRouter();
  const { pathname, asPath, query } = router;
  const loc = router.locale;

  const NavLinks = () => {
    return navLinks.map((item, idx) => {
      return (
        <Link
          key={idx}
          href={item.url}
          className={classNames(
            router.pathname == item.url
              ? "underline decoration-4 underline-offset-4"
              : "",
            "hover:bg-primary-700 uppercase px-3 pt-2 pb-3 rounded-md font-bold text-secondary-400 focus:outline-none"
          )}
        >
          {item.name[loc]}
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
            router.pathname == item.url
              ? "text-secondary-400"
              : "text-primary-400",
            "block uppercase px-3 pt-2 pb-3 rounded-md font-bold focus:outline-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        >
          {item.name}
        </Link>
      );
    });
  };

  return (
    <>
      <Head>
        <title>Ethan Mathes</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.svg" />
        <meta name="description" content="Portfolio Site for Ethan Mathes" />
        <link rel="image_src" href="/thumbnail.png" />
        <meta property="og:title" content="Ethan Mathes" />
        <meta
          property="og:description"
          content="Portfolio Site for Ethan Mathes"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:image:url" content="/thumbnail.png" />
        <meta property="og:image:secure_url" content="/thumbnail.png" />
        <meta name="twitter:title" content="Ethan Mathes" />
        <meta
          name="twitter:description"
          content="Portfolio Site for Ethan Mathes"
        />
        <meta name="twitter:image" content="/thumbnail.png" />
        <meta name="twitter:url" content="https://www.ethanmathes.com" />
      </Head>
      <Analytics />
      <SpeedInsights />
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
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-400"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Bars3Icon className="h-10 sm:h-12 w-auto" />
                </button>
              </div>
              <Popover.Group className="hidden lg:flex lg:gap-x-2">
                <NavLinks />
              </Popover.Group>
              <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <Menu>
                  <Menu.Button>
                    <div className="hover:bg-primary-700 uppercase px-3 pt-2 pb-3 rounded-md font-bold text-primary-400 focus:outline-none">
                      {
                        languages.filter((language) => {
                          return language.code === router.locale;
                        })[0].name
                      }
                    </div>
                  </Menu.Button>
                  <Menu.Items className="absolute mt-14 rounded-md bg-primary-700">
                    {languages.map((item) => (
                      <Menu.Item key={item.name}>
                        <button
                          className="block hover:text-secondary-400 uppercase px-3 py-2 font-bold text-primary-400"
                          onClick={() => {
                            router.push({ pathname, query }, asPath, {
                              locale: item.code,
                            });
                          }}
                        >
                          {item.name}
                        </button>
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Menu>
              </div>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-primary-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
              <div className="flex items-center justify-end">
                <button
                  className="-m-2.5 h-12 rounded-md p-2.5 text-secondary-400"
                  onClick={() => setMobileMenuOpen(false)}
                ></button>
              </div>
              <div className="divide-y divide-secondary-400">
                <div className="-mx-3 space-y-2 py-6">
                  <MobileNavLinks />
                </div>
                <Disclosure as="div" className="py-6">
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
            </Dialog.Panel>
          </Dialog>
          <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-5 sm:pb-10">
            <Component {...pageProps} />
          </div>
        </div>
        <footer className="w-full shrink-0">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-4 px-6 lg:py-6 lg:px-8">
            <span className="text-sm text-primary-400 sm:text-center">
              © {new Date().getFullYear()} Ethan Mathes. {footerLegal[loc]}
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
        </footer>
      </div>
    </>
  );
}

export default MyApp;

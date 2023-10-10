import Link from "next/link";
import links from "../public/data/links.json";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Footer({ currentPage }) {
  const FooterLink = ({ value, loc }) => {
    return (
      <Link href={loc}>
        <button
          className={classNames(
            currentPage == value ? "text-secondary-400" : "",
            "mr-4 sm:mr-0 sm:ml-4 hover:underline md:ml-6"
          )}
          value={value}
        >
          <div>{value}</div>
        </button>
      </Link>
    );
  };

  return (
    <footer class=" bg-primary-700 border-t border-secondary-800 shrink-0">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between mb-6 lg:mb-8">
          <Link href="/" class="flex items-center mb-4 sm:mb-0">
            <img src="/logo.png" class="h-8" alt="Logo" />
          </Link>
          <div class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <FooterLink value="Overview" loc="/" />
            <FooterLink value="Art" loc="/art" />
            <FooterLink value="Development" loc="/development" />
            <FooterLink value="Links" loc="/links" />
          </div>
        </div>
        <div class="sm:flex sm:items-center sm:justify-between mt-6 lg:mt-8">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Ethan Mathes. All Rights Reserved.
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {links.map((item, idx) => {
              return (
                <Link key={idx} href={item.href} target="_blank">
                  <img
                    className="w-auto h-4"
                    src={"/" + item.img + ".png"}
                    alt={item.img}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

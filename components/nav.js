import Link from "next/link";
import classNames from "../utils/classNames";

export default function Nav({ currentPage }) {
  const NavButton = ({ value, loc }) => {
    return (
      <Link href={loc}>
        <button
          className={classNames(
            "text-green-400 hover:bg-gray-600 px-3 py-2 rounded-md text-sm focus:outline-none ",
            currentPage == value ? "border border-green-800" : null
          )}
          value={value}
        >
          {value}
        </button>
      </Link>
    );
  };

  return (
    <nav className="fixed bg-gray-700 w-full border-b border-green-400 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block h-8 w-auto" src="/logo.png" alt="Logo" />
            </div>
            <div className="flex-shrink-0 flex items-center text-gray-300 px-3 py-2 rounded-md text-2xl">
              ETHAN MATHES
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavButton value="Overview" loc="/" />
                <NavButton value="Art" loc="/art" />
                <NavButton value="Development" loc="/development" />
                <NavButton value="Links" loc="/links" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="pb-3 flex justify-center">
          <NavButton value="Overview" loc="/" />
          <NavButton value="Art" loc="/art" />
          <NavButton value="Development" loc="/development" />
          <NavButton value="Links" loc="/links" />
        </div>
      </div>
    </nav>
  );
}

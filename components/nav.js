import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav({ currentPage }) {
  const NavButton = ({ value, loc }) => {
    return (
      <Link href={loc}>
        <button
          className={classNames(
            currentPage == value ? "ring-1 ring-secondary-800" : "",
            "bg-primary-700 hover:bg-primary-600 px-3 py-2 rounded-md text-sm focus:outline-none"
          )}
          value={value}
        >
          <div className="text-secondary-400">{value}</div>
        </button>
      </Link>
    );
  };

  return (
    <nav className="fixed bg-primary-700 w-full border-b border-secondary-800 z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
          >
            <>
              <div className="flex-shrink-0 flex items-center">
                <img className="block h-8 w-auto" src="/logo.png" alt="Logo" />
              </div>
              <div className="flex-shrink-0 flex items-center text-primary-300 px-3 py-2 rounded-md text-2xl">
                ETHAN MATHES
              </div>
            </>
          </Link>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavButton value="Overview" loc="/" />
                <NavButton value="Art" loc="/art" />
                <NavButton value="Development" loc="/development" />
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
        </div>
      </div>
    </nav>
  );
}

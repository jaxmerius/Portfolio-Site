import Head from "next/head";

export default function Nav({ currentPage }) {
  return (
    <nav className="fixed bg-green-700 w-full shadow z-10">
      <Head>
        <title>Ethan Mathes</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>
      {/* desktop menu */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img className="block h-8 w-auto" src="/logo.png" alt="Logo" />
            </div>
            <div className="flex-shrink-0 flex items-center text-white px-3 py-2 rounded-md text-2xl font-medium">
              ETHAN MATHES
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className={
                    currentPage == "Overview"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Overview
                </a>
                <a
                  href="/art"
                  className={
                    currentPage == "Art"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Art
                </a>
                <a
                  href="/development"
                  className={
                    currentPage == "Development"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Development
                </a>
                <a
                  href="/links"
                  className={
                    currentPage == "Links"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Links
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="pb-3 flex justify-center">
          <a
            href="/"
            className={
              currentPage == "Overview"
                ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Overview
          </a>
          <a
            href="/art"
            className={
              currentPage == "Art"
                ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Art
          </a>
          <a
            href="/development"
            className={
              currentPage == "Development"
                ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Development
          </a>
          <a
            href="/links"
            className={
              currentPage == "Links"
                ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Links
          </a>
        </div>
      </div>
    </nav>
  );
}

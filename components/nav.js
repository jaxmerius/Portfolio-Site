export default function Nav({ currentPage }) {
  return (
    <nav className="fixed bg-green-600 w-full shadow">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {/*
                Icon when menu is closed.
                Menu open: "hidden", Menu closed: "block"
              */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/*
                Icon when menu is open.
                Menu open: "block", Menu closed: "hidden" 
              */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
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
                    currentPage == "Home"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Home
                </a>
                <a
                  href="/education"
                  className={
                    currentPage == "Education"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Education
                </a>
                <a
                  href="/work"
                  className={
                    currentPage == "Work"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Work
                </a>
                <a
                  href="/contact"
                  className={
                    currentPage == "Contact"
                      ? "bg-green-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                      : "text-white hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  }
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <a
            href="#"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}

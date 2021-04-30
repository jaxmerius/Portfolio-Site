import Head from "next/head";
import { useState } from "react";
import { Body, ContentWrapper, NavBtn, NavSelected } from "../styles/styles";
import Overview from "./overview";
import Art from "./art";
import Development from "./development";
import Links from "./links";

export default function Index() {
  const [currentPage, setCurrentPage] = useState("Overview");

  const handleNav = (e) => {
    currentPage != e.target.value ? setCurrentPage(e.target.value) : null;
    window.scrollTo(0, 0);
  };

  return (
    <div className={Body}>
      <nav className="fixed bg-green-700 w-full shadow z-10">
        <Head>
          <title>Ethan Mathes</title>
          <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        </Head>
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
                  <button
                    className={currentPage == "Overview" ? NavSelected : NavBtn}
                    onClick={handleNav}
                    value="Overview"
                  >
                    Overview
                  </button>
                  <button
                    className={currentPage == "Art" ? NavSelected : NavBtn}
                    onClick={handleNav}
                    value="Art"
                  >
                    Art
                  </button>
                  <button
                    className={
                      currentPage == "Development" ? NavSelected : NavBtn
                    }
                    onClick={handleNav}
                    value="Development"
                  >
                    Development
                  </button>
                  <button
                    className={currentPage == "Links" ? NavSelected : NavBtn}
                    onClick={handleNav}
                    value="Links"
                  >
                    Links
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="pb-3 flex justify-center">
            <button
              className={currentPage == "Overview" ? NavSelected : NavBtn}
              onClick={handleNav}
              value="Overview"
            >
              Overview
            </button>
            <button
              className={currentPage == "Art" ? NavSelected : NavBtn}
              onClick={handleNav}
              value="Art"
            >
              Art
            </button>
            <button
              className={currentPage == "Development" ? NavSelected : NavBtn}
              onClick={handleNav}
              value="Development"
            >
              Development
            </button>
            <button
              className={currentPage == "Links" ? NavSelected : NavBtn}
              onClick={handleNav}
              value="Links"
            >
              Links
            </button>
          </div>
        </div>
      </nav>
      <div className={ContentWrapper}>
        {currentPage == "Overview" ? (
          <Overview />
        ) : currentPage == "Art" ? (
          <Art />
        ) : currentPage == "Development" ? (
          <Development />
        ) : currentPage == "Links" ? (
          <Links />
        ) : null}
      </div>
    </div>
  );
}

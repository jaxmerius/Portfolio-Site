import Nav from "../components/nav";
import Link from "next/link";
import { bubble, grid, link } from "../styles/styles";
import links from "../public/data/links.json";
import classNames from "../utils/classNames";

export default function Links() {
  return (
    <div className="min-h-screen h-full bg-gray-900 text-gray-300">
      <Nav currentPage="Links" />
      <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
        <div className={classNames("lg:grid-cols-3 md:grid-cols-2 ", grid)}>
          <div className="lg:col-span-3 md:col-span-2 text-4xl font-bold">
            Relevant Links
          </div>
          {links.map((item) => {
            return (
              <div className={bubble}>
                <Link href={item.href}>
                  <a target="_blank">
                    <img
                      className="w-2/3 mx-auto"
                      src={"/" + item.img + ".png"}
                      alt={item.img}
                    />
                    <div className={classNames("mt-4 break-all ", link)}>
                      {item.value}
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

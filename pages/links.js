import { bubble, grid, link } from "../styles/styles";
import links from "../public/data/links.json";

export default function Links() {
  return (
    <div className={`lg:grid-cols-3 md:grid-cols-2 ${grid}`}>
      <div className="lg:col-span-3 md:col-span-2 text-4xl font-bold">
        Relevant links
      </div>
      {links.map((item) => {
        return (
          <div className={bubble}>
            <a href={item.href}>
              <img
                className="w-2/3 mx-auto"
                src={"/" + item.img + ".png"}
                alt={item.img}
              />
              <div className={`mt-4 break-all ${link}`}>{item.value}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

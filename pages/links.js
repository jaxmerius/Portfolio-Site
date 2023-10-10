import Container from "../components/container";
import Link from "next/link";
import links from "../public/data/links.json";

export default function Links() {
  return (
    <Container currentPage={"Links"}>
      <div className="lg:grid-cols-3 md:grid-cols-2 custGrid">
        <div className="lg:col-span-3 md:col-span-2 text-4xl font-bold">
          Relevant Links
        </div>
        {links.map((item, idx) => {
          return (
            <div key={idx} className="bubble">
              <Link href={item.href} target="_blank">
                <>
                  <img
                    className="w-2/3 mx-auto"
                    src={"/" + item.img + ".png"}
                    alt={item.img}
                  />
                  <div className="mt-4 break-all link">{item.value}</div>
                </>
              </Link>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

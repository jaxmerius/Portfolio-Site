import Nav from "../components/nav";
import Footer from "../components/footer";
import Link from "next/link";
import links from "../public/data/links.json";

export default function Links() {
  return (
    <div className="min-h-screen h-full flex flex-col bg-primary-900 text-primary-300">
      <div className="flex-[1_0_auto]">
        <Nav currentPage="Links" />
        <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
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
        </div>
      </div>
      <Footer currentPage="Links" />
    </div>
  );
}

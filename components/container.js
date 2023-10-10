import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Container({ currentPage, children }) {
  return (
    <div className="min-h-screen h-full flex flex-col bg-primary-900 text-primary-300">
      <div className="flex-[1_0_auto]">
        <Nav currentPage={currentPage} />
        <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
          {children}
        </div>
      </div>
      <Footer currentPage={currentPage} />
    </div>
  );
}

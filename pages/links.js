import HeadInfo from "../components/head";
import Nav from "../components/nav";

export default function Links() {
  return (
    <div className="h-full sm:h-screen">
      <HeadInfo />
      <Nav currentPage="Links" />
      <div className="bg-green-200 h-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-36 pb-10 w-2/3 font-bold text-xs sm:text-lg">
            <div className="bg-white rounded-lg shadow-lg text-center my-auto">
              <a href="mailto:mathes974@gmail.com">
                <img className="w-1/2 mx-auto" src="/mail.png" alt="mail" />
                <div className="text-blue-400 hover:text-blue-500 pb-6 sm:pb-10">
                  mathes974@gmail.com
                </div>
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center my-auto">
              <a href="https://www.linkedin.com/in/ethanmathes">
                <img
                  className="w-1/2 mx-auto"
                  src="/linkedin.png"
                  alt="linkedin"
                />
                <div className="text-blue-400 hover:text-blue-500 pb-6 sm:pb-10">
                  linkedin.com/in/ethanmathes
                </div>
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center my-auto">
              <a href="https://www.github.com/jaxmerius">
                <img className="w-1/2 mx-auto" src="/github.png" alt="github" />
                <div className="text-blue-400 hover:text-blue-500 pb-6 sm:pb-10">
                  github.com/jaxmerius
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

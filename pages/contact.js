import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Contact() {
  return (
    <div className="h-screen">
      <Favicon />
      <Nav currentPage="Contact" />
      <div className="bg-green-200 h-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-36 w-2/3 font-bold text-xs sm:text-lg">
            <div className="bg-white rounded-lg shadow-lg text-center my-auto">
              <a href="mailto:mathes974@gmail.com">
                <img className="w-1/2 mx-auto" src="/mail.png" alt="mail" />
                <div className="pb-6 sm:pb-10">mathes974@gmail.com</div>
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center my-auto">
              <a href="https://www.linkedin.com/in/ethan-mathes-63a85a204">
                <img
                  className="w-1/2 mx-auto"
                  src="/linkedin.png"
                  alt="linkedin"
                />
                <div className="pb-6 sm:pb-10">
                  linkedin.com/in/ethan-mathes-63a85a204
                </div>
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-lg text-center my-auto">
              <a href="https://www.github.com/jaxmerius">
                <img className="w-1/2 mx-auto" src="/github.png" alt="github" />
                <div className="pb-6 sm:pb-10">github.com/jaxmerius</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

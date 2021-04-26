import Import from "../components/import";
import { Body, Bubble, ContentWrapper, Grid, Link } from "../components/styles";

export default function Links() {
  return (
    <div className={Body}>
      <Import currentPage="Links" />
      <div className={ContentWrapper}>
        <div className={`md:grid-cols-3 ${Grid}`}>
          <div className={Bubble}>
            <a href="mailto:mathes974@gmail.com">
              <img className="w-2/3 mx-auto" src="/mail.png" alt="mail" />
              <div className={`mt-4 break-all ${Link}`}>
                mathes974@gmail.com
              </div>
            </a>
          </div>
          <div className={Bubble}>
            <a href="https://www.linkedin.com/in/ethanmathes">
              <img
                className="w-2/3 mx-auto"
                src="/linkedin.png"
                alt="linkedin"
              />
              <div className={`mt-4 break-all ${Link}`}>
                linkedin.com/in/ethanmathes
              </div>
            </a>
          </div>
          <div className={Bubble}>
            <a href="https://www.github.com/jaxmerius">
              <img className="w-2/3 mx-auto" src="/github.png" alt="github" />
              <div className={`mt-4 break-all ${Link}`}>
                github.com/jaxmerius
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

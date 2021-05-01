import { Bubble, Grid, Link } from "../styles/styles";

export default function Links() {
  return (
    <div className={`lg:grid-cols-3 md:grid-cols-2 ${Grid}`}>
      <div className="lg:col-span-3 md:col-span-2 text-4xl font-bold">
        Relevant Links
      </div>
      <div className={Bubble}>
        <a href="mailto:mathes974@gmail.com">
          <img className="w-2/3 mx-auto" src="/mail.png" alt="mail" />
          <div className={`mt-4 break-all ${Link}`}>mathes974@gmail.com</div>
        </a>
      </div>
      <div className={Bubble}>
        <a href="https://www.linkedin.com/in/ethanmathes">
          <img className="w-2/3 mx-auto" src="/linkedin.png" alt="linkedin" />
          <div className={`mt-4 break-all ${Link}`}>
            linkedin.com/in/ethanmathes
          </div>
        </a>
      </div>
      <div className={Bubble}>
        <a href="https://www.github.com/jaxmerius">
          <img className="w-2/3 mx-auto" src="/github.png" alt="github" />
          <div className={`mt-4 break-all ${Link}`}>github.com/jaxmerius</div>
        </a>
      </div>
    </div>
  );
}

import Nav from "../components/nav";
import { bubble, grid, link } from "../styles/styles";
import Link from "next/link";
import classNames from "../utils/classNames";

export default function Overview() {
  const Bubble = ({ title, content, colSpan }) => {
    return (
      <div className={classNames(colSpan, bubble)}>
        <div className="font-bold text-green-400">{title}</div>
        <div className="mt-2">{content}</div>
      </div>
    );
  };

  const Title = ({ value }) => {
    return <div className="md:col-span-6 text-3xl font-bold">{value}</div>;
  };

  return (
    <div className="min-h-screen h-full bg-gray-900 text-gray-300">
      <Nav currentPage="Overview" />
      <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
        <div className={classNames("md:grid-cols-6 ", grid)}>
          <div className="text-green-400 md:col-span-2 text-5xl sm:text-6xl md:text-7xl font-bold flex m-auto">
            About Me
          </div>
          <Bubble
            title=""
            content={
              <div>
                I'm Ethan Mathes, and this is my website! Here you can check out
                a bunch of the cool stuff I've done in college. The projects and
                pieces displayed here are a showcase of my talents, skills, and
                knowledge acquired through my studies. I'm majoring in Games,
                Interactive Media, and Mobile with a minor in Information
                Technology Management. I am also currently working as a software
                engineer at
                <Link href="https://bfitec.com">
                  <a target="_blank" className={link}>
                    {" "}
                    BF Innovative Technologies
                  </a>
                </Link>
                ! So look around, enjoy, and feel free to contact me.
              </div>
            }
            colSpan="md:col-span-4"
          />
          <div className={classNames("md:col-span-6 ", bubble)}>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
              }}
            >
              <iframe
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/FjZ-UJ0WagY"
                allowFullScreen
              />
            </div>
          </div>
          <Title value="Technical Skills" />
          <Bubble
            title="Languages/ Frameworks"
            content="NodeJS, JSON, NextJS, ReactJS, React Native, TypeScript, C#, Docker"
            colSpan="md:col-span-2"
          />
          <Bubble
            title="Art Software"
            content="Photoshop, Illustrator, Animate, Premier Pro, Maya, Substance Painter"
            colSpan="md:col-span-2"
          />
          <Bubble
            title="Other Relevant Software"
            content="Unity, GitHub, GitLab, Visual Studio, AWS, Vercel, Firebase"
            colSpan="md:col-span-2"
          />
          <Title value="Work Experience" />
          <Bubble
            title="Software Engineer (BFITEC, APR 2020-CURRENT)"
            content={
              <div>
                Currently working as a software engineer at
                <Link href="https://bfitec.com">
                  <a target="_blank" className={link}>
                    {" "}
                    BF Innovative Technologies{" "}
                  </a>
                </Link>
                since April of 2020. During my time at this company I've worked
                on a number of projects, including the
                <Link href="https://www.fivepencilmethod.com/">
                  <a target="_blank" className={link}>
                    {" "}
                    Five Pencil Method{" "}
                  </a>
                </Link>
                website, it's companion app, and the
                <Link href="https://pcpureposition.com">
                  <a target="_blank" className={link}>
                    {" "}
                    Pure Position{" "}
                  </a>
                </Link>
                website. I've primarily worked with NodeJS, NextJS, and
                Typescript but I've also worked on projects with Windows .NET
                applications.
              </div>
            }
            colSpan="md:col-span-6"
          />
          <Title value="Education" />
          <Bubble
            title="General Info"
            content="Pursuing a Bachelor of Science degree through the College of
          Innovation and Design at Boise State University. Planning to graduate
          in December of 2021."
            colSpan="md:col-span-3"
          />
          <Bubble
            title="Details"
            content={
              <div>
                <b>Major: </b> Games, Interactive Media, and Mobile
                <br />
                <b>Minor: </b> Information Technology Management
                <br />
                <b>Cumulative GPA: </b> 3.282
              </div>
            }
            colSpan="md:col-span-3"
          />
        </div>
      </div>
    </div>
  );
}

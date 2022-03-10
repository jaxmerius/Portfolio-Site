import Nav from "../components/nav";
import Link from "next/link";

export default function Overview() {
  const Bubble = ({ title, content, colSpan }) => {
    return (
      <div className={colSpan + " bubble"}>
        <div className="font-bold text-secondary-400">{title}</div>
        <div className="mt-2">{content}</div>
      </div>
    );
  };

  const Title = ({ value }) => {
    return <div className="md:col-span-6 text-3xl font-bold">{value}</div>;
  };

  return (
    <div className="min-h-screen h-full bg-primary-900 text-primary-300">
      <Nav currentPage="Overview" />
      <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
        <div className="md:grid-cols-6 custGrid">
          <div className="text-secondary-400 md:col-span-2 text-5xl sm:text-6xl md:text-7xl font-bold flex m-auto">
            About Me
          </div>
          <Bubble
            title=""
            content={
              <div>
                My name is Ethan Mathes, and this is my website! I built it from
                scratch so you can check out a bunch of the cool stuff I've done
                in college, as well as my work experience. The projects and
                pieces displayed here are a showcase of my talents, skills, and
                knowledge acquired through my studies. I have a Bachelor's in
                Games, Interactive Media, and Mobile with a minor in Information
                Technology Management. I am also currently working as a Software
                Engineer at
                <Link href="https://www.stackfoundry.io/">
                  <a target="_blank" className="link">
                    {" "}
                    STACK FOUNDRY
                  </a>
                </Link>
                . Look around, enjoy, and feel free to contact me!
              </div>
            }
            colSpan="md:col-span-4"
          />
          <div className="bubble md:col-span-6">
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
            title="Languages/Frameworks"
            content="Next.js, React, React Native, TypeScript, C#, C++"
            colSpan="md:col-span-2"
          />
          <Bubble
            title="Art Software"
            content="Photoshop, Premier Pro, Maya, Roadkill, Substance Painter"
            colSpan="md:col-span-2"
          />
          <Bubble
            title="Other Relevant Software"
            content="Unity, Unreal Engine, GitHub"
            colSpan="md:col-span-2"
          />
          <Title value="Work Experience" />
          <Bubble
            title="Software Engineer (STACK FOUNDRY, MAY 2020-CURRENT)"
            content={
              <div>
                Currently working as a software engineer at
                <Link href="https://www.stackfoundry.io/">
                  <a target="_blank" className="link">
                    {" "}
                    STACK FOUNDRY{" "}
                  </a>
                </Link>
                since May of 2020. During my time at this company I've worked on
                a number of projects, including the
                <Link href="https://www.fivepencilmethod.com/">
                  <a target="_blank" className="link">
                    {" "}
                    Five Pencil Method{" "}
                  </a>
                </Link>
                website, it's companion app, and the
                <Link href="https://pcpureposition.com">
                  <a target="_blank" className="link">
                    {" "}
                    Pure Position{" "}
                  </a>
                </Link>
                website. I've primarily worked with NextJS and Typescript, but
                I've also worked on Windows .NET applications and used React
                Native to build the aforementioned app.
              </div>
            }
            colSpan="md:col-span-6"
          />
          <Title value="Education" />
          <Bubble
            title="Degree"
            content="Bachelor's of Science degree through the College of
          Innovation and Design at Boise State University."
            colSpan="md:col-span-3"
          />
          <Bubble
            title="Details"
            content={
              <div>
                <b>Major: </b> Games, Interactive Media, and Mobile
                <br />
                <b>Minor: </b> Information Technology Management
              </div>
            }
            colSpan="md:col-span-3"
          />
        </div>
      </div>
    </div>
  );
}

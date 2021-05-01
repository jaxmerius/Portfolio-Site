import { bubble, grid, link } from "../styles/styles";

export default function Overview() {
  const Bubble = ({ title, content, columns }) => {
    return (
      <div className={`md:col-span-${columns} ${bubble}`}>
        <div className="font-bold text-green-400">{title}</div>
        <div className="mt-2">{content}</div>
      </div>
    );
  };

  const Title = ({ value }) => {
    return <div className="md:col-span-6 text-3xl font-bold">{value}</div>;
  };

  return (
    <div className={`md:grid-cols-6 ${grid}`}>
      <div className="text-green-400 md:col-span-2 text-5xl sm:text-6xl md:text-7xl font-bold flex m-auto">
        About Me
      </div>
      <div className={`md:col-span-4 ${bubble}`}>
        <div>
          My name is Ethan Mathes, and this is my website! Here you can check
          out a bunch of the cool stuff I've done in college. The projects and
          pieces displayed here are a showcase of my talents, skills, and
          knowledge acquired through my studies. I'm majoring in Games,
          Interactive Media, and Mobile with a minor in Information Technology
          Management. I am also currently working as a software developer at
          <a href="https://bfitec.com" className={link}>
            {" "}
            BF Innovative Technologies
          </a>
          ! So look around, enjoy, and feel free to contact me.
        </div>
      </div>
      <div className={`md:col-span-6 ${bubble}`}>
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
        columns="2"
      />
      <Bubble
        title="Art Software"
        content="Photoshop, Illustrator, Animate, Premier Pro, Maya, Substance Painter"
        columns="2"
      />
      <Bubble
        title="Other Relevant Software"
        content="Unity, GitHub, GitLab, Visual Studio, AWS, Vercel, Firebase"
        columns="2"
      />
      <Title value="Work Experience" />
      <Bubble
        title="Software Developer (BFITEC, APR 2020-CURRENT)"
        content={
          <div>
            Currently working as a software developer at
            <a href="https://bfitec.com" className={link}>
              {" "}
              BF Innovative Technologies{" "}
            </a>
            since April of 2020. During my time at this company I've worked on a
            number of projects, including the
            <a href="https://www.fivepencilmethod.com/" className={link}>
              {" "}
              Five Pencil Method{" "}
            </a>
            website, it's companion app, and the
            <a href="https://pcpureposition.com" className={link}>
              {" "}
              Pure Position{" "}
            </a>
            website. I've primarily worked with NodeJS, NextJS, and Typescript
            but I've also worked on projects with Windows .NET applications.
          </div>
        }
        columns="6"
      />
      <Title value="Education" />
      <Bubble
        title="General Info"
        content="Pursuing a Bachelor of Science degree through the College of
          Innovation and Design at Boise State University. Planning to graduate
          in May of 2021."
        columns="3"
      />
      <Bubble
        title="Details"
        content={
          <div>
            <b>Major: </b> Games, Interactive Media, and Mobile
            <br />
            <b>Minor: </b> Information Technology Management
            <br />
            <b>Cumulative GPA: </b> 3.343
          </div>
        }
        columns="3"
      />
    </div>
  );
}

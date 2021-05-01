import { Bubble, Grid, Link } from "../styles/styles";

export default function Overview() {
  return (
    <div className={`md:grid-cols-6 ${Grid}`}>
      <div className="text-green-400 md:col-span-2 text-5xl sm:text-6xl md:text-7xl font-bold flex m-auto">
        About Me
      </div>
      <div className={`md:col-span-4 ${Bubble}`}>
        <div>
          My name is Ethan Mathes, and this is my website! Here you can check
          out a bunch of the cool stuff I've done in college. The projects and
          pieces displayed here are a showcase of my talents, skills, and
          knowledge acquired through my studies. I'm majoring in Games,
          Interactive Media, and Mobile with a minor in Information Technology
          Management. I am also currently working as a software developer at
          <a href="https://bfitec.com" className={Link}>
            {" "}
            BF Innovative Technologies
          </a>
          ! So look around, enjoy, and feel free to contact me.
        </div>
      </div>
      <div className={`md:col-span-6 ${Bubble}`}>
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
      <div className="md:col-span-6 text-3xl font-bold">Technical Skills</div>
      <div className={`md:col-span-2 ${Bubble}`}>
        <div className="font-bold text-green-400">Languages/ Frameworks</div>
        <div className="mt-2">
          NodeJS, JSON, NextJS, ReactJS, React Native, TypeScript, C#, Docker
        </div>
      </div>
      <div className={`md:col-span-2 ${Bubble}`}>
        <div className="font-bold text-green-400">Art Software</div>
        <div className="mt-2">
          Photoshop, Illustrator, Animate, Premier Pro, Maya, Substance Painter
        </div>
      </div>
      <div className={`md:col-span-2 ${Bubble}`}>
        <div className="font-bold text-green-400">Other Relevant Software</div>
        <div className="mt-2">
          Unity, GitHub, GitLab, Visual Studio, AWS, Vercel, Firebase
        </div>
      </div>
      <div className="md:col-span-6 text-3xl font-bold">Work Experience</div>
      <div className={`md:col-span-6 ${Bubble}`}>
        <div className="font-bold text-green-400">
          Software Developer (BFITEC, APR 2020-CURRENT)
        </div>
        <div className="mt-2">
          Currently working as a software developer at
          <a href="https://bfitec.com" className={Link}>
            {" "}
            BF Innovative Technologies{" "}
          </a>
          since April of 2020. During my time at this company I've worked on a
          number of projects, including the
          <a href="https://www.fivepencilmethod.com/" className={Link}>
            {" "}
            Five Pencil Method{" "}
          </a>
          website, it's companion app, and the
          <a href="https://pcpureposition.com" className={Link}>
            {" "}
            Pure Position{" "}
          </a>
          website. I've primarily worked with NodeJS, NextJS, and Typescript but
          I've also worked on projects with Windows .NET applications.
        </div>
      </div>
      <div className="md:col-span-6 text-3xl font-bold">Education</div>
      <div className={`md:col-span-3 ${Bubble}`}>
        <div className="font-bold text-green-400">General Info</div>
        <div className="mt-2">
          Pursuing a Bachelor of Science degree through the College of
          Innovation and Design at Boise State University. Planning to graduate
          in May of 2021.
        </div>
      </div>
      <div className={`md:col-span-3 ${Bubble}`}>
        <div className="font-bold text-green-400">Details</div>
        <div className="mt-2">
          <b>Major: </b> Games, Interactive Media, and Mobile
          <br />
          <b>Minor: </b> Information Technology Management
          <br />
          <b>Cumulative GPA: </b> 3.343
        </div>
      </div>
    </div>
  );
}

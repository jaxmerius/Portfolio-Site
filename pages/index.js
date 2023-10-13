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
    <div className="md:grid-cols-6 custGrid">
      <div className="-mt-20 sm:-mt-24 h-[100vh] w-full md:col-span-6 flex justify-center items-center">
        <div className="space-y-4">
          <div className="border-4 border-green-400 w-64 sm:w-72 md:w-96 mx-auto rounded-full overflow-hidden">
            <img src={"/profile.png"} alt="Profile" />
          </div>
          <div className="text-secondary-400 font-bold text-5xl sm:text-6xl md:text-7xl">
            Hi, I'm Ethan!
          </div>
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl">
            I'm a front-end developer with a passion for video games.
          </div>
        </div>
      </div>
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
            title="Demo Video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FjZ-UJ0WagY"
            allowFullScreen
          />
        </div>
      </div>
      <Title value="Work Experience" />
      <Bubble
        title="GAMES TESTER (LIONBRIDGE GAMES, JULY 2022 - PRESENT)"
        content={
          <div>
            Currently working as a Software QA Tester at
            <Link
              href="https://www.lionbridge.com"
              target="_blank"
              className="link"
            >
              <> Lionbridge </>
            </Link>
            since July of 2022. The responsibilities of this job include
            performing directed and ad-hoc functionality testing on third-party
            software with the intent to find and report bugs and other issues.
            Testing is done on current and previous gen game consoles as well as
            PC and mobile devices, and reporting of bugs is done in JIRA. Most
            notably worked on Modern Warfare II (2022). Due to NDA I am unable
            to disclose information regarding other projects.
          </div>
        }
        colSpan="md:col-span-6"
      />
      <Bubble
        title="SOFTWARE ENGINEER (STACK FOUNDRY, MAY 2020-MAY 2022)"
        content={
          <div>
            Worked as a software engineer at
            <Link
              href="https://www.stackfoundry.io/"
              target="_blank"
              className="link"
            >
              <> STACK FOUNDRY </>
            </Link>
            from May of 2020 to May of 2022. During my time at this company I
            worked on a number of projects, including the
            <Link
              href="https://www.fivepencilmethod.com/"
              target="_blank"
              className="link"
            >
              <> Five Pencil Method </>
            </Link>
            website and it's companion app (iOS/
            <Link
              href="https://play.google.com/store/apps/details?id=com.makerstreamer.fivepencilmethod"
              target="_blank"
              className="link"
            >
              Android
            </Link>
            ). Primarily worked with NextJS and Typescript, but also worked on
            Windows .NET applications and used React Native with Expo to build
            the aforementioned app.
          </div>
        }
        colSpan="md:col-span-6"
      />
      <Title value="Education" />
      <Bubble
        title="Degree"
        content="Bachelor's of Science degree through the College of Innovation and Design at Boise State University."
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
        content="Unity, Unreal Engine, GitHub, Jira"
        colSpan="md:col-span-2"
      />
    </div>
  );
}

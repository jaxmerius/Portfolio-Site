import Nav from "../components/nav";
import Footer from "../components/footer";
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
                Technology Management. I am currently working as a Software QA
                Tester at
                <Link
                  href="https://www.lionbridge.com"
                  target="_blank"
                  className="link"
                >
                  <> Lionbridge</>
                </Link>
                . Have a look around, enjoy, and feel free to contact me!
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
            content="Unity, Unreal Engine, GitHub, Jira"
            colSpan="md:col-span-2"
          />
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
                performing directed and ad-hoc functionality testing on
                third-party software with the intent to find and report bugs and
                other issues. Testing is done on current and previous gen game
                consoles as well as PC and mobile devices, and reporting of bugs
                is done in JIRA. Most notably worked on Modern Warfare II
                (2022). Due to NDA I am unable to disclose information regarding
                other projects.
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
                from May of 2020 to May of 2022. During my time at this company
                I worked on a number of projects, including the
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
                ). Primarily worked with NextJS and Typescript, but also worked
                on Windows .NET applications and used React Native with Expo to
                build the aforementioned app.
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
        </div>
      </div>
      <Footer currentPage="Overview" />
    </div>
  );
}

import HeadInfo from "../components/head";
import Nav from "../components/nav";

export default function Overview() {
  return (
    <div className="h-full">
      <title>Ethan Mathes</title>
      <HeadInfo />
      <div className="relative z-50">
        <Nav currentPage="Overview" />
      </div>
      <div className="bg-green-200 h-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-0 pt-32 sm:pt-36 text-sm w-2/3 sm:text-lg z-0">
            <div className="sm:col-span-2">
              <img src="/hey.png" alt="hey" className="w-3/4 mx-auto" />
            </div>
            <div className="sm:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                My name is Ethan Mathes, and this is my website! Here you can
                check out a bunch of the cool stuff I've done in college. The
                projects and pieces displayed here are a showcase of my talents,
                skills, and knowledge acquired through my studies. I'm majoring
                in Games, Interactive Media, and Mobile with a minor in
                Information Technology Management. I'm also currently working as
                a software developer at
                <a
                  href="https://bfitec.com"
                  className="text-blue-400 hover:text-blue-500"
                >
                  {" "}
                  BF Innovative Technologies
                </a>
                ! So look around, enjoy, and feel free to contact me.
              </div>
            </div>
            <div className="sm:col-span-5 bg-white rounded-lg shadow-lg p-4 sm:p-6 sm:mt-10 mt-5">
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
          </div>
        </div>
        <div className="flex justify-center py-10 sm:pt-10">
          <div className="w-2/3 text-center">
            <div className="text-4xl font-bold">Technical Skills</div>
            <div className="grid sm:grid-cols-3 gap-8 text-sm sm:text-lg mt-6">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="font-bold">Languages/ Frameworks</div>
                <div className="mt-2">
                  NodeJS, JSON, NextJS, ReactJS, React Native, TypeScript, C#,
                  Docker
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="font-bold">Art Software</div>
                <div className="mt-2">
                  Photoshop, Illustrator, Animate, Premier Pro, Maya, Substance
                  Painter
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="font-bold">Other Relevant Software</div>
                <div className="mt-2">
                  Unity, GitHub, GitLab, Visual Studio, AWS, Vercel, Firebase
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="w-2/3 text-center">
            <div className="text-4xl font-bold">Work Experience</div>
            <div className="grid gap-8 text-sm sm:text-lg mt-6">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="font-bold">
                  Software Developer (BFITEC, APR 2020-CURRENT)
                </div>
                <div className="mt-2">
                  Currently working as a software developer at
                  <a
                    href="https://bfitec.com"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    {" "}
                    BF Innovative Technologies{" "}
                  </a>
                  since April of 2020. During my time at this company I've
                  worked on a number of projects, including
                  <a
                    href="https://www.fivepencilmethod.com/"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    {" "}
                    Five Pencil Method,{" "}
                  </a>
                  it's companion app, and{" "}
                  <a
                    href="https://pcpureposition.com"
                    className="text-blue-400 hover:text-blue-500"
                  >
                    Pure Position
                  </a>
                  . Throughout my time here I've primarily worked with NodeJS,
                  NextJS, and Typescript but I've also worked on projects with
                  Windows .NET applications.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <div className="w-2/3 text-center">
            <div className="text-4xl font-bold">Education</div>
            <div className="grid sm:grid-cols-2 gap-8 text-sm sm:text-lg mt-6">
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="font-bold">General Info</div>
                <div className="mt-2">
                  Pursuing a Bachelor of Science degree through the College of
                  Innovation and Design at Boise State University. Planning to
                  graduate in May of 2021.
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                <div className="font-bold">Details</div>
                <div className="mt-2">
                  <b>Major: </b> Games, Interactive Media, and Mobile
                  <br />
                  <b>Minor: </b> Information Technology Management
                  <br />
                  <b>Cumulative GPA: </b> 3.343
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

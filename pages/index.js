import Favicon from "../components/favicon";
import Nav from "../components/nav";

export default function Overview() {
  return (
    <div className="h-full sm:h-screen">
      <Favicon />
      <Nav currentPage="Overview" />
      <div className="bg-green-200 h-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 sm:gap-0 pt-32 sm:pt-36 w-2/3 font-bold text-xs sm:text-lg">
            <div className="sm:col-span-2">
              <img src="/hey.png" alt="hey" className="w-3/4 mx-auto" />
            </div>
            <div className="sm:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-visible">
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
          </div>
        </div>
        <div className="flex justify-center py-10 sm:pt-10">
          <div className="w-2/3 text-center">
            <div className="text-4xl font-bold">Technical Skills</div>
            <div className="grid sm:grid-cols-3 gap-8 text-lg mt-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="font-bold">
                  Programming Languages/Frameworks
                </div>
                <div className="mt-2">
                  NodeJS, JSON, NextJS, ReactJS, React Native, TypeScript, C#,
                  Docker
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="font-bold">Art Software</div>
                <div className="mt-2">
                  Photoshop, Illustrator, Animate, Premier Pro, Maya, Substance
                  Painter
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="font-bold">Other Relevant Software</div>
                <div className="mt-2">
                  Unity, GitHub, GitLab, Visual Studio, AWS, Vercel, Firebase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

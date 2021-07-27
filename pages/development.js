import Nav from "../components/nav";
import Link from "next/link";
import { bubble, grid, link } from "../styles/styles";
import videos from "../public/data/videos.json";
import classNames from "../utils/classNames";

export default function Development() {
  return (
    <div className="min-h-screen h-full bg-gray-900 text-gray-300">
      <Nav currentPage="Development" />
      <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
        <div className={classNames("lg:grid-cols-2 ", grid)}>
          <div className="lg:col-span-2 text-4xl font-bold">
            Development Projects
          </div>
          {videos.map((video) => {
            return (
              <div className={bubble}>
                <div className="text-green-400 text-3xl font-bold">
                  {video.title}
                </div>
                <div>
                  <div
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%",
                      height: 0,
                      margin: "1rem auto",
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
                      src={video.link}
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className="flex-grow px-2">{video.description}</div>
                <hr className="my-4 border border-green-800" />
                {video.site ? (
                  <div className="grid grid-cols-2">
                    <Link href={video.repo}>
                      <a target="_blank" className={link}>
                        Github
                      </a>
                    </Link>
                    <Link href={video.site}>
                      <a target="_blank" className={link}>
                        Site
                      </a>
                    </Link>
                  </div>
                ) : (
                  <Link href={video.repo}>
                    <a target="_blank" className={link}>
                      Github
                    </a>
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

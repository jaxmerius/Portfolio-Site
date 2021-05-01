import { bubble, grid, link } from "../styles/styles";
import videos from "../public/data/videos.json";

export default function Development() {
  return (
    <div className={`lg:grid-cols-2 ${grid}`}>
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
                <a href={video.repo} className={link}>
                  Github
                </a>
                <a href={video.site} className={link}>
                  Site
                </a>
              </div>
            ) : (
              <a href={video.repo} className={link}>
                Github
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

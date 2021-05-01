import { Bubble, Grid, Link } from "../styles/styles";
import Videos from "../public/data/videos.json";

export default function Development() {
  return (
    <div className={`lg:grid-cols-2 ${Grid}`}>
      <div className="lg:col-span-2 text-4xl font-bold">
        Development Projects
      </div>
      {Videos.map((video) => {
        return (
          <div className={Bubble}>
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
                <a href={video.repo} className={Link}>
                  Github
                </a>
                <a href={video.site} className={Link}>
                  Site
                </a>
              </div>
            ) : (
              <a href={video.repo} className={Link}>
                Github
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

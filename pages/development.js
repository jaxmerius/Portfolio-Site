import Import from "../components/import";
import { Body, Bubble, ContentWrapper, Grid, Link } from "../components/styles";
import Videos from "../public/data/videos.json";

export default function Development() {
  return (
    <div className={Body}>
      <Import currentPage="Development" />
      <div className={ContentWrapper}>
        <div className={`md:grid-cols-2 ${Grid}`}>
          {Videos.map((video) => {
            return (
              <div className={Bubble}>
                <div className="text-3xl font-bold">{video.title}</div>
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
                <div className="flex-grow">{video.description}</div>
                <hr className="my-4" />
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
      </div>
    </div>
  );
}

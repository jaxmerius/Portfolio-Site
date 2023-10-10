import Container from "../components/container";
import Link from "next/link";
import videos from "../public/data/videos.json";

export default function Development() {
  return (
    <Container currentPage={"Development"}>
      <div className="lg:grid-cols-2 custGrid">
        <div className="lg:col-span-2 text-4xl font-bold">
          Development Projects
        </div>
        {videos.map((video, idx) => {
          return (
            <div key={idx} className="bubble">
              <div className="text-secondary-400 text-3xl font-bold">
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
              <hr className="my-4 border border-secondary-800" />
              {video.site ? (
                <div className="grid grid-cols-2">
                  <Link href={video.repo} target="_blank" className="link">
                    Github
                  </Link>
                  <Link href={video.site} target="_blank" className="link">
                    Site
                  </Link>
                </div>
              ) : (
                <Link href={video.repo} target="_blank" className="link">
                  Github
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

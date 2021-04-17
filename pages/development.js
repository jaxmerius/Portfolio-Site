import HeadInfo from "../components/head";
import Nav from "../components/nav";
import Videos from "../public/data/videos.json";

export default function Development() {
  return (
    <div className="h-full">
      <HeadInfo />
      <div className="relative z-50">
        <Nav currentPage="Development" />
      </div>
      <div className="bg-green-200 h-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 pb-10 pt-36 w-2/3 font-bold text-xs sm:text-lg z-0">
            {Videos.map((video) => {
              return (
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                  <div className="text-center text-base sm:text-2xl">
                    {video.title}
                  </div>
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
                  <div className="text-center mb-auto">{video.description}</div>
                  <hr className="my-4" />
                  {video.site ? (
                    <div className="text-center grid grid-cols-2">
                      <a
                        href={video.repo}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Github
                      </a>
                      <a
                        href={video.site}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Site
                      </a>
                    </div>
                  ) : (
                    <div className="text-center">
                      <a
                        href={video.repo}
                        className="text-blue-400 hover:text-blue-500"
                      >
                        Github
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

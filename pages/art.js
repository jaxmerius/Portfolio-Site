import Favicon from "../components/favicon";
import Nav from "../components/nav";
import ArtData from "../public/data/art.json";
import { useState } from "react";

export default function Art() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();

  return (
    <div className="h-full">
      <Favicon />
      <Nav currentPage="Art" />
      <div className="bg-green-200 h-full">
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex fixed inset-0 z-50"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto max-w-sm sm:max-w-3xl">
                <div className="rounded-lg bg-white">
                  <div>
                    <button
                      className="w-full text-red-800 text-3xl sm:text-4xl font-bold text-right pr-2 sm:pr-6 hover:text-red-400"
                      onClick={() => setShowModal(false)}
                    >
                      ×
                    </button>
                  </div>
                  <div className="pt-1 sm:pt-2 pb-2 sm:pb-6 px-2 sm:px-6">
                    <img src={"/art/" + modalImg} alt={modalImg} />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-36 pb-10 w-2/3 font-bold text-xs sm:text-lg">
            {ArtData.map((img) => {
              var source = "/art/" + img.name;
              return (
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
                  <div className="text-center text-base sm:text-2xl">
                    {img.title}
                  </div>
                  <img
                    src={source}
                    alt={img.name}
                    className="sm:h-48 mx-auto my-4 cursor-pointer"
                    onClick={() => {
                      setModalImg(img.name);
                      setShowModal(true);
                    }}
                  />
                  <div className="text-center">{img.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

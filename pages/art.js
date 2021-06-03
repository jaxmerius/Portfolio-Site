import Nav from "../components/nav";
import { useState } from "react";
import { bubble, grid } from "../styles/styles";
import ArtData from "../public/data/art.json";

export default function Art() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();

  return (
    <div className="min-h-screen h-full bg-gray-900 text-gray-300">
      <Nav currentPage="Art" />
      <div className="h-full flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-24 pb-5 sm:pb-10">
        <div className={`lg:grid-cols-3 md:grid-cols-2 ${grid}`}>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex fixed inset-0 z-50"
                onClick={() => setShowModal(false)}
              >
                <div className="relative w-auto max-w-sm sm:max-w-l md:max-w-xl lg:max-w-3xl">
                  <div className={bubble}>
                    <button
                      className="absolute right-5 sm:right-7 md:right-8 top-3 sm:top-5 focus:outline-none text-red-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold hover:text-red-500"
                      onClick={() => setShowModal(false)}
                    >
                      &times;
                    </button>
                    <img src={"/art/" + modalImg} alt={modalImg} />
                  </div>
                </div>
              </div>
              <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          <div className="lg:col-span-3 md:col-span-2 text-4xl font-bold">
            Artwork
          </div>
          {ArtData.map((img) => {
            return (
              <div className={`relative z-0 flex flex-col ${bubble}`}>
                <div className="text-green-400 text-3xl font-bold flex-grow">
                  {img.title}
                </div>
                <div className="my-4 flex-grow">
                  <img
                    src={"/art/" + img.name}
                    alt={img.name}
                    className="mx-auto cursor-pointer"
                    onClick={() => {
                      setModalImg(img.name);
                      setShowModal(true);
                    }}
                  />
                </div>
                <div className="px-2">{img.description}</div>
                <img
                  src="/magnify.png"
                  alt="magnify"
                  className="absolute bottom-1.5 md:bottom-2 right-1.5 md:right-2 w-4 md:w-6 cursor-pointer"
                  onClick={() => {
                    setModalImg(img.name);
                    setShowModal(true);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

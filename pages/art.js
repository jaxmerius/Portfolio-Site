import Import from "../components/import";
import { Body, Bubble, ContentWrapper, Grid } from "../components/styles";
import ArtData from "../public/data/art.json";
import Image from "next/image";
import LazyLoad from "react-lazyload";
import { useState } from "react";

export default function Art() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();

  return (
    <div className={Body}>
      <Import currentPage="Art" />
      <div className={ContentWrapper}>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex fixed inset-0 z-50"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto max-w-sm sm:max-w-l md:max-w-xl lg:max-w-3xl">
                <div className={Bubble}>
                  <button
                    className="absolute right-5 sm:right-7 md:right-8 top-3 sm:top-5 focus:outline-none text-red-800 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold hover:text-red-400"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                  <img src={"/art/" + modalImg} alt={modalImg} />
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        <div className={`md:grid-cols-3 ${Grid}`}>
          {ArtData.map((img) => {
            var source = "/art/" + img.name;
            return (
              <div className={`relative z-0 flex flex-col ${Bubble}`}>
                <div className="text-3xl font-bold flex-grow">{img.title}</div>
                <div className="my-4 flex-grow">
                  <LazyLoad>
                    <Image
                      src={source}
                      alt={img.name}
                      className="mx-auto cursor-pointer"
                      width={img.width}
                      height={img.height}
                      layout="responsive"
                      onClick={() => {
                        setModalImg(img.name);
                        setShowModal(true);
                      }}
                    />
                  </LazyLoad>
                </div>
                <div>{img.description}</div>
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

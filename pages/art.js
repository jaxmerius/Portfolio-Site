import { useState } from "react";
import Link from "next/link";
import ArtData from "../public/data/art.json";

export default function Art() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState();

  return (
    <div className="lg:grid-cols-3 md:grid-cols-2 custGrid">
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex fixed inset-0 z-50"
            onClick={() => setShowModal(false)}
          >
            <div className="relative w-auto max-w-sm sm:max-w-l md:max-w-xl lg:max-w-3xl">
              <div className="bubble bg-primary-800">
                <button
                  className="absolute right-0.5 sm:right-0.5 md:right-0 -top-1.5 sm:-top-2 md:-top-2.5 lg:-top-3 focus:outline-none text-red-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold hover:text-red-500"
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
      {ArtData.map((img, idx) => {
        return (
          <div key={idx} className="relative z-0 flex flex-col bubble">
            <div className="text-secondary-400 text-3xl font-bold flex-grow">
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
            {img.links ? (
              <>
                <hr className="my-4 border border-secondary-800" />
                <div className={"grid grid-cols-" + img.links.length}>
                  {img.links.map((item) => {
                    return (
                      <Link
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        className="link"
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : null}
            <img
              src="/magnify.svg"
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
  );
}

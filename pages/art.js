import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const content = {
  art: [
    {
      title: { en: "Boise Philharmonic", es: "Boise Philharmonic" },
      name: "boise_phil.png",
      description: {
        en: "A project in conjunction with the Boise Phil Youth Orchestra, in which I worked with a team of developers and another artist to design the art for an audio visualizer",
        es: "Un proyecto en conjunto con la Boise Phil Youth Orchestra, en el que trabajé con un equipo de desarrolladores y otro artista para diseñar el arte de un visualizador de audio",
      },
      links: [
        {
          name: { en: "KIVI News Article", es: "Artículo de Noticias de KIVI" },
          link: "https://www.kivitv.com/rebound/unique-collab-brings-one-of-a-kind-performance-to-the-valley",
        },
      ],
    },
    {
      title: { en: "City Street", es: "Calle de la Ciudad" },
      name: "city_street.png",
      description: {
        en: "A background I created for an interactive comic I created with a group of fellow students in my GIMM 250 class",
        es: "Un fondo que creé para un cómic interactivo que creé con un grupo de compañeros de mi clase de GIMM 250",
      },
    },
    {
      title: { en: "Character Concept", es: "Concepto de Personaje" },
      name: "concept.png",
      description: {
        en: "A concept character I created for an interactive comic I created with a group of fellow students in my GIMM 250 class",
        es: "Un personaje conceptual que creé para un cómic interactivo que creé con un grupo de compañeros de mi clase de GIMM 250",
      },
    },
    {
      title: {
        en: "Tatooine Street",
        es: "Calle Tatooine",
      },
      name: "tatooine.png",
      description: {
        en: "A drawing of a Tatooine street I created based off of an actual street in Boise for an assignment in my GIMM 200 class",
        es: "Un dibujo de una calle de Tatooine que creé a partir de una calle real en Boise para una tarea en mi clase de GIMM 200",
      },
    },
    {
      title: { en: "Character Concept", es: "Concepto de Personaje" },
      name: "character.png",
      description: {
        en: "A concept character I created for a concepting assignment in my GIMM 200 class",
        es: "Un personaje conceptual que creé para una tarea de conceptualización en mi clase de GIMM 200",
      },
    },
    {
      title: {
        en: "Squid Candle Drawing",
        es: "Vela De Calamar Dibujo",
      },
      name: "squid_candle.png",
      description: {
        en: "An art piece I created for an assignment in my GIMM 200 class in which we were tasked with combining an animal and an inanimate object",
        es: "Una obra de arte que creé para una tarea en mi clase de GIMM 200 en la que se nos asignó la tarea de combinar un animal y un objeto inanimado",
      },
    },
    {
      title: { en: "Character Concept", es: "Concepto de Personaje" },
      name: "suit_man.png",
      description: {
        en: "A concept character I created for a music video project in my GIMM 100 class",
        es: "Un personaje conceptual que creé para un proyecto de vídeo musical en mi clase de GIMM 100",
      },
    },
    {
      title: {
        en: "Monster Movie Poster",
        es: "Cartel de la Película Monstruo",
      },
      name: "poster.png",
      description: {
        en: "A movie poster I created for an assignment in my GIMM 100 class",
        es: "Un póster de película que creé para una tarea en mi clase de GIMM 100",
      },
    },
    {
      title: { en: "Venom Drawing", es: "Venom Dibujo" },
      name: "venom.png",
      description: {
        en: "A drawing of Venom I drew for fun when I got my first drawing tablet",
        es: "Un dibujo de Venom que hice por diversión cuando compré mi primera tableta de dibujo",
      },
    },
    {
      title: { en: "Bruin Tech Sign", es: "Signo Bruin Tech" },
      name: "sign.png",
      description: {
        en: "A sign I created and printed onto vinyl for my senior project in high school, I later hung it in our school's computer science classroom",
        es: "Un letrero que creé e imprimí en vinilo para mi proyecto de último año en la escuela secundaria y luego lo colgué en el aula de informática de nuestra escuela",
      },
    },
    {
      title: { en: "Meh Face", es: "Meh Cara" },
      name: "face.png",
      description: {
        en: "A profile icon I created for myself, which I used to use for all of my profile images across my various social accounts",
        es: "Un ícono de perfil que creé para mí y que solía usar para todas mis imágenes de perfil en mis diversas cuentas sociales",
      },
    },
    {
      title: { en: "Space Scene", es: "Escena Espacial" },
      name: "space.png",
      description: {
        en: "An abstract space scene I created for fun in my early days of learning photoshop",
        es: "Una escena espacial abstracta que creé para divertirme en mis primeros días de aprendizaje de Photoshop",
      },
    },
  ],
  site: { en: "Site", es: "Sitio" },
};

export default function Art() {
  const loc = useRouter().locale;

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
      {content.art.map((img, idx) => {
        return (
          <div key={idx} className="relative z-0 flex flex-col bubble">
            <div className="text-secondary-400 text-3xl font-bold flex-grow">
              {img.title[loc]}
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
            <div className="px-2">{img.description[loc]}</div>
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
                        {item.name[loc]}
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

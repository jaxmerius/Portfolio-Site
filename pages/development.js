import { useRouter } from "next/router";
import Link from "next/link";

const content = {
  projects: [
    {
      title: { en: "Egyptian Conniption", es: "Egyptian Conniption" },
      link: "https://youtube.com/embed/eHKAIl75dvk",
      description: {
        en: "The final game I developed with classmates in GIMM 400, this was the first time we used Unreal Engine.",
        es: "El último juego lo desarrollé con compañeros de clase en GIMM 400, esta fue la primera vez que usamos Unreal Engine.",
      },
      repo: "https://github.com/jaxmerius/Egyptian-Conniption",
    },
    {
      title: { en: "Spooky Hoops", es: "Spooky Hoops" },
      link: "https://youtube.com/embed/eCW8auEoaaY",
      description: {
        en: "Another game I developed with classmates in GIMM 400. For this one we used a Python-based machine learning script to control the AI opponent.",
        es: "Otro juego que desarrollé con compañeros de clase en GIMM 400. Para este usamos un script de aprendizaje automático basado en Python para controlar al oponente de IA.",
      },
      repo: "https://github.com/jaxmerius/Spooky-Hoops",
    },
    {
      title: { en: "Defense of the Core", es: "Defense of the Core" },
      link: "https://youtube.com/embed/H8lzY8Y0SPw",
      description: {
        en: "A game I developed with classmates in my GIMM 400 class. We built it in Unity, using state machines for the enemies.",
        es: "Un juego que desarrollé con compañeros de mi clase de GIMM 400. Lo construimos en Unity, usando máquinas de estado para los enemigos.",
      },
      repo: "https://github.com/jaxmerius/Defense-of-the-Core",
    },
    {
      title: {
        en: "Personal Space AR App",
        es: "Aplicación AR de Espacio Personal",
      },
      link: "https://youtube.com/embed/VaHHNnSRvZw",
      description: {
        en: "An app I developed with classmates in my GIMM 310 class using Unity's AR Kit. The goal of this project was to help children with autism and other learning disabilities understand personal space.",
        es: "Una aplicación que desarrollé con compañeros de mi clase de GIMM 310 usando el AR Kit de Unity. El objetivo de este proyecto era ayudar a los niños con autismo y otras dificultades de aprendizaje a comprender el espacio personal.",
      },
      repo: "https://github.com/jaxmerius/Personal-Space-AR",
    },
    {
      title: { en: "Field of War", es: "Field of War" },
      link: "https://youtube.com/embed/sXQAof3vDtM",
      description: {
        en: "A game I developed with classmates in my GIMM 250 class, built in Adobe Animate. This was the first group development project I worked on in the GIMM program.",
        es: "Un juego que desarrollé con compañeros de mi clase de GIMM 250, creado en Adobe Animate. Este fue el primer proyecto de desarrollo grupal en el que trabajé en el programa GIMM.",
      },
      repo: "https://github.com/jaxmerius/Field-Of-War",
    },
    {
      title: {
        en: "Driving Simulator (St. Lukes)",
        es: "Simulador de Manejo (St. Lukes)",
      },
      link: "https://youtube.com/embed/FUyO5W_DYKU",
      description: {
        en: "The final project for my Engineering 130 class freshman year. We built a driving simulator in Unity to help rehabilitate patients who had suffered neurological trauma.",
        es: "El proyecto final para mi primer año de Ingeniería 130. Construimos un simulador de conducción en Unity para ayudar a rehabilitar a pacientes que habían sufrido un trauma neurológico.",
      },
      repo: "https://github.com/jaxmerius/Driving-Simulator",
      site: {
        text: { en: "Site", es: "Sitio" },
        link: "https://sites.google.com/u.boisestate.edu/thereactionsimulator",
      },
    },
    {
      title: { en: "Goblin Defense", es: "Goblin Defense" },
      link: "https://youtube.com/embed/Re_zsRh819Q",
      description: {
        en: "The first game I developed upon entering the GIMM program at Boise State. I built it in Adobe Animate in my GIMM 110 class freshman year.",
        es: "El primer juego que desarrollé al ingresar al programa GIMM en Boise State. Lo construí en Adobe Animate en mi primer año de clase GIMM 110.",
      },
      repo: "https://github.com/jaxmerius/Goblin-Defense",
    },
  ],
};

export default function Development() {
  const loc = useRouter().locale;

  return (
    <div className="lg:grid-cols-2 custGrid">
      {content.projects.map((video, idx) => {
        return (
          <div key={idx} className="bubble">
            <div className="text-secondary-400 text-3xl font-bold">
              {video.title[loc]}
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
            <div className="flex-grow px-2">{video.description[loc]}</div>
            <hr className="my-4 border border-secondary-400" />
            {video.site ? (
              <div className="grid grid-cols-2">
                <Link href={video.repo} target="_blank" className="link">
                  Github
                </Link>
                <Link href={video.site} target="_blank" className="link">
                  {video.site.text[loc]}
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
  );
}

import { useRouter } from "next/router";
import Link from "next/link";

const content = {
  hero: {
    header: { en: "Hi, I'm Ethan!", es: "¡Hola, soy Ethan!" },
    sub: {
      en: "I'm a front-end developer with a passion for video games.",
      es: "Soy un desarrollador front-end apasionado por los videojuegos.",
    },
  },
  experience: {
    header: { en: "Work Experience", es: "Experiencia Laboral" },
    jobs: {
      lionbridge: {
        header: {
          en: "GAMES TESTER (LIONBRIDGE GAMES, JULY 2022 - PRESENT)",
          es: "PROBADOR DE JUEGOS (LIONBRIDGE GAMES, JULIO 2022 - PRESENTE)",
        },
        desc: {
          first: {
            en: "Currently working as a Software QA Tester at",
            es: "Actualmente trabajando como Tester de QA de Software en",
          },
          second: {
            en: "since July of 2022. The responsibilities of this job include performing directed and ad-hoc functionality testing on third-party software with the intent to find and report bugs and other issues. Testing is done on current and previous gen game consoles as well as PC and mobile devices, and reporting of bugs is done in JIRA. Most notably worked on Modern Warfare II (2022). Due to NDA I am unable to disclose information regarding other projects.",
            es: "desde julio de 2022. Las responsabilidades de este trabajo incluyen realizar pruebas de funcionalidad dirigidas y ad hoc en software de terceros con la intención de encontrar e informar errores y otros problemas. Las pruebas se realizan en consolas de juegos de generación actual y anterior, así como en PC y dispositivos móviles, y los informes de errores se realizan en JIRA. Más destacado trabajado en Modern Warfare II (2022). Debido a la NDA, no puedo revelar información sobre otros proyectos.",
          },
        },
      },
      stackfoundry: {
        header: {
          en: "SOFTWARE ENGINEER (STACK FOUNDRY, MAY 2020-MAY 2022)",
          es: "INGENIERO DE SOFTWARE (STACK FOUNDRY, MAYO 2020-MAYO 2022)",
        },
        desc: {
          first: {
            en: "Worked as a software engineer at",
            es: "Trabajó como ingeniero de software en",
          },
          second: {
            en: "from May of 2020 to May of 2022. During my time at this company I worked on a number of projects, including the",
            es: "de mayo de 2020 a mayo de 2022. Durante mi tiempo en esta empresa trabajé en varios proyectos, incluido el",
          },
          third: {
            en: "website and it's companion app (iOS/Android). Primarily worked with Next.js and Typescript, but also worked on Windows .NET applications and used React Native with Expo to build the aforementioned app.",
            es: "sitio web y su aplicación complementaria (iOS/Android). Trabajé principalmente con Next.js y Typecript, pero también trabajé en aplicaciones Windows .NET y usé React Native con Expo para crear la aplicación antes mencionada.",
          },
        },
      },
    },
  },
  education: {
    header: { en: "Education", es: "Educación" },
    degree: {
      header: { en: "Degree", es: "Título" },
      desc: {
        en: "Bachelor of Science through the College of Innovation and Design at Boise State University.",
        es: "Licenciatura en Ciencias a través de la Facultad de Innovación y Diseño de la Boise State University.",
      },
    },
    details: {
      header: { en: "Details", es: "Detalles" },
      desc: {
        first: {
          title: { en: "Major: ", es: "Especializarse en Estudios: " },
          body: {
            en: "Games, Interactive Media, and Mobile",
            es: "Juegos, Medios Interactivos y Dispositivos Móviles",
          },
        },
        second: {
          title: { en: "Minor: ", es: "Menor: " },
          body: {
            en: "Information Technology Management",
            es: "Gestión de Tecnologías de la Información",
          },
        },
      },
    },
  },
  skills: {
    header: { en: "Technical Skills", es: "Habilidades Técnicas" },
    types: {
      languages: { en: "LANGUAGES/FRAMEWORKS", es: "IDIOMAS/MARCOS" },
      art: { en: "ART SOFTWARE", es: "SOFTWARE DE ARTE" },
      other: {
        en: "OTHER RELEVANT SOFTWARE",
        es: "OTROS SOFTWARE RELEVANTES",
      },
    },
  },
};

export default function Overview() {
  const loc = useRouter().locale;

  const Bubble = ({ title, content, colSpan }) => {
    return (
      <div className={colSpan + " bubble"}>
        <div className="font-bold text-secondary-400 uppercase">{title}</div>
        <div className="mt-2">{content}</div>
      </div>
    );
  };

  const Title = ({ value }) => {
    return (
      <div className="md:col-span-6 text-3xl font-bold uppercase">{value}</div>
    );
  };

  return (
    <div className="md:grid-cols-6 custGrid">
      <div className="-mt-20 sm:-mt-24 h-[100vh] w-full md:col-span-6 flex justify-center items-center">
        <div className="space-y-4">
          <div className="border-4 border-green-400 w-64 sm:w-72 md:w-96 mx-auto rounded-full overflow-hidden">
            <img src={"/profile.png"} alt="Profile" />
          </div>
          <div className="text-secondary-400 font-bold text-5xl sm:text-6xl md:text-7xl">
            {content.hero.header[loc]}
          </div>
          <div className="font-bold text-2xl sm:text-3xl md:text-4xl">
            {content.hero.sub[loc]}
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
        }}
        className="bubble md:col-span-6 overflow-hidden"
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Demo Video"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FjZ-UJ0WagY"
          allowFullScreen
        />
      </div>
      <Title value={content.experience.header[loc]} />
      <Bubble
        title={content.experience.jobs.lionbridge.header[loc]}
        content={
          <div>
            {content.experience.jobs.lionbridge.desc.first[loc]}
            <Link
              href="https://www.lionbridge.com"
              target="_blank"
              className="link"
            >
              <> Lionbridge </>
            </Link>
            {content.experience.jobs.lionbridge.desc.second[loc]}
          </div>
        }
        colSpan="md:col-span-6"
      />
      <Bubble
        title={content.experience.jobs.stackfoundry.header[loc]}
        content={
          <div>
            {content.experience.jobs.stackfoundry.desc.first[loc]}
            <Link
              href="https://www.stackfoundry.io/"
              target="_blank"
              className="link"
            >
              <> STACK FOUNDRY </>
            </Link>
            {content.experience.jobs.stackfoundry.desc.second[loc]}
            <Link
              href="https://www.fivepencilmethod.com/"
              target="_blank"
              className="link"
            >
              <> Five Pencil Method </>
            </Link>
            {content.experience.jobs.stackfoundry.desc.third[loc]}
          </div>
        }
        colSpan="md:col-span-6"
      />
      <Title value={content.education.header[loc]} />
      <Bubble
        title={content.education.degree.header[loc]}
        content={content.education.degree.desc[loc]}
        colSpan="md:col-span-3"
      />
      <Bubble
        title={content.education.details.header[loc]}
        content={
          <div>
            <b>{content.education.details.desc.first.title[loc]}</b>
            {content.education.details.desc.first.body[loc]}
            <br />
            <b>{content.education.details.desc.second.title[loc]}</b>
            {content.education.details.desc.second.body[loc]}
          </div>
        }
        colSpan="md:col-span-3"
      />
      <Title value={content.skills.header[loc]} />
      <Bubble
        title={content.skills.types.languages[loc]}
        content="JavaScript, TypeScript, React, React Native, Next.js, C#, C++"
        colSpan="md:col-span-2"
      />
      <Bubble
        title={content.skills.types.art[loc]}
        content="Photoshop, Premier Pro, Maya, Roadkill, Substance Painter"
        colSpan="md:col-span-2"
      />
      <Bubble
        title={content.skills.types.other[loc]}
        content="Unity, Unreal Engine, GitHub, Jira"
        colSpan="md:col-span-2"
      />
    </div>
  );
}

import Favicon from "../components/favicon";
import Nav from "../components/nav";

const imgs = [
  {
    name: "city_street.png",
    description:
      "A background I created for an interactive comic I created with a group of fellow students in my GIMM 250 class",
  },
  {
    name: "concept.png",
    description:
      "A concept character I created for an interactive comic I created with a group of fellow students in my GIMM 250 class",
  },
  {
    name: "face.png",
    description:
      "A profile icon I created for myself, which I used to use for all of my profile images across my various social accounts",
  },
  {
    name: "final.png",
    description:
      "A concept character I created for an concepting assignment in my GIMM 200 class",
  },
  {
    name: "poster.png",
    description:
      "A movie poster I created for an assignment in my GIMM 100 class",
  },
  {
    name: "sign.png",
    description:
      "A sign I created and printed onto vinyl for my senior project in high school, I later hung it in our school's computer science classroom",
  },
  {
    name: "space.png",
    description:
      "An abstract space scene I created for fun in my early days of learning photoshop",
  },
  {
    name: "squid_candle.png",
    description:
      "An art piece I created for an assignment in my GIMM 200 class in which we were tasked with combining an animal and an inanimate object",
  },
  {
    name: "suit_man.png",
    description:
      "A concept character I created for a music video project in my GIMM 100 class",
  },
  {
    name: "tatooine.png",
    description:
      "A drawing of a Tatooine street I created based off of an actual street in Boise for an assignment in my GIMM 200 class",
  },
  {
    name: "venom.png",
    description:
      "A drawing of Venom I drew for fun when I got my first drawing tablet",
  },
];

export default function Art() {
  return (
    <div className="h-full">
      <Favicon />
      <Nav currentPage="Art" />
      <div className="bg-green-200 h-full">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-36 pb-10 w-2/3 font-bold text-xs sm:text-lg">
            {imgs.map((img) => {
              var source = "/art/" + img.name;
              return (
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={source}
                    alt={img}
                    className="sm:h-48 mx-auto mb-4"
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

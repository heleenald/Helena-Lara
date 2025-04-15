import { useState } from "react";

// Imagenes por grupo
const work1 = ["acrilico_72", "beso_72", "boli_72", "gatete_72"];
const work2 = ["ocoa1_72", "ocoa2_72", "ocoa3_72", "ocoa4_72", "ocoa5_72", "ocoa6_72", "ocoa7_72", "ocoa8_72", "ocoa9_72", "ocoa10_72", "ocoa11_72", "ocoa12_72", "ocoa13_72", "ocoa14_72"];
const work3 = ["guy1", "guy2", "guy3", "guy4", "guy5", "guy6", "guy7", "guy8", "guy9", "guy10"];
const work4 = ["bodegon1", "retrato1", "bodegon2", "retrato2", "bodegon3", "retrato3", "bodegon4", "retrato4"];
const work5 = ["36dt1", "36dt2", "36dt3"];
const work6 = ["sorpresa_72", "mockupsorpresa_72", "mockupsorpresas_72"];
const work7 = ["pam1", "pam2", "pam3", "pam4", "pam5", "pam6", "pam7", "pam8","pam9", "pam10", "pam11"];

// Textos por imagen
const captions1 = ["Acrylic on canvas, 20x20cm", "Chinese ink on paper, 42x20cm", "Ballpointpen on cardboard, 30x70cm", "'Collage' - Charcoal and pastels on paper, 100x70cm"];
const captions2 = ["", "Moodboard", "Colour palettes", "Logo", "Typografy", "Adaptability", "Logo responsive", "Graphic elements", "Mockups chocolate bars", "Mockup bags", "Mockup box", "Mockup box", "Mockup flyer", "Mockup flyer"];
const captions3 = ["Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work", "Inspired in Guy Bourdin's work"];
const captions4 = ["Still life 1", "Portrait 1", "Still life 2", "Portrait 2", "Still life 3", "Portrait 3", "Still life 4", "Portrait 4"];
const captions5 = ["Theme: 'Ca' la iaia' ('Grandma's house')", "Theme: 'Ca' la iaia' ('Grandma's house')", "Theme: 'Ca' la iaia' ('Grandma's house')"];
const captions6 = ["Poster 'Surprise'", "Mockup final poster", "Mockups proposals"];
const captions7 = ["", "Concept", "Graphic elements", "Colour palette","Typography", "Poster", "Poster", "Social Media", "Flyers", "Postcards", "Merchandising"  ];

export const Primus = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);
  const [index5, setIndex5] = useState(0);
  const [index6, setIndex6] = useState(0);
  const [index7, setIndex7] = useState(0);

  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-white min-h-screen text-center p-4 pt-28">
      
      <div>
        <h1 className="text-3xl">As you scroll down, you will find a selection of projects I have worked on during my studies.</h1>
      </div>

      {[
        { work: work1, index: index1, setIndex: setIndex1, label: "Background in Fine Arts (2022-2023)", captions: captions1 },
        { work: work2, index: index2, setIndex: setIndex2, label: "Branding for OCOA (2024)", captions: captions2 },
        { work: work3, index: index3, setIndex: setIndex3, label: "Photography (2024)", captions: captions3 },
        { work: work4, index: index4, setIndex: setIndex4, label: "Photography (2024)", captions: captions4 },
        { work: work5, index: index5, setIndex: setIndex5, label: "36 days of Type - 3 letter sample (2024)", captions: captions5 },
        { work: work6, index: index6, setIndex: setIndex6, label: "Graphic Design - Poster (2025)", captions: captions6 },
        { work: work7, index: index7, setIndex: setIndex7, label: "Graphic Design - Branding for 'PAM!'(2025)", captions: captions7 }
      ].map(({ work, index, setIndex, label, captions }, i) => (
        <section key={i} className="relative flex items-center justify-center mt-20 w-full max-w-[600px]">

          {/* FLECHA IZQ */}
          <svg
            onClick={() => index > 0 && setIndex(index - 1)}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer text-gray-700 hover:text-white transition z-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>

          {/* CAJA IMAGEN + TEXTO */}
          <div className="flex flex-col items-center gap-4 w-[90%] max-w-[500px]">
            <div className="relative w-full h-[500px] bg-gray-200 rounded-lg shadow-lg overflow-hidden group flex items-center justify-center">
              {index === 0 && (
                <div className="absolute inset-0 bg-[var(--color-favred)] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-xl font-bold">{label}</span>
                </div>
              )}
              <img
                src={`public/imagines/work/${work[index]}.jpg`}
                alt={`Obra ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-contain transition-opacity duration-500 ease-in-out opacity-0"
                onLoad={(e) => e.currentTarget.classList.add("opacity-100")}
              />
            </div>
            <p className="text-lg text-gray-800">{captions[index]}</p>
          </div>

          {/* FLECHA DCHA */}
          <svg
            onClick={() => index < work.length - 1 && setIndex(index + 1)}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer text-gray-700 hover:text-white transition"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>

        </section>
      ))}
    </div>
  );
};

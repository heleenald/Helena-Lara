import { useState } from "react";

const work1 = ["acrilico_72", "beso_72", "boli_72", "gatete_72"];
const work2 = ["ocoa1_72", "ocoa2_72", "ocoa3_72", "ocoa4_72", "ocoa5_72", "ocoa6_72", "ocoa7_72", "ocoa8_72", "ocoa9_72", "ocoa10_72", "ocoa11_72", "ocoa12_72", "ocoa13_72", "ocoa14_72"];
const work3 = ["guy1", "guy2", "guy3", "guy4", "guy5", "guy6", "guy7", "guy8", "guy9"];
const work4 = ["bodegon1", "retrato1", "bodegon2", "retrato2", "bodegon3", "retrato3", "bodegon4", "retrato4"];
const work5 = ["sorpresa_72", "mockupsorpresa_72", "mockupsorpresas_72"];

export const Primus = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);
  const [index5, setIndex5] = useState(0);

  return (
    <div className="font-montserrat flex flex-col items-center justify-center bg-white min-h-screen text-center p-4 pt-28">
      
      <div>
        <h1 className="text-3xl">As you scroll down, you will find a selection of projects I have worked on during my studies.</h1>
      </div>

      {/* CARRUSELES */}
      {[{ work: work1, index: index1, setIndex: setIndex1, label: "Background in Fine Arts" },
        { work: work2, index: index2, setIndex: setIndex2, label: "Branding for OCOA" },
        { work: work3, index: index3, setIndex: setIndex3, label: "Photography" },
        { work: work4, index: index4, setIndex: setIndex4, label: "Photography" },
        { work: work5, index: index5, setIndex: setIndex5, label: "Graphic Design - Poster" }]
        .map(({ work, index, setIndex, label }, i) => (
        <section key={i} className="relative flex items-center justify-center mt-20 w-full max-w-[600px]">
          
          {/* FLECHA IZQ */}
          <svg
            onClick={() => index > 0 && setIndex(index - 1)}
            className="absolute left-2 md:left-[-60px] top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer text-gray-700 hover:text-white transition z-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
          >
            <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
          </svg>

          {/* IMAGENES */}
          <div className="relative flex items-center justify-center w-[90%] max-w-[500px] h-[500px] bg-gray-200 rounded-lg shadow-lg overflow-hidden group">
            {index === 0 && (
              <div className="absolute inset-0 bg-[var(--color-favred)] bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-xl font-bold">{label}</span>
              </div>
            )}
            <img
              src={`./imagines/work/${work[index]}.jpg`}
              alt={`Obra ${index + 1}`}
              className="w-auto h-auto max-w-full max-h-full object-scale-down"
            />
          </div>

          {/* FLECHA DCHA */}
          <svg
            onClick={() => index < work.length - 1 && setIndex(index + 1)}
            className="absolute right-2 md:right-[-60px] top-1/2 transform -translate-y-1/2 w-10 h-10 cursor-pointer text-gray-700 hover:text-white transition"
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

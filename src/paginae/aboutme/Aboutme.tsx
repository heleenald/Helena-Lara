import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export const AboutMe = () => {
  const [imageSection, setImageSection] = useState("/imagines/me/helena2.jpg");
  const textContainerRef = useRef(null);

  return (
    <section className="font-dmsans text-black pt-32  md:pt-40 pb-16 h-auto w-full flex flex-col justify-center items-center text-left px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full max-w-6xl mx-auto">
        
        {/* TEXTO */}
        <div className="w-full md:w-2/3 flex flex-col justify-center self-stretch order-1">
          <h1 className="font-dmsans font-black text-4xl md:text-5xl lg:text-6xl pb-4">
            Creative thinker, passionate about art in every form
          </h1>
          <p className="font-montserrat text-xl md:text-2xl lg:text-3xl pb-6">
            I'm constantly exploring all possible paths to find my own in the world of graphic design.
          </p>

          {/* BOTÓN */}
          <Link to="/work" 
                className="bg-white border-[var(--color-favred)] border-2 text-[var(--color-favred)] 
                           items-center justify-center px-4 md:px-5 py-1.5 md:py-2 text-sm md:text-base 
                           rounded-lg cursor-pointer hover:bg-[var(--color-pink)] hover:border-white hover:text-white 
                           font-montserrat w-fit self-center md:self-start mt-6 md:mt-4 order-3 md:order-2 hidden md:block">
            This is what I do
          </Link>
        </div>

        {/* FOTO */}
        <div className="w-full md:w-1/3 flex justify-center self-stretch order-2">
          <img 
            src={imageSection}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-lg shadow-lg transition-all duration-300 hover:scale-105 object-cover"
            onMouseOver={() => setImageSection("/imagines/me/helena1.jpg")}
            onMouseOut={() => setImageSection("/imagines/me/helena2.jpg")}
            loading="lazy"
          />
        </div>

        {/* BOTÓN MÓVILES */}
        <a href="/work"
   className="appearance-none bg-white border-2 border-[#ce0f45] text-[#ce0f45]
              flex items-center justify-center px-4 md:px-5 py-1.5 md:py-2 
              text-sm md:text-base rounded-lg cursor-pointer 
              hover:bg-[#E9C0D8] hover:border-white hover:text-white 
              font-montserrat w-fit self-center md:self-start mt-6 md:mt-4 order-3 md:hidden">
  This is what I do
</a>

      </div>

      {/* TEXTO ESTUDIOS, HABILIDADES Y CUALIDADES */}
      <div ref={textContainerRef} className="pt-55 w-full max-w-4xl mx-auto space-y-12 text-left px-2 md:px-12 md:pt-55 order-2 md:order-1">

        {/* STUDIES */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-pink)]">Studies</h2>
          <p className="font-montserrat text-xl md:text-2xl mt-4">
            <span className="font-bold">Artistic Baccalaureate</span> - Ies Platja Sant Joan, Alicante | 2021-2023
          </p>
          <p className="font-montserrat text-xl md:text-2xl mt-4">
            <span className="font-bold">Degree in Design and Creative Technologies</span> - Technological University of Valencia, Valencia | 2023-Present
          </p>
        </div>

        {/* SKILLS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-pink)]">Skills</h2>
          <p className="font-montserrat text-xl md:text-2xl mt-4">
            Proficient in <span className="font-bold">Adobe Suite</span> (Illustrator, InDesign, Photoshop, Premiere, CameraRaw), with basic programming knowledge in <span className="font-bold">Processing and Visual Studio Code</span>; familiar with traditional artistic techniques.
          </p>
        </div>

        {/* STRENGTHS */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-pink)]">Strengths</h2>
          <p className="font-montserrat text-xl md:text-2xl mt-4">
            Hardworking, disciplined, and responsible, with strong teamwork skills and adaptability. Quick to learn new concepts and tools.
          </p>
        </div>

        {/* BOTÓN CONTACT */}
        <div className="w-full flex justify-end mt-12">
        <a href="/contact"
   className="appearance-none bg-white border-2 border-[#ce0f45] text-[#ce0f45]
              flex items-center justify-center px-4 md:px-5 py-1.5 md:py-2 
              text-sm md:text-base rounded-lg cursor-pointer 
              hover:bg-[#E9C0D8] hover:border-white hover:text-white 
              font-montserrat w-fit mt-6 md:mt-4">
  Contact Me
</a>
        </div>

        {/* BANDA ROSA TEXTO */}
        <div className="w-full bg-[var(--color-pink)] text-white font-black py-12 mt-20 rounded-2xl">
          <div className="max-w-6xl mx-auto px-6 md:px-12 text-2xl md:text-3xl font-montserrat text-center">
            <p>
              But also... I’m originally from  
              <span className="relative inline-block group ml-1">
                <span className="font-bold underline">Alicante</span>
                <div className="absolute left-1/2 top-[-170%] hidden w-40 h-40 rounded-lg shadow-lg opacity-0 transition-all duration-300 transform -translate-x-1/2 group-hover:opacity-100 group-hover:flex justify-center items-center bg-white p-1 border border-gray-300 z-50">
                  <img 
                    src="/imagines/me/helena_alicante.JPG" 
                    alt="Alicante" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </span>,  
              currently studying in Valencia. As an amateur, I enjoy capturing the beauty of my surroundings through  
              <span className="relative inline-block group ml-1">
                <span className="font-bold underline">analog photography</span>
                <div className="absolute left-1/2 top-[-170%] hidden w-40 h-40 rounded-lg shadow-lg opacity-0 transition-all duration-300 transform -translate-x-1/2 group-hover:opacity-100 group-hover:flex justify-center items-center bg-white p-1 border border-gray-300 z-50">
                  <img 
                    src="/imagines/me/analogica.JPG" 
                    alt="Analog Photography" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </span>.  
              I also have a  
              <span className="relative inline-block group ml-1">
                <span className="font-bold underline">dog</span>
                <div className="absolute left-1/2 top-[-170%] hidden w-40 h-40 rounded-lg shadow-lg opacity-0 transition-all duration-300 transform -translate-x-1/2 group-hover:opacity-100 group-hover:flex justify-center items-center bg-white p-1 border border-gray-300 z-50">
                  <img 
                    src="/imagines/me/maya.jpg" 
                    alt="Dog" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </span>, whom I adore, and spend a big part of my time dedicated to  
              <span className="relative inline-block group ml-1">
                <span className="font-bold underline">competitive rowing</span>
                <div className="absolute left-1/2 top-[-170%] hidden w-40 h-40 rounded-lg shadow-lg opacity-0 transition-all duration-300 transform -translate-x-1/2 group-hover:opacity-100 group-hover:flex justify-center items-center bg-white p-1 border border-gray-300 z-50">
                  <img 
                    src="/imagines/me/remo.JPG" 
                    alt="Rowing" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </span>.
            </p>
          </div>
        </div>
      </div>

      {/* Preload hidden images for hover popups */}
      <div className="hidden">
        <img src="/imagines/me/helena_alicante.JPG" alt="Preload Alicante" />
        <img src="/imagines/me/analogica.JPG" alt="Preload Analog" />
        <img src="/imagines/me/maya.jpg" alt="Preload Dog" />
        <img src="/imagines/me/remo.JPG" alt="Preload Rowing" />
        <img src="/imagines/me/helena1.jpg" alt="Preload Hover" />
        <img src="/imagines/me/helena2.jpg" alt="Preload Hover" />
      </div>
    </section>
  );
};

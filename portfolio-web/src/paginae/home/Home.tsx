import { Link } from 'react-router-dom';
import './estilus.module.css';

export const Home = () => {
  return (
    <>
      {/* PRIMER TEXTO */}
      <div className="font-dmsans text-black pt-32 md:pt-32 pb-32 h-screen w-full flex flex-col justify-center items-center text-left px-6 md:px-12">
        <div className="flex flex-col justify-center items-center text-center gap-1">
          
          <h1 className="font-dmsans font-black text-5xl md:text-7xl lg:text-8xl pb-5 md:pb-10">
            Hi! I'm <span className="text-[var(--color-pink)]">Helena Lara</span>
          </h1>

          <p className="font-montserrat text-xl md:text-3xl lg:text-4xl">
            I am a young graphic design student constantly looking for new challenges to expand my knowledge and skills. Welcome!
          </p>


        </div>
      </div>

      {/* BLOQUE CON TEXTO Y FOTO */}
      <div className="mx-6 md:mx-12 border-3 border-[var(--color-pink)] py-12 my-12 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 md:px-8 text-2xl md:text-3xl font-montserrat text-center md:text-start flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6">
          
          {/* TEXTO */}
          <div className="w-full text-center md:text-left md:w-2/3">
            <h1 className="font-dmsans text-4xl md:text-5xl font-black mb-4">
              Nice to meet you, my name is Helena :)
            </h1>

            <p className="font-montserrat text-lg md:text-2xl">
            As a creative thinker, I decided to study graphic design to learn how to bring concepts to life in a unique and artistic way. Along the way, I’ve been working on both real and hypothetical projects, exploring a wide range of techniques.
            </p>
          </div>

          {/* FOTO */}
          <div className="w-full lg:w-1/3 flex justify-center mt-6 lg:mt-0">
            <img
              src="public/imagines/me/helena_valencia.jpg" 
              alt="Helena"
              className="rounded-lg shadow-lg object-cover w-full h-auto max-w-xs md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>

        {/* BOTÓN */}
        <div className="w-full mt-6 lg:mt-4 flex justify-center">
          <Link 
            to="/aboutme" 
            className="bg-white border-[var(--color-favred)] border-2 text-[var(--color-favred)] 
                       flex items-center justify-center px-4 md:px-5 py-1.5 md:py-2 text-sm md:text-base 
                       rounded-lg cursor-pointer hover:bg-[var(--color-pink)] hover:border-white hover:text-white 
                       font-montserrat w-fit self-center">
            This is me!
          </Link>
        </div>
      </div>
    </>
  );
};

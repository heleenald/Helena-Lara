import { Footer } from "../../components";

export const Contact = () => {
  return (
    <div className="font-dmsans text-black pt-32 pb-32 h-screen w-full flex flex-col justify-center items-center text-left px-6 md:px-12">
      <div className="flex flex-col justify-center items-center text-center gap-4 md:gap-6">

        {/* Título principal */}
        <h1 className="font-dmsans text-[var(--color-pink)] font-black text-4xl md:text-6xl lg:text-7xl pb-5 md:pb-8">
          Don't be shy and say hi!
        </h1>

        {/* Subtítulo con detalles de contacto */}
        <h2 className="font-montserrat text-lg md:text-2xl lg:text-3xl pb-5 md:pb-8">
          You can write an email to <span className="font-black">helenalaradols05@gmail.com</span> or follow me on Instagram 
          <span className="font-black text-black"> @heleen.ld</span>
        </h2>

        {/* Llamado a la acción */}
        <p className="font-montserrat text-base md:text-lg lg:text-xl text-black">
          Let's work together!
        </p>

      </div>
      <Footer />
    </div>
  );
};

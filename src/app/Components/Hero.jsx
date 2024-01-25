"use client"
import React from "react";
import Button from "./Button";
import { useForm } from "react-hook-form";


const Hero = () => {
  const { register, handleSubmit, formState:{isSubmitting}, reset } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Data sent to the backend:", data);
    reset();
  };

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 px-8 h-screen bg-gradient-to-r from-[#40c9ff] to-[#e81cff]">
      <div className="flex items-center justify-center flex-col lg:-mt-16">
        <h1 className="font-bold text-2xl p-8">Backend Excellence</h1>
        <p className="text-lg font-light tracking-tight">
          En el mundo del diseño web, somos como héroes digitales. Nuestro
          equipo creativo utiliza habilidades únicas para convertir ideas en
          sitios web sorprendentes. Creamos códigos y diseños con valentía,
          elevando la presencia en línea de cada cliente. Únete a nosotros en
          esta emocionante aventura digital, donde hacemos realidad tus sueños
          en la web. ¡Bienvenido a la excelencia digital!
        </p>
        <div className="w-full flex items-center justify-center mt-2">
          <Button href="https://wa.link/vjs9se">Comenzar Ahora</Button>
        </div>
      </div>
      <div className="hidden lg:flex flex-col mt-32 items-center mx-4">
        <h1 className="font-bold text-2xl p-2">Mandanos un mensaje!!</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-transparent p-16 border-2 rounded-xl border-black flex flex-col gap-2 shadow-xl shadow-black"
        >
          <label className="font-bold text-xl">Nombre:</label>
          <input
            {...register("nombre", {
              required: "Porfavor poner tu nombre",
            })}
            type="text"
            className="outline-none bg-transparent border-b-2 border-b-black text-lg font-semibold focus:border-b-blue-600 transition duration-200"
          />
          
          <label className="font-bold text-xl">Celular:</label>
          <input
            {...register("celu", {
              required: "Porfavor poner un numero de celular",
            })}
            type="text"
            className="outline-none bg-transparent border-b-2 border-b-black text-lg font-semibold focus:border-b-blue-600 transition duration-200"
          />
          <label className="font-bold text-xl">Mensaje:</label>
          <input
            {...register("mensaje", {
              required: "Porfavor poner tu mensaje",
            })}
            type="text"
            className="outline-none bg-transparent border-b-2 border-b-black text-lg font-semibold focus:border-b-blue-600 transition duration-200"
          />
          <Button className="mt-4" href="/"  type="submit" disabled={isSubmitting}>{isSubmitting ? 'Enviando....' : 'Enviar'}</Button>
          
        </form>
      </div>
    </main>
  );
};

export default Hero;

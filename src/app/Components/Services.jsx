import React from "react";
import insightImg from "../../../public/insight.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className="h-screen w-full px-8">
      <h1 className="text-2xl font-bold text-center p-2">Nuestros Servicios</h1>
      <div className="">
        <p className="font-light text-xl">
          En backend excellence ofrecemos varios servicios para que tu empresa
          sigue para adelnte. Usamos la tecnoliga mas moderna para no quedarse
          atras
        </p>
        <div className="flex flex-col lg:grid-cols-3 border-2 items-center justify-center gap-3">
          <div className="text-center p-2">
            <h2>Diseño Web</h2>
            <p>
              Nuestro diseño web se trata de convertir tu idea en algo visible
              en el mundo digital. Esto es muy importante ya que cada dia la
              tecnologia avanza mas y mas y el internet es la cosa mas usada en
              el mundo.
            </p>
            <Image src={insightImg} />
          </div>
          <div>This is the second Service</div>
          <div>This is the third Service</div>
        </div>
      </div>
    </div>
  );
};

export default Services;

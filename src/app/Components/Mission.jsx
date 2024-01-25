import Image from "next/image";
import React from "react";
import insightImg from "../../../public/insight.png";

const Mission = () => {
  return (
    <div className="h-fit w-screen">
      <h2 className="text-center font-bold text-2xl p-2">Tecnologia</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <p className="font-light text-lg p-4 lg:p-16 text-balance">
            Nuestra mission es proporcionar soluciones digitales efectivas y
            personalizadas para satisfacer las necesidades únicas de nuestros
            clientes.Desde el diseño atractivo y funcional hasta la
            implementación de tecnologías avanzadas, la agencia se esfuerza por
            crear sitios web que no solo destaquen visualmente, sino que también
            impulsen el éxito empresarial en línea.Con un enfoque centrado en el
            usuario, la agencia busca mejorar la experiencia de navegación y
            garantizar la accesibilidad, brindando así a nuestros clientes una
            presencia digital sólida y competitiva.
          </p>
        </div>
        <div className="items-center flex flex-col p-2">
          <Image width={450} src={insightImg} />
        </div>
      </div>
    </div>
  );
};

export default Mission;

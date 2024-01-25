import React from "react";
import { DiJsBadge } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiNodejsSmall  } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiReact } from "react-icons/di";

const Tech = () => {
  return (
    <div className="h-fit w-full pb-10">
      <h2 className="text-2xl font-bold text-center">Nuestra Tecnologia</h2>
        <div className="p-4">
          <p className="p-2 font-light text-lg lg:px-24">
            En una era definida por la rápida evolución tecnológica, nuestro
            compromiso de mantenernos a la vanguardia de soluciones de última
            generación ha sido la piedra angular de nuestro éxito. Nuestro
            conjunto tecnológico no es solo una colección de herramientas; es la
            sinfonía de precisión, creatividad y eficiencia que nos capacita
            para dar vida a tus visiones digitales. En BackendExcellence,
            creemos en el poder de la sinergia entre diferentes tecnologías.
            Nuestro conjunto tecnológico cuidadosamente seleccionado es una
            mezcla armoniosa de los últimos marcos de trabajo, lenguajes e
            infraestructuras que nos permite navegar el paisaje siempre
            cambiante del diseño web con destreza. Aprovechamos los lenguajes y
            marcos de programación más avanzados que nos permiten construir
            soluciones robustas y escalables. Nuestros desarrolladores son
            fluidos en el lenguaje de la velocidad, asegurando que tus sitios
            web no solo luzcan impresionantes, sino que también funcionen sin
            problemas, incluso bajo el tráfico más intenso.
          </p>
        </div>
        <div className="grid grid-rows-2 grid-cols-3 lg:grid-rows-1 lg:grid-cols-6 lg:px-28 p-2 gap-2 items-center justify-center">
            <div className="flex items-center justify-center"><DiJsBadge  size={100} /></div>
            <div className="flex items-center justify-center"><DiMongodb size={100} /> </div>
            <div className="flex items-center justify-center"><DiNodejsSmall size={100} /></div>
            <div className="flex items-center justify-center"><DiPostgresql size={100} /></div>
            <div className="flex items-center justify-center"><DiReact size={100} /></div>
        </div>
    </div>
  );
};

export default Tech;

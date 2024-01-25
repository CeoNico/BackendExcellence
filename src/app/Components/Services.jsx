import React from "react";
import responsiveImg from "../../../public/responsive.jpg";
import seoImg from "../../../public/seo.png";
import webdevImg from "../../../public/webdev.jpg";
import Image from "next/image";
import Card from "./Card";

const Services = () => {
  return (
    <div className="h-screen w-full lg:h-fit p-16">
      <h2 className="text-center text-2xl font-bold p-4">Nosotros</h2>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
        <div className="flex flex-col items-center">
          <Card imgSrc={webdevImg}>
            <h2 className="font-bold text-2xl">Desarollo Principal</h2>
            <p>
              Nuestro desarollo principal cuenta con varias tecnicas para
              asegurar que tu sitio web sea a tu gusto junto con cumplir tu idea
              principal. Tenemos en cuenta tambien desarollar un sitio web facil
              para navegar, rapido y con el mejor diseno UX posible!
            </p>
          </Card>
        </div>
        <div className="flex flex-col items-center">
          <Card imgSrc={seoImg}>
            <h2 className="font-bold text-2xl">SEO Optimizacion</h2>
            <p>
              Es clave que tu sitio web tenga un ranking de SEO alto. Lo que
              hace esto es poner tu sitio web arriba de los restos de los
              resultados cuando buscando algo en el internet.
            </p>
          </Card>
        </div>
        <div className="flex flex-col items-center">
          <Card imgSrc={responsiveImg}>
            <h2 className="font-bold text-2xl">Sitio Responsive</h2>
            <p>
              Cuando desarollamos tu sitio web es importante para nosotros que
              todos los aparatos con acceso al internet pueden ver y interatucar
              con tu sitio web. Esto significa que sea telefono, tablet o compu
              todos van a tener acceso a tu sitio web.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;

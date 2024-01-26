import React from "react";
import responsiveImg from "../../../public/responsive.jpg";
import seoImg from "../../../public/seo.png";
import webdevImg from "../../../public/webdev.jpg";
import Image from "next/image";
import Card from "./Card";

const Services = () => {
  return (
    <div className="h-fit w-full p-10">
      <h1 className="font-bold text-2xl text-center p-10">Sobre Nuestro Servicios</h1>
      <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-3 gap-4">
        <div className="flex items-center flex-col p-2">
          <Card imgSrc={responsiveImg} alt="A phone a laptop and a tablet" />
          <h2 className="font-bold text-2xl pt-6">Sitio Responsive</h2>
          <p className="text-balance text-center">
            Cuando desarollamos tu sitio web es importante para nosotros que
            todos los aparatos con acceso al internet pueden ver y interatucar
            con tu sitio web. Esto significa que sea telefono, tablet o compu
            todos van a tener acceso a tu sitio web.
          </p>
        </div>
        <div className="flex items-center flex-col p-2 ">
          <Card imgSrc={seoImg} alt="A phone a laptop and a tablet" />
          <h2 className="font-bold text-2xl pt-6">SEO Optimizacion</h2>
          <p className="text-center text-balance">
            Es clave que tu sitio web tenga un ranking alto de SEO alto. Esto
            hace que tu sitio esta dentro de los primeros resultados cuando lo
            buscamos o si algun cliente busca algo similar.
          </p>
        </div>
        <div className="flex items-center flex-col p-2">
          <Card imgSrc={webdevImg} alt="A phone a laptop and a tablet" />
          <h2 className="font-bold text-2xl pt-6">Desarollo Principal</h2>
          <p className="text-center text-balance">
            Nuestro desarollo principal cuenta con varias tecnicas para asegurar
            que tu sitio web sea a tu gusto junto con cumplir tu idea principal.
            Tenemos en cuenta tambien desarollar un sitio web facil para
            navegar, rapido y con el mejor diseno UX posible!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import { CardGlasse } from "./CardGlasse";
import { lunettes } from "@/Lunette";

const HomePage: React.FC = () => {
  console.log(lunettes);
  return (
    <div className="font-sans">
      <header className="h-screen flex justify-center items-center bg-gray-200">
        <img
          src="./src/assets/HomeLunBig.jpg"
          alt="Lunettes à la mode"
          className=" w-full h-full object-cover"
        />
      </header>

      <section className="p-12 bg-white text-center">
        <h2 className="text-4xl font-bold">Nos coups de cœur</h2>
        <div className="flex   justify-center gap-6  py-12">
          {lunettes.slice(0, 4).map((lunette, index) => (
            <CardGlasse key={index} lunette={lunette} />
          ))}
        </div>
      </section>
      <section className="p-12 bg-gray-300 text-center text-gray-800">
        <h2 className="text-4xl font-bold">À propos de nous</h2>
        <p>
          Fondée en 2023, notre entreprise est spécialisée dans la vente de
          lunettes de soleil et de vue, alliant qualité et design moderne. Notre
          mission est de vous offrir le meilleur de la vision, avec style.
        </p>
      </section>
      {/* Ajoutez d'autres sections si nécessaire */}
    </div>
  );
};

export default HomePage;

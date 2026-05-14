import { Cortometraje } from "./components/Cortometraje";
import { Hero } from "./components/Hero";
import { Locaciones } from "./components/Locations";
import {Personajes}from "./components/Personajes";
import { Videojuego } from "./components/Videojuego";
const App = () => {
  return (
    <>
      <Hero />
      <Cortometraje/>
      <Videojuego/>
      <Locaciones />
      <Personajes/>
    </>
  );
};

export default App;
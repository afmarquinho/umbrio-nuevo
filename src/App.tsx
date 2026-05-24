import { Cortometraje } from "./components/Cortometraje";
import { Hero } from "./components/Hero";
import { Locaciones } from "./components/Locations";
import {Personajes}from "./components/Personajes";
import { VideoJuego } from "./components/VideoJuego";
const App = () => {
  return (
    <>
      <Hero />
      <Cortometraje/>
      <VideoJuego/>
      <Locaciones />
      <Personajes/>
    </>
  );
};

export default App;
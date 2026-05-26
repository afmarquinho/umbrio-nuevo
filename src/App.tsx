import { Hero } from "./components/Hero";
import { Cortometraje } from "./components/Cortometraje";
import { Locaciones } from "./components/Locations";
import {Personajes}from "./components/Personajes";
import { VideoJuego } from "./components/VideoJuego";
import { Making} from "./components/Making";
const App = () => {
  return (
    <>
      <Hero />
      <Cortometraje/>
      <VideoJuego/>
      <Locaciones />
      <Personajes/>
      <Making/>
    </>
  );
};

export default App;
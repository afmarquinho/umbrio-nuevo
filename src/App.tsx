import { Hero } from "./components/Hero";
import { Cortometraje } from "./components/Cortometraje";
import {Personajes}from "./components/Personajes";
import { Videojuego } from "./components/Videojuego";
import { Making} from "./components/Making";
import { Locaciones } from "./components/Locations";
import { Team} from "./components/Team";
import { Footer} from "./components/Footer";

import { CalaveraButton } from "./components/ui/CalaveraButton";

import calavera from "./assets/img/craneo.webp";
import calaveraFuego from "./assets/img/craneo2.webp";

import { useRef } from "react";

const App = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement>(null);

  return (
    <>
      <Hero heroRef={heroRef} />

      <Cortometraje />
      <Videojuego />
      <Personajes />
      <Making />
      <Locaciones />
      <Team />
      
      <footer ref={footerRef}>
     <Footer />
     </footer>

      <CalaveraButton
        ignoreRef={heroRef}
        footerRef={footerRef}
        normalSrc={calavera}
        fuegoSrc={calaveraFuego}
      />
    </>
  );
};

export default App;
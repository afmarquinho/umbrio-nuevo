import styled from "styled-components";
import { CarruselPersonajes} from "../components/CarruselPersonajes";
//import { useMenu } from "../context/MenuContext";
import { VideoLscModal } from "./ui/VideoLscModal";
//import { BotonLsc } from "./ui/BotonLsc";
import PersonajesVideo from "../assets/videos/Personajes.mp4";
import { useState } from "react";
import fondoPersonajes from "../assets/img/fondoPersonajes.webp";
 

export const Personajes = () => {
  const [showModal, setShowModal] = useState(true);
  //const { menuAbierto } = useMenu();
  return (
    <PersonajesContenedor id = "Personajes">
      <CarruselPersonajes />

      {showModal && (
        <VideoLscModal
          videoSrc={PersonajesVideo}
          onClose={() => setShowModal(false)}
        />
      )}
     {/* <BotonLsc
       // $visible={!showModal && !menuAbierto}
        onClick={() => setShowModal(true)}
      />*/}
    </PersonajesContenedor>
  );
};

const PersonajesContenedor = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;

  background-image: url(${fondoPersonajes});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
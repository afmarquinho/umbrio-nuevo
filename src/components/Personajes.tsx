import styled from "styled-components";
import { CarouselPersonajes } from "./CarouselPersonajes";
//import { useMenu } from "../context/MenuContext";
import { VideoLscModal } from "./ui/VideoLscModal";
//import { BotonLsc } from "./ui/BotonLsc";
import PersonajesVideo from "../assets/videos/Personajes.mp4";
import { useState } from "react";
import fondo from "../assets/img/fondo.webp"
 

export const Personajes = () => {
  const [showModal, setShowModal] = useState(true);
  //const { menuAbierto } = useMenu();
  return (
    <PersonajesWrapper id = "Personajes">
      <Container>
      <CarouselPersonajes />

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
       </Container>
    </PersonajesWrapper>
  );
};

const PersonajesWrapper = styled.section`
   display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: relative;
    /* Fondo con filtro de escala de grises */
      &::before {
      content: "";
      position: absolute;
      inset: 0;  
      background-image: url(${fondo});
      background-size: cover;
      background-position: top;  
      filter: grayscale(100%);  
      z-index: 0;
    }
    /* capa degradada para las uniones de los fondops negra-transparente-negra */
      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(to bottom, rgb(0, 0, 0), transparent, rgba(0, 0, 0, 0.8));
        z-index: 10;
      }
  
    /* todo el contenido por encima */
    > * {
      position: relative;
      z-index: 1;
    }
  
    @media (max-width: 768px) {
      padding: 50px 10px;
    }
  `;
  
  
const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
z-index: 100;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
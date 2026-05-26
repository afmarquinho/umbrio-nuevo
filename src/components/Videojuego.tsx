import styled from "styled-components";
import fondoJuego from "../assets/img/fondoJuego.webp"
import sombreron from "../assets/img/sombreron.webp";
import { device } from "../pantallas/breakpoints";

export const VideoJuego = () => {
  return (
    <VideoJuegoWrapper id = "Juego">
      <CharacterImage src={sombreron} alt="Personaje videojuego" />
      <h3>Video juego</h3>

      <Info>
        <p className="title">Atrevete a entrar en umbrío</p>
        <p className="subtitle">
          Sumérgete en el mundo de Umbrío y juega la historia desde dentro.
        </p>
      </Info>

      <VideoJuegoButtonWrapper>
        <button>
          ⬇ Descargar
          <br />
          <span>Video juego</span>
        </button>

        <Shapes>
          <div className="shape shape1" />
          <div className="shape shape2" />
          <div className="shape shape3" />
        </Shapes>
      </VideoJuegoButtonWrapper>
    </VideoJuegoWrapper>
  );
};


const VideoJuegoWrapper = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 100vh;

  background-image:
    linear-gradient(
      rgba(0,0,0,0.65),
      rgba(0,0,0,0.85)
    ),
    url(${fondoJuego});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 40px 20px;

  text-align: center;

  gap: 40px;

  h3 {
  color: #f8a308;
  font-size: 2.5rem;
  font-family: "Amarante";
  margin-bottom: 20px;
  text-shadow:
    0 0 10px rgba(248, 163, 8, 0.5),
    0 0 30px rgba(102, 58, 143, 0.4);
}

  
  @media ${device.laptop} {
   h3 {
     font-size: 4rem;
   }
  }
`;

const CharacterImage = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  width: 40%;
  max-width: 600px;

  pointer-events: none;
  z-index: 1;
  opacity: 0.95;

  @media ${device.tablet} {
    width: 38%;
  }

  /* 👇 DESKTOP: mover a la derecha y agrandar */
  @media ${device.laptop} {
    left: auto;
    right: 40px; /* o el valor que encaje con tu layout */

    transform: none;

    width: 45%;
    max-width: 750px;
  }
`;


  const Info = styled.div`
  text-align: center;
  color: #f8a308;
  margin-top: 20px;

  .title {
    font-size: 1.4rem;
    font-weight: bold;
  }

  .subtitle {
    font-size: 1rem;
    opacity: 0.8;
    max-width: 500px;
    margin: 10px auto;
  }
`;

const VideoJuegoButtonWrapper = styled.div`
  margin: 20px auto;
  text-align: center;
  color: #f8a308;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  
   button {
  width: 240px;
  padding: 22px;

  background:
    linear-gradient(
      135deg,
      #663a8f,
      #2a163d
    );

  border: 2px solid #f8a308;
  border-radius: 14px;

  color: #f8a308;

  font-size: 1rem;
  font-family: "Amarante";

  cursor: pointer;

  transition: all 0.35s ease;

  box-shadow:
    0 0 15px rgba(248, 163, 8, 0.25),
    0 0 40px rgba(102, 58, 143, 0.25);

  &:hover {
    transform: translateY(-4px) scale(1.05);

    box-shadow:
      0 0 20px rgba(248, 163, 8, 0.5),
      0 0 60px rgba(102, 58, 143, 0.5);
  }

  span {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1.1rem;
  }
}
`;
const Shapes = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .shape {
    width: 14px;
    height: 14px;
    opacity: 0.6;
    background: #f8a308;
    box - shadow: 0 0 10px rgba(248, 163, 8, 0.6);
    border-radius: 50%;
  }
`;




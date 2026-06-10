import styled from "styled-components";
import fondoJuego from "../assets/img/fondoJuego.webp"
import { device } from "../pantallas/breakpoints";
import fondo from "../assets/img/fondotextura.webp"
import espectro from "../assets/img/espectro.webp"
import { AnimatedButton } from "./AnimatedButton";

export const Videojuego = () => {
  return (

    <VideoJuegoWrapper id = "Juego">
      <UmbrioBg>UMBRÍO</UmbrioBg>
      <CharacterBg>
        <img src={espectro} alt="Espectro" />
      </CharacterBg>
      <Container>
        <h2>VideoJuego</h2>

        <AnimatedButton label1="Descargar" label2="VideoJuego" $absolute={true} />



        {/* <div>
        <button>
        Descargar

          <br />
          <span>Video juego</span>
        </button>

        <div>
          <div className="shape shape1" />
          <div className="shape shape2" />
          <div className="shape shape3" />
        </div> */}

        {/* 
        <div className="particles">
          <div className="particles">
            {particles.map((p, i) => (
              <Particle
                key={i}
                style={
                  {
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    left: `${p.startX}%`,
                    top: `${p.startY * -1}px`,
                    "--moveX": `${p.moveX}px`,
                    "--moveY": `${p.moveY}px`,
                    animationDuration: `${p.duration}s`,
                    animationDelay: `${p.delay}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div> */}
        {/* </div> */}
      </Container>

    </VideoJuegoWrapper>
  );
};

const VideoJuegoWrapper = styled.div`
  background: url(${fondo}) no-repeat center center;
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

  position: relative;
  &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgb(0, 0, 0), transparent, rgba(0, 0, 0, 0.8));
      z-index: 10;
    }

  
  @media ${device.laptop} {
   h3 {
     font-size: 4rem;
   }
  }
`;





const UmbrioBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;

  justify-content: center;
  font-size: 25rem;
  font-weight: bold;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5); 
  opacity: 0.5;
  z-index: 100;
  `
const CharacterBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
>>>>>>> origin/main
  display: flex;
  align-items: flex-start;
  justify-content: center;

  z-index: 100;
  overflow: hidden;
  img {
    width: 400px;
    height: auto;
    margin-top: 50px;
  }
`
const Container = styled.div`
position: relative;
width: 100%;
height: 100%;
  min-height: 100vh;
z-index: 100;

`




// const VideoJuegoButtonWrapper = styled.div`
//   margin: 20px auto;
//   text-align: center;
//   color: var(--accent);
//   font-size: 16px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap:20px;
//   button {
//     width: 200px;
//     padding: 20px;
//     background: var(--soft-bg);
//     border: 1px solid var(--accent);
//     border-radius: 8px;
//     border: none;
//     color: var(--accent);
//     font-size: 16px;
//     cursor: pointer;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// `;
// const Shapes = styled.div`
//   display: flex;
//   gap: 20px;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   .shape {
//     width: 50px;
//     height: 50px;
//     background: var(--accent);
//     border-radius: 50%;
//   }
// `;


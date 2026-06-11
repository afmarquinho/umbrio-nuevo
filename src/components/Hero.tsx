import styled from "styled-components";
import HeroBg from "../assets/img/banner.webp";
import {Menu} from "../components/Menu";
import sombreron from "../assets/img/sombreron_pose_espalda.webp";
import niebla from "../assets/img/niebla.webp";
import { device } from "../pantallas/breakpoints";

import qr from "../assets/img/qr.webp";
import { AnimatedButton } from "./AnimatedButton";


export const Hero = () => {

  return (
    <HeroSeccion>
      <Menu />
      <LogoWrapper>Umbrío</LogoWrapper>

      <SombreronImg src={sombreron} alt="Sombreron" />
      <NieblaImg src={niebla} alt="Niebla" />
      <Niebla2Img src={niebla} alt="Niebla2" />

      <TitleWrapper>
        <h1>Umbrío</h1>
        <p>El misterio ancetral de Tunja</p>
      </TitleWrapper>
      <AnimatedButton label1="Descarga la app" label2="Ahora" label3="Disponible en App Store" $absolute={true}/>
    
      <StoryTextWrapper>
        <p>
          Adéntrate en la sombras de Tunja y descubre el poder de sus leyendas
          rurales hecha Cine{" "}
        </p>
      </StoryTextWrapper>
      <RankingWrapper>
        <h2>9/10</h2>
      </RankingWrapper>
      <QRWrapper>
        <img src={qr} alt="QR Code" />
      </QRWrapper>
    </HeroSeccion>
  );
};

// Estilos

const HeroSeccion = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: top;
  color: white;
  &::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, transparent 0, transparent 70%, #000000);
      z-index: 10;
    }

`;

// TODO: Cambiar la etiqueta h1 por la imagen del logo final
const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--accent);
  font-family: "Arial Black", sans-serif;
  //TODO: Cambiar el valor de z-index, una vez definido el estilo final del menú
  z-index: 2000;
`;

const SombreronImg = styled.img`
  position: absolute;
   height: auto;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);

  width: 260px;
  height: auto;

  @media ${device.tablet} {
    width: 320px;
  }

  @media ${device.laptop} {
    width: 400px;
  }
   @media ${device.desktop} {  
    top: 0;
    left: 20%;
    padding-top: 40px;
  
}
`;

const NieblaImg = styled.img`
  position: absolute;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: auto;
  z-index: 100;
  opacity: 0.5;
  `;

const Niebla2Img = styled.img`
  position: absolute;
  bottom: -150px;
  left: 50%;
  transform: translateX(-50%);
  width: 1200px;
  height: auto;
  z-index: 100;
`;


const TitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 500;
  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    color: var(--accent);
    font-weight: bold;
    font-family: "Arial Black", sans-serif;
  }
  p {
    font-size: 1rem;
    margin-top: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    color: var(--accent);
    font-family: "Arial", sans-serif;
  }

  @media ${device.tablet} {
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media ${device.laptop} {
    h1 {
      font-size: 5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

const StoryTextWrapper = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);

  width: 85%;
  text-align: center;

  z-index: 500;
  font-family: "Arial", sans-serif;
  color: white;
  p {
    font-size: 1rem;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    color: var(--accent);
    font-family: "Arial", sans-serif;
  }

  @media ${device.laptop} {
    top: 40%;
    right: 40px;
    left: auto;
    transform: translateY(-50%);
    width: 370px;

    p {
      font-size: 1.2rem;
    }
  }
`;


const RankingWrapper = styled.div`
  position: absolute;

  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  
  text-align: center;
  z-index: 500;
  font-family: "Arial", sans-serif;
  
  width: 100px;

  color: var(--accent);
  background: linear-gradient(0deg, #8808a0, #a407c4, #4d0059);
  border: 1px solid var(--accent);
  border-radius: 10px;
  padding: 10px;

  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  h2 {
    font-size: 1rem;
  }
  
  @media ${device.laptop} {
    
    top: auto;
    bottom: 40px;
    left: 40px;
    transform: none;
    h2 {
      font-size: 1.5rem;
    }
  }
`;


//Mismo estilo que el botón de descarga pero con un tamaño más pequeño y sin el efecto de brillo al pasar el mouse, además de un fondo semitransparente para que resalte sobre el fondo del banner.
const QRWrapper = styled.div`
display: none;

  @media ${device.laptop} {
  display: block;
  position: absolute;
  bottom: 40px;
  right: 40px;
  text-align: center;
  z-index: 500;
  font-family: "Arial", sans-serif;
  width: 150px;
  height: 150px;
  color: var(--accent);
  background: linear-gradient(0deg, #8808a0, #a407c4, #4d0059);
  border: 1px solid #dc7b03;
  border-radius: 10px;
  padding: 5px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
}
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;



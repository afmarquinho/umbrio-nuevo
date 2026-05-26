import styled from "styled-components";
import HeroBg from "../assets/img/banner.webp";
import brujula from "../assets/img/brujula.webp";
import sombreron from "../assets/img/sombreron_pose_espalda.webp";
import niebla from "../assets/img/niebla.webp";

import { useEffect, useState } from "react";
import qr from "../assets/img/qr.webp";
import { AnimatedButton } from "./AnimatedButton";

//TODO: MENÚ, PASAR A COMPONENTE SEPARADO, HACERLO FUNCIONAL, AGREGAR ANIMACIONES

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <MobileMenuWrapper $open={open}>MENU</MobileMenuWrapper>

      <MenuButtonWrapper onClick={() => setOpen(!open)}>
        <img src={brujula} alt="Menu Icon" />
      </MenuButtonWrapper>
    </>
  );
};
const DesktopMenu = () => {
  return (
    <DesktopMenuWrapper>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#Corto">Umbrío</a>
      </li>
      <li>
        <a href="#Locaciones">Locaciones</a>
      </li>
      <li>
        <a href="#Personajes">Personajes</a>
      </li>

    </DesktopMenuWrapper>
  );
};

const Menu = () => {
  const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState<boolean>(
      window.matchMedia("(max-width: 639px)").matches,
    );

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 639px)");
      const handleResize = () => setIsMobile(mediaQuery.matches);

      //Si da problemas cambiar la logica, porqi matchMedia no es tan compatible con navegadores viejos
      mediaQuery.addEventListener("change", handleResize);
      window.addEventListener("resize", handleResize);
      return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return isMobile;
  };

  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileMenu />;
  }
  return <DesktopMenu />;
};

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

const MobileMenuWrapper = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
    // Esta variable soft viene el index.css,establecido como variable
  background-color: var(--soft-bg);
  backdrop-filter: blur(10px);

  z-index: 1000;

  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;

  transition:
    transform 0.5s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.3s ease;
  transform: ${(props) => props.$open && "translateX(0)"};
  opacity: ${(props) => props.$open && 1};
  /* pointer-events: ${(props) => props.$open && "auto"}; */
`;

const MenuButtonWrapper = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1100;

  background-color: transparent;
  cursor: pointer;

  width: 50px;
  height: 50px;
  padding: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: rotate(20deg) scale(1.1);
  }

  &:active img {
    transform: scale(0.9);
  }
`;

const DesktopMenuWrapper = styled.nav`
  position: absolute;
  top: 20px;
  width: 800px;
  padding: 15px 20px;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--accent);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--soft-bg);
  backdrop-filter: blur(10px);
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
  padding-top: 40px;
  top: 0;
  left: 20%;
  transform: translateX(-50%);
  width: 400px;
  height: auto;
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
    font-size: 5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    color: var(--accent);
    font-weight: bold;
    font-family: "Arial Black", sans-serif;
  }
  p {
    font-size: 1.5rem;
    margin-top: 20px;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    color: var(--accent);
    font-family: "Arial", sans-serif;
  }
`;



const StoryTextWrapper = styled.div`
  position: absolute;
  top: 40%;
  right: 40px;
  transform: translateY(-50%);
  text-align: center;
  z-index: 500;
  font-family: "Arial", sans-serif;
  width: 370px;
  color: white;
  p {
    font-size: 1.2rem;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
    color: var(--accent);
    font-family: "Arial", sans-serif;
  }
`;

//Rankin, ubicacion izquierda-abajo

const RankingWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 40px;
  text-align: center;
  z-index: 500;
  font-family: "Arial", sans-serif;
  width: 100px;
  color: var(--accent);
  background: var(--soft-bg);
  border: 1px solid var(--accent);
  border-radius: 10px;
  padding: 10px;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  h2 {
    font-size: 1.5rem;
  }
`;
//Mismo estilo que el botón de descarga pero con un tamaño más pequeño y sin el efecto de brillo al pasar el mouse, además de un fondo semitransparente para que resalte sobre el fondo del banner.
const QRWrapper = styled.div`
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;



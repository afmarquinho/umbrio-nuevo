import styled from "styled-components";
import HeroBg from "../assets/img/banner.webp";
import brujula from "../assets/img/brujula.webp";
import sombreron from "../assets/img/sombreron_pose_espalda.webp";
import { useEffect, useState } from "react";
import qr from "../assets/img/qr.webp";

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
  const [particles, setParticles] = useState<
    {
      size: number;
      startX: number;
      startY: number;
      moveX: number;
      moveY: number;
      duration: number;
      delay: number;
    }[]
  >([]);

  useEffect(() => {
    const data = Array.from({ length: 25 }).map(() => ({
      size: Math.random() * 4 + 2,
      startX: Math.random() * 100,
      startY: Math.random() * 100,
      moveX: (Math.random() - 0.5) * 100,
      moveY: (Math.random() - 0.5) * 100,
      duration: Math.random() * 10 + 6,
      delay: Math.random() * 5,
    }));

    setParticles(data);
  }, []);

  return (
    <HeroSeccion>
      <Menu />
      <LogoWrapper>Umbrío</LogoWrapper>

      <SombreronImg src={sombreron} alt="Sombreron" />

      <TitleWrapper>
        <h1>Umbrío</h1>
        <p>El misterio ancetral de Tunja</p>
      </TitleWrapper>
      <DownloadWrapperButton>
        <div>
          Descarga la app <br />
          <span>Ahora</span>
        </div>
        <div>Disponible en ...</div>

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
        </div>
        <div className="scan" />
      </DownloadWrapperButton>
      <LegendWrapper>
        <p>
          Adéntrate en la sombras de Tunja y descubre el poder de sus leyendas
          rurales hecha Cine{" "}
        </p>
      </LegendWrapper>
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
  width: 100vw;
  background-image: url(${HeroBg});
  background-size: cover;
  background-position: top;
  color: white;
  overflow: hidden;
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
  left: 10%;
  transform: translateX(-50%);
  width: 900px;
  height: auto;
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

const DownloadWrapperButton = styled.button`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 500;

  width: 260px;
  padding: 22px;
  border-radius: 32px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  /* position: relative; */
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 6px;

  /* =========================
TEXTO
  ========================== */
  > div {
    position: relative;
    z-index: 4;
    color: white;
    line-height: 1.2;
  }

  > div:first-child {
    font-size: 1.2rem;
  }

  > div:last-child {
    font-size: 0.9rem;
    opacity: 0.85;
  }

  span {
    display: block;
    margin-top: 4px;
    font-weight: bold;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  /* =========================
    FONDO ENERGÍA
  ========================== */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 32px;

    background: linear-gradient(
      120deg,
      #3a0044,
      #720d82,
      #c10dec,
      #ff2ed1,
      #720d82,
      #3a0044
    );

    background-size: 400% 400%;
    animation: energyFlow 8s ease infinite;

    z-index: 0;
  }

  @keyframes energyFlow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* =========================
    BORDE ENERGÉTICO
  ========================== */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 32px;
    padding: 2px;

    background: linear-gradient(
      120deg,
      transparent,
      var(--accent),
      #ffd700,
      var(--accent),
      transparent
    );

    background-size: 200% 200%;
    animation: borderEnergy 3s linear infinite;

    -webkit-mask:
      linear-gradient(#000 0 0) content-box,
      linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;

    z-index: 2;
  }

  @keyframes borderEnergy {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 200% 50%;
    }
  }

  /* =========================
SCAN LIGHT (clave gaming)
  ========================== */
  .scan {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transform: skewX(-20deg);
    animation: scanMove 4s linear infinite;
    z-index: 3;
  }

  @keyframes scanMove {
    0% {
      left: -100%;
    }
    100% {
      left: 150%;
    }
  }

  /* =========================
    GLOW EXTERNO
  ========================== */
  box-shadow:
    0 0 10px rgba(248, 163, 8, 0.4),
    0 0 25px rgba(193, 13, 236, 0.3);

  /* =========================
     🖱 INTERACCIÓN
  ========================== */
  &:hover {
    transform: translateX(-50%) scale(1.07);
    box-shadow:
      0 0 20px rgba(248, 163, 8, 0.7),
      0 0 40px rgba(193, 13, 236, 0.6);
  }

  &:hover::before {
    filter: brightness(1.3);
  }

  &:hover::after {
    filter: blur(3px);
  }

  &:active {
    transform: translateX(-50%) scale(0.97);
  }

  transition: all 0.25s ease;
`;

const LegendWrapper = styled.div`
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

const Particle = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;

  background: radial-gradient(circle, #ff9ff9, #ff2eef);
  border-radius: 50%;

  opacity: 0.6;
  filter: blur(0.6px);

  animation: floatRandom linear infinite;

  @keyframes floatRandom {
    0% {
      transform: translate(0, 0) scale(0.8);
      opacity: 0;
    }

    20% {
      opacity: 0.8;
    }

    100% {
      transform: translate(var(--moveX), var(--moveY)) scale(1.2);
      opacity: 0;
    }
  }
`;

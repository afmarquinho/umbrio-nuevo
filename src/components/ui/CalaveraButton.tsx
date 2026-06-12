import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { device } from "../../pantallas/breakpoints";

interface CalaveraButtonProps {
  ignoreRef: React.RefObject<HTMLElement | null>;
  footerRef: React.RefObject<HTMLElement | null>;
  normalSrc: string;
  fuegoSrc: string;
}

export const CalaveraButton = ({
  ignoreRef,
  footerRef,
  normalSrc,
  fuegoSrc,
}: CalaveraButtonProps) => {
  const [visible, setVisible] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [imgSrc, setImgSrc] = useState(normalSrc);

  const [stuck, setStuck] = useState(false);
  const [topPosition, setTopPosition] = useState(0);

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // -----------------------------
  // Mostrar botón después de sección
  // -----------------------------
   useEffect(() => {
  const section = ignoreRef.current;
  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // visible SOLO cuando el hero ya NO está visible
      setVisible(!entry.isIntersecting);
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, [ignoreRef]);
  // -----------------------------
  // Cambiar de fixed a absolute al tocar footer
  // -----------------------------
  useEffect(() => {
    const handleScroll = () => {
      const footer = footerRef.current;
      const button = buttonRef.current;
      if (!footer || !button) return;

      const footerRect = footer.getBoundingClientRect();
      const buttonHeight = button.offsetHeight;
      const windowHeight = window.innerHeight;

      const buttonBottomViewport = windowHeight - 40; // bottom base

      if (footerRect.top <= buttonBottomViewport) {
        setStuck(true);

        const absoluteTop =
          footer.offsetTop - buttonHeight - 40;

        setTopPosition(absoluteTop);
      } else {
        setStuck(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [footerRef]);

  // Eventos
  // -----------------------------
 const handleClick = () => {
  setIsShaking(true);
  setImgSrc(fuegoSrc);

  setTimeout(() => {
    setIsShaking(false);
    setImgSrc(normalSrc);
  }, 800);

  document.body.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

  const handleMouseEnter = () => {
    setImgSrc(fuegoSrc);
    setIsShaking(true);
  };

  const handleMouseLeave = () => {
    setImgSrc(normalSrc);
    setIsShaking(false);
  };

  return (
    <Boton
      ref={buttonRef}
      $visible={visible}
      $stuck={stuck}
      $topPosition={topPosition}
      onClick={handleClick}
    >
      <CalaveraImg
        src={imgSrc}
        $isShaking={isShaking}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt="calavera"
      />
    </Boton>
  );
};

// ================= Animación =================
const shakeHorizontal = keyframes`
  0% { transform: translateX(0); }
  20% { transform: translateX(-12px); }
  40% { transform: translateX(12px); }
  60% { transform: translateX(-12px); }
  80% { transform: translateX(12px); }
  100% { transform: translateX(0); }
`;

// ================= Styled =================
const Boton = styled.button<{
  $visible: boolean;
  $stuck: boolean;
  $topPosition: number;
}>`
  position: ${({ $stuck }) => ($stuck ? "absolute" : "fixed")};
  bottom: ${({ $stuck }) => ($stuck ? "auto" : "30px")};
  top: ${({ $stuck, $topPosition }) =>
    $stuck ? `${$topPosition}px` : "auto"};
  right: 20px;
  z-index: 500;
  border: none;
  background: none;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
  
  /* tablet */
  @media ${device.tablet} {
    right: 30px;
    bottom: ${({ $stuck }) => ($stuck ? "auto" : "35px")};
  }

  /* laptop / desktop */
  @media ${device.laptop} {
    right: 40px;
    bottom: ${({ $stuck }) => ($stuck ? "auto" : "40px")};
  }
`;

const CalaveraImg = styled.img<{ $isShaking: boolean }>`
  width: 45px;
  transition: transform 0.2s ease;
  animation: ${({ $isShaking }) =>
      $isShaking ? shakeHorizontal : "none"}
    0.5s;

/* tablet */
  @media ${device.tablet} {
    width: 50px;
  }

  /* laptop / desktop */
  @media ${device.laptop} {
    width: 55px;
  }
`;
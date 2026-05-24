import styled from "styled-components";
import fondoCorto from "../assets/img/fondoCorto.webp";
import portadaTrailler from "../assets/img/portadaTrailler.webp";
import { device } from "../pantallas/breakpoints";

export const Cortometraje = () => {
  return (
    
    < CortometrajeSection id = "Corto">
      <h2>Cortometraje</h2>
      <h3>Ver Trailer</h3>
      <ShortWrapper>
        <ShortTrailer>
          <p>Trailer</p>
        </ShortTrailer>
      </ShortWrapper>
      <Legend>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
        repellendus minima vitae voluptatum, quasi debitis aliquid sint, ipsam
        nulla tenetur soluta itaque asperiores nihil, ratione natus impedit
        autem atque repudiandae.
      </Legend>
      <WatchTrailerWrapper>
        <div>
          Ver Trailer
          <br />
          <span>Completo</span>
        </div>

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
      </WatchTrailerWrapper>
    </CortometrajeSection>
  );
};

const CortometrajeSection = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  padding: 40px 16px;

  background-image: url(${fondoCorto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;

  &::before {
    content: "";

    position: absolute;
    inset: 0;

    background: rgba(0, 0, 0, 0.45);

    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  h2 {
    text-align: center;
    color: #f4a009;
    font-family: "Amarante";
    font-size: 1.8rem;
    margin-bottom: 20px;
  }

  @media ${device.tablet} {
    padding: 60px 30px;

    h2 {
      font-size: 2rem;
    }
  }

  @media ${device.laptop} {
    padding: 80px 60px;

    h2 {
      font-size: 3rem;
    }
  }
`;
const ShortWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media ${device.tablet} {
    flex-direction: row;
     gap: 30px;
  }

  @media ${device.laptop} {
    gap: 40px;
  
  }
`;

const ShortTrailer = styled.div`
  width: 100%;
  max-width: 1000px;
  aspect-ratio: 16 / 9;

  background-image: url(${portadaTrailler});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  background-color: #000;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #f6e9c7;
  font-size: 1rem;
  font-weight: 500;
  font-family: "Amarante";

  border-radius: 16px;
  overflow: hidden;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media ${device.tablet} {
   width: 85%;
   border-radius: 20px;
  }

   @media ${device.laptop} {
    width: 75%;
  }

  @media ${device.desktop} {
    width: 65%;
  }
`;

const Legend = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  font-family: "Amarante";
  text-align: justify;
  width: 95%;
  max-width: 1200px;
  margin: 20px auto;
  color: #f6e9c7;
  line-height: 1.7;


  @media ${device.tablet} {
    font-size: 1rem;
    width: 90%;
    margin: 26px auto;
  }
  @media ${device.laptop} {
    font-size: 1.1rem;
    width: 80%;
  }
`;


const WatchTrailerWrapper = styled.div`
  margin: 20px auto;

  width: 160px;

  display: flex;
  flex-direction: column;

  background: rgba(20, 10, 25, 0.85);

  border: 1px solid #f4a009;
  border-radius: 14px;

  padding: 14px;

  text-align: center;

  color: #f4a009;

  font-family: "Amarante", serif;

  transition: all 0.3s ease;

  cursor: pointer;

  div {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  &:hover {
    transform: scale(1.05);

    box-shadow:
      0 0 15px rgba(244, 160, 9, 0.5),
      0 0 30px rgba(164, 7, 196, 0.4);
  }

  @media ${device.tablet} {
    width: 190px;
    padding: 18px;

    div {
      font-size: 1rem;
    }

    span {
      font-size: 1.1rem;
    }
  }

  @media ${device.laptop} {
    width: 220px;
    padding: 20px;
  }
`;

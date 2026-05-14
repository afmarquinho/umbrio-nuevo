import styled from "styled-components";
import { device } from "../pantallas/breakpoints";

export const Cortometraje = () => {
  return (
    <>
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
    </>
  );
};

const ShortWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media ${device.tablet} {
    flex-direction: row;
  }
`;
const ShortTrailer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  @media ${device.tablet} {
    width: 50%;
  }
`;

const Legend = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: justify;
  width: 90%;
  max-width: 1200px;
  margin: 10px auto;

  @media ${device.tablet} {
    font-size: 16px;
    margin: 26px auto;
  }
  @media ${device.laptop} {
    font-size: 18px;
  }
`;
// const Pin = styled.img`

//     width: 24px;
//     height: 24px;
//     background-size: contain;
//     background-repeat: no-repeat;
//     transform: translate(-50%, -100%);
// `;

const WatchTrailerWrapper = styled.div`
  margin: 20px auto;
  width: 200PX;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  background: var(--soft-bg);
  border: 1px solid var(--accent);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: var(--accent);
`;

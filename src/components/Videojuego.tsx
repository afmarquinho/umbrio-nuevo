import styled from "styled-components";
import { device } from "../pantallas/breakpoints";

export const Videojuego = () => {
  return (
    <VideojuegoWrapper>
      <h3>VideoJuego</h3>
      <VideojuegoButtonWrapper>
        <button>
          Descargar
          <br />
          <span>VideoJuego</span>
        </button>
        <Shapes>
          <div className="shape shape1" />
          <div className="shape shape2" />
          <div className="shape shape3" />
        </Shapes>

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
      </VideojuegoButtonWrapper>
    </VideojuegoWrapper>
  );
};

const VideojuegoWrapper = styled.div`
  background: #e6a5a5;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h3 {
    background: var(--soft-bg);
  }
  @media ${device.tablet} {
  }
  @media ${device.laptop} {
  }
  @media ${device.desktop} {
  }
`;

const VideojuegoButtonWrapper = styled.div`
  margin: 20px auto;
  text-align: center;
  color: var(--accent);
  font-size: 16px;
  display: flex;
    flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:20px;
  button {
    width: 200px;
    padding: 20px;
    background: var(--soft-bg);
    border: 1px solid var(--accent);
    border-radius: 8px;
    border: none;
    color: var(--accent);
    font-size: 16px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Shapes = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .shape {
    width: 50px;
    height: 50px;
    background: var(--accent);
    border-radius: 50%;
  }
`;

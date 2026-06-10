import { useState } from "react";
import styled from "styled-components";
import { personajes } from "../data/personajesData";
import pergamino from "../assets/img/pergamino1.webp"
import { device } from "../pantallas/breakpoints";

export const CarouselPersonajes = () => {
  const [activo, setActivo] = useState(0);

  const personaje = personajes[activo];

 return (
  <Contenedor>
    <Titulo>PERSONAJES</Titulo>
    <Contenido>

      <ZonaMovil>
        <Miniaturas>
          {personajes.map((item, index) => (
            <Miniatura
              key={index}
              src={item.miniatura}
              $activo={index === activo}
              onClick={() => setActivo(index)}
            />
          ))}
        </Miniaturas>

        <PersonajeGrande src={personaje.personajeGrande} />
      </ZonaMovil>

      <Pergamino>
        <Texto>
          <h2>{personaje.nombre}</h2>
          <p>{personaje.descripcion}</p>
        </Texto>
      </Pergamino>

    </Contenido>
  </Contenedor>
);
};

const Contenedor = styled.section`
  width: 100%;   
  padding: 20px;
  box-sizing: border-box;
 
  @media ${device.laptop} {
  position: relative;
  height: 100vh;
}
`;
const Titulo = styled.h1`
  position: relative;
  text-align: center;
  color: #f4a009;
  font-size: 1.8rem;
  margin-bottom: 20px;
  margin-top: 20px;
  font-family: "Amarante";
  z-index: 3;

  @media ${device.laptop} {
  position: absolute;
   font-size: 3rem;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

}
`;

 const ZonaMovil = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
 
  @media ${device.laptop} {
    display: contents;
  }
`;

const PersonajeGrande = styled.img`
  order: 1;
  width: min(50vw, 180px);
  max-height: 45vh;
  display: block;
  margin: 0 auto;

  object-fit: contain;


  @media ${device.laptop} {
  order: 2;
  position: absolute;
  right: 90px;
  bottom: 0;
   max-height: none; /* importante */
  height: 80%;
  width: auto;
}

   @media ${device.desktop} {
  right: 40px;
}
`;

const Miniaturas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 0;

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    position: absolute;
    top: 150px;
    left: 90px;
    width: auto;
    gap:20px;
  }
`;

const Miniatura = styled.img<{ $activo: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  border: ${({ $activo }) =>
    $activo ? "3px solid #f4a009" : "2px solid #9431c0"};
  
  &:hover {
    transform: scale(1.08);
  }

 @media ${device.laptop} {
  width: 80px;
  height: 80px;
}
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;   /* móvil */
  align-items: center;
  gap: 10px;

  @media ${device.laptop} {
    flex-direction: row;   /* desktop */
    justify-content: space-between;
    align-items: center;
  }
`;

const Pergamino = styled.div`
  order: 2;
  width: 90%;
  max-width: 300px;

  aspect-ratio: 3 / 2;

  margin: 0 auto;
  padding: 20px;

  background-image: url(${pergamino});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;


  @media ${device.tablet} {
    width: 85%;
    max-width: 400px;
  }

  @media ${device.laptop} {
    order: 1;
    position: absolute;
    max-width: none;
    bottom: 30px;
    right: 400px;
    width: 500px;
    height: 350px;
  }
`;

const Texto = styled.div`
  width: 80%;
  text-align: center;
  font-family: "Amarante";

  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    color: #011740;
    font-size: 1.1rem;
    padding: 10px;
    margin: 0; /* importante */
  }

  p {
    color: #000;
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0; /* importante */
  }

  @media ${device.laptop} {
    h2 {
      font-size: 1.5rem;
      padding: 20px;
    }

    p {
      font-size: 1rem;
    }
  }
`;

import { useState } from "react";
import styled from "styled-components";
import { personajes } from "../data/personajesData";
import pergamino from "../assets/img/pergamino1.webp"
import { device } from "../pantallas/breakpoints";

export const CarruselPersonajes = () => {
  const [activo, setActivo] = useState(0);

  const personaje = personajes[activo];

  return (
    <Contenedor>
      <Titulo>PERSONAJES</Titulo>
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

      <Contenido>
        <Pergamino>
          <Texto>
            <h2>{personaje.nombre}</h2>
            <p>{personaje.descripcion}</p>
          </Texto>
        </Pergamino>
        <PersonajeGrande src={personaje.personajeGrande} />
      </Contenido>
    </Contenedor>
  );
};

const Contenedor = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 20px;

  @media ${device.laptop} {
  position: relative;
  height: 100vh;
}
`;

const Titulo = styled.h1`
  text-align: center;
  color: #f4a009;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-family: "Amarante";
  

  @media ${device.laptop} {
  position: absolute;
   font-size: 3rem;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);

}
`;

const PersonajeGrande = styled.img`
  width: 70%;
  display: block;
  margin: 0 auto;

  @media ${device.laptop} {
  position: absolute;
  right: 90px;
  bottom: 0;
  height: 100%;
  width: auto;
}
   @media ${device.desktop} {
  right: 40px;
  
`;

const Miniaturas = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 arriba */
  gap: 10px;

  margin: 20px auto;
  width: 90%;
  justify-items: center;

  @media ${device.laptop} {
  position: absolute;
  top: 150px;
  left: 90px;
  width: auto;
}
`;

const Miniatura = styled.img<{ $activo: boolean }>`
  width: 55px;
  height: 55px;
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

  @media ${device.laptop} {
    flex-direction: row;   /* desktop */
    justify-content: space-between;
    align-items: center;
  }
`;

const Pergamino = styled.div`
  width: 100%;             
  margin: 0 auto;
  padding: 20px;         

  background-image: url(${pergamino});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 85%;
    max-width: 400px;
  }

  @media ${device.laptop} {
    position: absolute;
    bottom: 80px;
    left: 90px;
    width: 500px;
    height: 350px;
  }

   @media ${device.desktop} {
   max-width: none;
    bottom: 40px;
    left: 140px;
    width: 600px;
    height: 400px;
  }
`;

const Texto = styled.div`
  width: 80%;
  text-align: center;
  font-family: "Amarante";

  h2 {
    color: #011740;
    font-size: 1.3rem;
    margin-bottom: 10px;
    padding: 10px;
  }
  p {
    color: #000;
    font-size: 0.9rem;
    line-height: 1.4;
    
  }
  @media ${device.laptop}{
  h2 {
    font-size: 1.5rem;
    padding: 20px;
  }
  p { 
  font-size: 1rem;
  }

`;
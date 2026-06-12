import React, { useState } from "react";
import styled from "styled-components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { TeamMember } from "../data/teamData";
import { device } from "../pantallas/breakpoints";

interface CarouselTeamProps {
    members: TeamMember[];
}

const CARDS_VISIBLE = 4;

const cardThemes = [
    { bg: "linear-gradient(160deg, #1a3a3a 0%, #0d2626 100%)", border: "#3a7a6a" },
    { bg: "linear-gradient(160deg, #3b2a1a 0%, #2a1c0e 100%)", border: "#8a6a3a" },
    { bg: "linear-gradient(160deg, #1a3a3a 0%, #0d2626 100%)", border: "#3a7a6a" },
    { bg: "linear-gradient(160deg, #3b2a1a 0%, #2a1c0e 100%)", border: "#8a6a3a" },
    { bg: "linear-gradient(160deg, #1a3a3a 0%, #0d2626 100%)", border: "#3a7a6a" },
    { bg: "linear-gradient(160deg, #3b2a1a 0%, #2a1c0e 100%)", border: "#8a6a3a" },
];

export const CarouselTeam: React.FC<CarouselTeamProps> = ({ members }) => {
    const [startIndex, setStartIndex] = useState(0);

    const next = () => {
        setStartIndex((prev) => (prev + 1) % members.length);
    };

    const prev = () => {
        setStartIndex((prev) => (prev - 1 + members.length) % members.length);
    };

    const visibleMembers = Array.from({ length: CARDS_VISIBLE }, (_, i) => {
        const index = (startIndex + i) % members.length;
        return { member: members[index], themeIndex: index };
    });

    return (
        <Wrapper>
            <Titulo>EQUIPO</Titulo>
            <CarouselContainer>
                <ArrowButton onClick={prev} aria-label="Anterior" $side="left">
                    <ChevronLeft size={40} />
                </ArrowButton>

                <Track>
                    {visibleMembers.map(({ member, themeIndex }) => {
                        const theme = cardThemes[themeIndex % cardThemes.length];
                        return (
                            <Card key={member.id} $bg={theme.bg} $border={theme.border}>
                                <OvalFrame>
                                    <img src={member.imagen} alt={member.nombre} />
                                </OvalFrame>
                                <Nombre>{member.nombre}</Nombre>
                                <Rol>{member.rol}</Rol>
                                {member.link && (
                                    <PortafolioLink
                                        href={member.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        PORTAFOLIO
                                    </PortafolioLink>
                                )}
                            </Card>
                        );
                    })}
                </Track>

                <ArrowButton onClick={next} aria-label="Siguiente" $side="right">
                    <ChevronRight size={40} />
                </ArrowButton>
            </CarouselContainer>
        </Wrapper>
    );
};

/* ==================== Styled Components ==================== */

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 0;
`;
const Titulo = styled.h2`
  font-family: "Amarante", serif;

  font-size: 1.8rem;
  color: #f4a009;

  text-align: center;

  margin-bottom: 1.5rem;

  letter-spacing: 0.15em;
  text-transform: uppercase;

  line-height: 1.1;

  @media ${device.tablet} {
    font-size: 2.4rem;
    margin-bottom: 2rem;
    letter-spacing: 0.2em;
  }

  @media ${device.laptop} {
    font-size: 3rem;
    margin-bottom: 2.5rem;
    letter-spacing: 0.3em;
  }
`;

const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    justify-content: center;
    gap: 0.5rem;
`;

const Track = styled.div`
    display: flex;
    gap: 1.2rem;
    overflow: hidden;

`;

const Card = styled.div<{ $bg: string; $border: string }>`
    flex: 0 0 90%; // 👈 1 card (móvil)
    height: 400px;
    background: ${({ $bg }) => $bg};
    border: 2px solid #c4a464;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;
    transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease, background 0.4s ease;

    &:hover {
        transform: translateY(-6px);
        background: linear-gradient(160deg, #2a1040 0%, #1a0830 100%);
        box-shadow: 0 0 25px rgba(138, 43, 226, 0.4), 0 8px 30px rgba(0, 0, 0, 0.5);
        border-color: #00e5ff;
    }

    &:hover ${() => OvalFrame} {
        border-color: #00e5ff;
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.5);
    }

    &:hover ${() => Nombre} {
        color: #d4a0ff;
    }

    &:hover ${() => PortafolioLink} {
        color: #d4a0ff;
        border-top-color: rgba(138, 43, 226, 0.4);
    }
    
@media ${device.tablet} {
    flex: 0 0 45%; // 👈 entran 2
    height: 500px;
  }

   @media ${device.laptop} {
    flex: 0 0 30%; // 👈 entran 3
   
  }

   @media ${device.desktop} {
    flex: 0 0 260px; // 4 visibles
     height:420px;
  }
`;

const OvalFrame = styled.div`
    width: 170px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid #c4a464;
    margin-bottom: 1rem;
    flex-shrink: 0;
    transition: border-color 0.4s ease, box-shadow 0.4s ease;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: sepia(0.3);
        transition: filter 0.4s ease;
    }
`;

const Nombre = styled.h3`
    font-family: "Amarante", serif;
    font-size: 1.25rem;
    color: #e8d8b8;
    margin: 0.3rem 0;
    text-align: center;
    transition: color 0.4s ease;
`;

const Rol = styled.p`
    font-family: "Amarante", serif;
    font-size: 0.85rem;
    color: #a8a8a8;
    margin: 0 0 0.8rem;
    text-align: center;
`;

const PortafolioLink = styled.a`
    font-family: "Amarante", serif;
    font-size: 0.8rem;
    color: #c4a464;
    text-decoration: none;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    border-top: 1px solid rgba(196, 164, 100, 0.3);
    padding-top: 0.5rem;
    transition: color 0.4s ease, border-top-color 0.4s ease;

    &:hover {
        color: #d4a0ff;
    }
`;

const ArrowButton = styled.button<{ $side: string }>`
    background: none;
    border: none;
    color: #f4a009;
    z-index: 10;
    padding: 0.5rem;
    transition: color 0.3s ease;
    flex-shrink: 0;

    &:hover {
        color: #0697a8;
    }
`;

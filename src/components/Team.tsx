import { useState } from "react";
import styled from "styled-components";
import { CarouselTeam } from "./CarouselTeam.tsx";
import { teamMembers } from "../data/teamData.ts";
//import { useMenu } from "../context/MenuContext";
import { VideoLscModal } from "./ui/VideoLscModal.tsx";
//import { BotonLsc } from "./ui/BotonLsc";
import EquipoVideo from "../assets/videos/Equipo.mp4";

export const Team = () => {
    const [showModal, setShowModal] = useState(true);
    // const { menuAbierto } = useMenu();
    return (
        <TeamContainer id ="Equipo">
            <CarouselTeam members={teamMembers} />
            {showModal &&(
            <VideoLscModal 
                videoSrc={EquipoVideo}
                onClose={()=>setShowModal(false)}
            />
            )}
           {/* <BotonLsc
               $visible={!showModal && !menuAbierto}
               onClick={() => setShowModal(true)}
            />*/}
        </TeamContainer>
    );
};

const TeamContainer = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

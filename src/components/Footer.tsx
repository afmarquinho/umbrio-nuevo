import { forwardRef } from "react";
import styled from "styled-components";
import { device } from "../pantallas/breakpoints";

import Face from "../assets/icons/social-media/face.svg";
import Instagram from "../assets/icons/social-media/instagram.svg";
import Youtube from "../assets/icons/social-media/youtube.svg";
import Whas from "../assets/icons/social-media/whas.svg";
import Tiktok from "../assets/icons/social-media/tictok.svg";

import LogoGov from "../assets/img/logo.png";
import LogoSena from "../assets/img/logo-sena.webp";


const SocialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/umbrio/", icon: Face },
    { name: "Instagram", url: "https://www.instagram.com/umbrio/", icon: Instagram },
    { name: "YouTube", url: "https://youtube.com/umbrio", icon: Youtube },
    { name: "WhatsApp", url: "https://www.whatsapp.com/umbrio", icon: Whas },
    { name: "TikTok", url: "https://tiktok.com/@umbrio", icon: Tiktok },
];


const BlogLinks = [
    { name: "CENIGRAF", url: "https://comunicaciongraficasena.blogspot.com/" },
    { name: "CEFAFC", url: "https://actividadfisicaycultura.blogspot.com/" },
];

//  Footer Componente con ref
export const Footer = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
    (props, ref) => {
        const year = new Date().getFullYear();
    return (
        <Contenedor ref={ref} {...props}>
        <Contenido>
            <TopSeccion>
            <Sociales>
                {SocialLinks.map((item) => (
                <SocialLink
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                >
                    <img src={item.icon} alt={item.name} />
                </SocialLink>
                ))}
            </Sociales>

            <Logos>
                <img src={LogoSena} alt="SENA" />
                <img src={LogoGov} alt="Umbrío" />
            </Logos>
            </TopSeccion>

            <Links>
            {BlogLinks.map((item) => (
                <FooterLink
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                >
                {item.name}
                </FooterLink>
            ))}
            </Links>
        </Contenido>

        <Bottom>© {year} Equipo Web-Umbrio | Todos los derechos reservados.</Bottom>
        </Contenedor>
    );
});

Footer.displayName = "Footer";

// ================= Styled components =================
const Contenedor = styled.footer`
    background: #001740;
    color: #f4a009;
    padding-top: 100px;
`;

const Contenido = styled.div`
    width: min(1200px, 90%);
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const TopSeccion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;

@media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Sociales = styled.div`
    display: flex;
    gap: 12px;
    justify-content: center;

@media ${device.tablet} {
    gap: 15px;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  transition: transform 0.3s ease;

  img {
    width: 32px;
  }

  &:hover {
    transform: translateY(-3px);
  }

  @media ${device.tablet} {
    img {
      width: 36px;
    }
  }

  @media ${device.laptop} {
    img {
      width: 40px;
    }
  }
`;

const Logos = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;

    img {
        height: 40px;
    }
     @media ${device.tablet} {
    img {
      height: 45px;
    }
  }
   @media ${device.laptop} {
    img {
      height: 50px;
    }
  }
`;

const Links = styled.nav`
    display: flex;
    flex-direction:center;
    gap: 10px;

    @media ${device.tablet} {
    flex-direction: row;
    justify-content: center;
    gap: 25px;
  }
`;

const FooterLink = styled.a`
    color: #f4a009;
    font-weight: 500;
    text-decoration: none;
    position: relative;
    font-family: 'amarante';

    &:after {
        content: "";
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0%;
        height: 2px;
        background: #f4a009;
        transition: 0.3s ease;
    }

    &:hover:after {
        width: 100%;
    }
    @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const Bottom = styled.div`
    background: #302D5A;
    text-align: center;
    padding: 15px 0;
    font-size: 14px;
    margin-top: 30px;
    font-family: 'amarante';

     @media ${device.tablet} {
    font-size: 14px;
  }
`;
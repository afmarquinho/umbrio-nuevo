import Ivonne from "../assets/equipoFotos/IvonneEspíndola.webp";
import Leonardo from "../assets/equipoFotos/Leonardo.webp";
import Eddy from "../assets/equipoFotos/Hombre.webp";
import Marco from "../assets/equipoFotos/marquiño.webp";
import Fay from "../assets/equipoFotos/Faizule.webp";
import Jose from "../assets/equipoFotos/jose-alejandro.webp";
import Jhon from "../assets/equipoFotos/jhonge16.webp";
import Dayis from "../assets/equipoFotos/Dayis.webp";
import Ana from "../assets/equipoFotos/Ana.webp";
import Andres from "../assets/equipoFotos/Andrés.webp";
import Adriana from "../assets/equipoFotos/Adriana.webp";
import Angie from "../assets/equipoFotos/Angie.webp";
import Carlos from "../assets/equipoFotos/Carlos.webp";
import Angela from "../assets/equipoFotos/Angela.webp";
import Cristian from "../assets/equipoFotos/CristianCharris.webp";
import Dania from "../assets/equipoFotos/DaniaMoncada.webp";
import CarMan from "../assets/equipoFotos/CarlosMancera.webp";
import Edi from "../assets/equipoFotos/EdiSánchez.webp";
import Edwin from "../assets/equipoFotos/EdwinTriviño.webp";
import Laura from "../assets/equipoFotos/DanielaMediorreal.webp";
import Felipe from "../assets/equipoFotos/FelipeFranco.webp";
import Juliana from "../assets/equipoFotos/JulianaSánchez.webp";
import Estefania from "../assets/equipoFotos/EstefaníaMelo.webp";
import LuisCruz from "../assets/equipoFotos/LuisCruz.webp";
import LuisFernando from "../assets/equipoFotos/LuisFernando.webp";
import Karol from "../assets/equipoFotos/KarolCharry.webp";
import Mathias from "../assets/equipoFotos/MathiasPedraza.webp";
import Matiw from "../assets/equipoFotos/MatiusQuintero.webp";
import Majo from "../assets/equipoFotos/MaríaJosé.webp";
import Sally from "../assets/equipoFotos/SallyFonseca.webp";
import AngelNicolas from "../assets/equipoFotos/NicolásRocha.webp";
import Royber from "../assets/equipoFotos/RoyberPacheco.webp";
import Sharyck from "../assets/equipoFotos/Sharyck.webp";
import Silvia from "../assets/equipoFotos/SilviaMora.webp";
import Sandra from "../assets/equipoFotos/SandraElizabeth.webp";
import Yaizel from "../assets/equipoFotos/YaizelMelenje.webp";
import Yeidy from "../assets/equipoFotos/YeidyMontoya.webp";
import Valentina from "../assets/equipoFotos/ValentinaOchoa.webp";
import CristianPerez from "../assets/equipoFotos/CristianPerez.webp";
import Yession from "../assets/equipoFotos/YeissonAgudelo.webp";
import LeonardoVergel from "../assets/equipoFotos/leonardo-vergel.webp";
import Melissa from "../assets/equipoFotos/Mujer.webp";
import NicolasSantiago from "../assets/equipoFotos/nicolas.webp";
import NicolasFelipe from "../assets/equipoFotos/Hombre.webp";
import Yudi from "../assets/equipoFotos/YudiFernanda.webp";
import AnaCristina from "../assets/equipoFotos/CristinaJave.webp";
import YudisSanchez from "../assets/equipoFotos/YudisMartinez.webp";

export interface TeamMember {
  id: number;
  nombre: string;
  rol: string;
  imagen: string;
  link?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    nombre: "Ivonne Espíndola",
    rol: "Project Lead / Instructor de Animación",
    imagen: Ivonne,
    link: "#"
  },
  {
    id: 2,
    nombre: "Leonardo Huertas",
    rol: "Instructor de Animación",
    imagen: Leonardo,
    link: "#"
  },
  {
    id: 3,
    nombre: "Eddy Camacho",
    rol: "Coordinator Académico",
    imagen: Eddy,
    link: "#"
  },
  {
    id: 4,
    nombre: "Marquiño",
    rol: "Full Stack",
    imagen: Marco,
    link: "https://marcofernandez.netlify.app/"
  },
  {
    id: 5,
    nombre: "Faizule Perez",
    rol: "Web & Multimedia Developer",
    imagen: Fay,
    link: "#"
  },
  {
    id: 6,
    nombre: "Jose Alejandro",
    rol: "Web & Multimedia Developer",
    imagen: Jose,
    link: "#"
  },
  {
    id: 7,
    nombre: "JhonGe",
    rol: "Developer Full-Stack & Data-Driven",
    imagen: Jhon,
    link: "https://www.jhonge.com.co/"
  },
  {
    id: 8,
    nombre: "Dayanna Saavedra",
    rol: "Web & Multimedia Developer",
    imagen: Dayis,
    link: "#"
  },
  {
    id: 9,
    nombre: "Ana María Janer",
    rol: "Animadora 3D",
    imagen: Ana,
    link: "https://cara.app/artipiagui"
  },
  {
    id: 10,
    nombre: "Andrés Cardona",
    rol: "Lorem Ipsum",
    imagen: Andres,
    link: "#"
  },
  {
    id: 11,
    nombre: "Adriana Acosta",
    rol: "Lorem Ipsum",
    imagen: Adriana,
    link: "#"
  },
  {
    id: 12,
    nombre: "Angie Alejandra",
    rol: "Artista Conceptual",
    imagen: Angie,
    link: "https://www.instagram.com/alighostly?igsh=MXJxMHFoMHV5cGdyaA=="
  },
  {
    id: 13,
    nombre: "Carlos Gustavo",
    rol: "Game Dev & Sound Design",
    imagen: Carlos,
    link: "https://linktr.ee/solarstudiosfilms"
  },
  {
    id: 14,
    nombre: "Ángela Rocio",
    rol: "Animadora 3D",
    imagen: Angela,
    link: "https://acortar.link/e7ymy0"
  },
  {
    id: 15,
    nombre: "CrisFer",
    rol: "Desarrollador de Experiencias XR",
    imagen: Cristian,
    link: "#"
  },
  {
    id: 16,
    nombre: "Dania Stefania",
    rol: "Animadora 3D",
    imagen: Dania,
    link: "#"
  },
  {
    id: 17,
    nombre: "CarMan",
    rol: "Desarrollador de Experiencias XR",
    imagen: CarMan,
    link: "#"
  },
  {
    id: 18,
    nombre: "Edi Sánchez",
    rol: "Animador 3D",
    imagen: Edi,
    link: "#"
  },
  {
    id: 19,
    nombre: "Edwin Triviño",
    rol: "Animador 3D",
    imagen: Edwin,
    link: "#"
  },
  {
    id: 20,
    nombre: "Laura Daniela",
    rol: "Ilustradora",
    imagen: Laura,
    link: "https://saturnoed.my.canva.site/"
  },
  {
    id: 21,
    nombre: "Felipe Franco",
    rol: "Animación 3D",
    imagen: Felipe,
    link: "https://www.canva.com/design/DAGYjN7Hv40/0Ds_C6pCw2DdxnHuBFNxiw/edit"
  },
  {
    id: 22,
    nombre: "Juliana Sánchez",
    rol: "Lorem Ipsum",
    imagen: Juliana,
    link: "#"
  },
  {
    id: 23,
    nombre: "Estefanía Melo",
    rol: "Animadora 3D",
    imagen: Estefania,
    link: "#"
  },
  {
    id: 24,
    nombre: "Luis Cruz",
    rol: "Animador 3D & Aux. de Auditoría",
    imagen: LuisCruz,
    link: "https://www.artstation.com/nomosiss92"
  },
  {
    id: 25,
    nombre: "LuiFer",
    rol: "Desarrollo Publicitario",
    imagen: LuisFernando,
    link: "https://www.behance.net/luisfecharris1"
  },
  {
    id: 26,
    nombre: "karol Yuliana",
    rol: "Desarrollo Publicitario & Agroindustria Alimentaria",
    imagen: Karol,
    link: "#"
  },
  {
    id: 27,
    nombre: "Mathias Daniel",
    rol: "Contador Público & Animador Digital",
    imagen: Mathias,
    link: "https://www.artstation.com/mattmax0206"
  },
  {
    id: 28,
    nombre: "Matiw Quintero",
    rol: "3D Artist",
    imagen: Matiw,
    link: "https://www.instagram.com/makingarttechnology/?utm_source=ig_web_button_share_sheet"
  },
  {
    id: 29,
    nombre: "Majo",
    rol: "Web & Multimedia Developer",
    imagen: Majo,
    link: "#"
  },
  {
    id: 30,
    nombre: "Sally Fonseca",
    rol: "Lorem Ipsum",
    imagen: Sally,
    link: "#"
  },
  {
    id: 31,
    nombre: "Angel Nicolás",
    rol: "Animador 3D",
    imagen: AngelNicolas,
    link: "https://youtu.be/qxQfYWcr2cI"
  },
  {
    id: 32,
    nombre: "Royber Pacheco",
    rol: "Lorem Ipsum",
    imagen: Royber,
    link: "#"
  },
  {
    id: 33,
    nombre: "Sharyck Sofía",
    rol: "Web & Multimedia Developer",
    imagen: Sharyck,
    link: "#"
  },
  {
    id: 34,
    nombre: "Silvia Marcela",
    rol: "Ing. Multimedia & Animadora 3D",
    imagen: Silvia,
    link: "https://silviamoraportafolio.netlify.app/"
  },
  {
    id: 35,
    nombre: "Sandra Elizabeth",
    rol: "Ing Sistemas & Animadora 3D",
    imagen: Sandra,
    link: "#"
  },
  {
    id: 36,
    nombre: "Yaizel Melenje",
    rol: "Creadora de mundos 3D/Ilustradora",
    imagen: Yaizel,
    link: "https://cara.app/artipiagui"
  },
  {
    id: 37,
    nombre: "Yeidy Paola",
    rol: "Diseñadora Gráfica & Visual",
    imagen: Yeidy,
    link: "https://www.behance.net/yeidymontoya/projects?fbclid=PAZXh0bgNhZW0CMTEAAaf9SWxuHr3MPJGLNIli_KMxbEXrxMVX4LOfWYM2Pt9rJzUWzNreAB44mp6-jA_aem_5OHtI_tB7f6TmbdlsX1MAQ"
  },
  {
    id: 38,
    nombre: "Valentina Ochoa",
    rol: "Ilustradora",
    imagen: Valentina,
    link: "https://www.instagram.com/von_eko/"
  },
  {
    id: 39,
    nombre: "Cristian Perez",
    rol: "Web & Multimedia Developer",
    imagen: CristianPerez,
    link: "#"
  },
  {
    id: 40,
    nombre: "Yeisson Agudelo",
    rol: "Web & Multimedia Developer",
    imagen: Yession,
    link: "#"
  },
  {
    id: 41,
    nombre: "Leonardo Vergel",
    rol: "Animador 3D",
    imagen: LeonardoVergel,
    link: "https://www.linkedin.com/in/leonardo-vergel-alvarez-bb6855124/"
  },
  {
    id: 42,
    nombre: "Melissa Yepes",
    rol: "Psicóloga & Animadora Digital",
    imagen: Melissa,
    link: "https://www.canva.com/design/DAGtFEPUrDg/XRTDZRLKl7CJXQfcOOPL4Q/edit?utm_content=DAGtFEPUrDg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 43,
    nombre: "Nicolas Santiago",
    rol: "Animación 3D",
    imagen: NicolasSantiago,
    link: "https://www.canva.com/design/DAGYjN7Hv40/0Ds_C6pCw2DdxnHuBFNxiw/edit?utm_content=DAGYjN7Hv40&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 44,
    nombre: "Nicolas Felipe",
    rol: "Animación 3D",
    imagen: NicolasFelipe,
    link: "https://www.canva.com/design/DAGYjN7Hv40/0Ds_C6pCw2DdxnHuBFNxiw/edit?utm_content=DAGYjN7Hv40&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
  },
  {
    id: 45,
    nombre: "Yudi Fernanda",
    rol: "Ing. Agroindustrial & Desarrollador Publicitario",
    imagen: Yudi,
    link: "http://www.linkedin.com/in/fernanda-triana-mora-7832a0256"
  },
  {
    id: 46,
    nombre: "Ana Cristina",
    rol: "Técnica en Secretariado & ADS",
    imagen: AnaCristina,
    link: "https://www.linkedin.com/in/ana-cristina-jave-barrera-18783a347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    id: 47,
    nombre: "Yudis Sanchez",
    rol: "Web & Multimedia Developer",
    imagen: YudisSanchez,
    link: "https://www.linkedin.com/in/yudys-martinez-101352242/"
  }
];
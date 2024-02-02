import { Avatar } from "../../components";
import logo from "../../assets/logo-dark.png";
import can from "../../assets/meme.jpeg";
import agu from "../../assets/bot.jpeg";

import "./style.css";

export const AboutPage = () => {
  return (
    <div>
      <div className="card-fixed slide-right">
        <h1>Sobre nosotros</h1>
        <h4>
          En Creatif nos dedicamos a impulsar la creatividad y la excelencia en
          el mundo digital. Desde la programación meticulosa hasta el diseño
          gráfico sorprendente y estrategias de marketing efectivas, abordamos
          cada proyecto con entusiasmo y dedicación.
        </h4>
      </div>
      <div className="section">
        <h1>Nuestro equipo</h1>
        <h4>
          Somos un apasionado grupo de estudiantes que comparten un interés
          común: la creación digital. En Creatif, fusionamos habilidades de
          programación, diseño gráfico y marketing para dar vida a proyectos
          innovadores y cautivadores.
        </h4>
      </div>
      <div className="horizontal">
        <Avatar
          title="Candela de Chaga"
          //   subtitle="Diseño gráfico/Marketing"
          subtitle="CEO & Co-Founder"
          avatar={can}
        />
        <img className="logo-about" src={logo} alt="logo creatif" />
        <Avatar
          title="Agustin Carabajal"
          //   subtitle="Ingenieria en sistemas"
          subtitle="CTO & Co-Founder"
          avatar={agu}
        />
      </div>
    </div>
  );
};

import "./style.css";
import { FaRegCopyright } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="footer">
      <h5>
        <FaRegCopyright /> 2024 - Todos los derechos reservados. Powered by{" "}
        <span className="powered">Creatif UI</span>
      </h5>
    </footer>
  );
};

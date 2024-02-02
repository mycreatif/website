import "./style.css";
import logo from "../../assets/logo-dark.png";
import { CartButton } from "..";
import { useNavigate } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useCart } from "../../hooks";

const sections = [
  {
    name: "Inicio",
    url: "/",
  },
  {
    name: "Servicios",
    url: "services",
  },
  {
    name: "Impresiones",
    url: "prints",
  },
  {
    name: "Nosotros",
    url: "about",
  },
  {
    name: "Contacto",
    url: "contact",
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const { setShowCart } = useCart();

  const handleMenu = () => {
    const nav = document.querySelector(".site-navigation");
    nav?.classList.toggle("active");
  };

  const handleNavigate = (url: string) => {
    navigate(url);
    handleMenu();
    setShowCart(false);
  };

  return (
    <header className="site-header">
      <div className="site-identity">
        <div className="mobile-cart">
          <CartButton />
        </div>
        <div className="logo">
          <a href="/">
            <img src={logo} width={25} alt="creatif logo" />
          </a>
        </div>
        <div className="menu-toggle" onClick={handleMenu}>
          <CiMenuFries />
        </div>
      </div>
      <nav className="site-navigation">
        <ul className="nav">
          {sections.map((section) => (
            <li
              key={section.name}
              className="link"
              onClick={() => handleNavigate(section.url)}
            >
              {section.name}
            </li>
          ))}
          <li>
            <div className="web-cart">
              <CartButton />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

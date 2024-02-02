import { useCart } from "../../hooks";
import "./style.css";
import { currencyFormat } from "../../utils";

type CardProps = {
  img: string;
  title: string;
  description?: string;
  price?: number;
  quantity?: number;
  rose?: boolean;
  expand?: boolean;
  zoom?: boolean;
};

export const Card = ({ img, title }: CardProps) => {
  return (
    <div className="zoom">
      <img src={img} alt="Avatar" className="img" />
      <div className="container">
        <h3>
          <b>{title}</b>
        </h3>
      </div>
    </div>
  );
};

export const SimpleCard = ({ children }: any) => {
  return <div className="simpleCard">{children}</div>;
};

export const TestimonyCard = ({ children }: any) => {
  return <div className="testimonyCard">{children}</div>;
};

type promoCardProps = {
  title: string;
  description?: string;
  price: number;
};

export const PromoCard = ({ title, description, price }: promoCardProps) => {
  const { addItem } = useCart();

  const handleClick = () => {
    addItem({
      name: title,
      price: price,
      quantity: 1,
    });
  };

  return (
    <div className="card-fixed small">
      <div className="promoCard">
        <h3>{title}</h3>
        <div className="pricing">
          <span>$</span>
          <h1>{currencyFormat(price)}</h1>
        </div>
        <div className="includes">
          <h2>{description}</h2>
        </div>
        <button onClick={handleClick}>Comprar</button>
      </div>
    </div>
  );
};

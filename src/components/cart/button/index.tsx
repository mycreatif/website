import { RiShoppingCartLine, RiShoppingCartFill } from "react-icons/ri";
import "./style.css";
import { useCart } from "../../../hooks";

const Badge = () => {
  const { items, hasItems } = useCart();

  return hasItems && <div className="badge">{items.length}</div>;
};

export const CartButton = () => {
  const { hasItems, setShowCart } = useCart();

  const handleClick = () => {
    setShowCart((prev: any) => !prev);
  };

  return (
    <div className="cart-button" onClick={handleClick}>
      <Badge />
      {hasItems ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
    </div>
  );
};

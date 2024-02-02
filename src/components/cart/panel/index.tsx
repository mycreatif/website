import { useCart, useNotificationService } from "../../../hooks";
import { ItemType } from "../../../types";

import { CiCircleRemove } from "react-icons/ci";

import "./style.css";
import { useNavigate } from "react-router-dom";
import { Divider } from "../..";
import { useState } from "react";
import { currencyFormat } from "../../../utils";

const Item = ({ item }: { item: ItemType }) => {
  const { removeItem, setCart } = useCart();
  const [price, setPrice] = useState(item.price);

  const handleChange = (e: any) => {
    setCart((prev: any) => ({
      ...prev,
      items: prev.items.map((prevItem: ItemType) =>
        prevItem.name === item.name
          ? { ...prevItem, quantity: e.target.value }
          : prevItem
      ),
    }));
    setPrice(item.price * e.target.value);
  };

  const handleRemove = () => {
    removeItem(item.name);
  };

  return (
    <div className="item-container" key={item.id}>
      {item.image && (
        <div className="image">
          <img src={item.image} alt={item.name} />
        </div>
      )}
      <div className="content">
        <h3 className="item-title">{item.name}</h3>
      </div>
      <div className="actions">
        <select
          defaultValue={item.quantity}
          onChange={handleChange}
          className="quantity"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <div className="item-price">${currencyFormat(price)}</div>
        <div className="remove" onClick={handleRemove}>
          <CiCircleRemove />
        </div>
      </div>
    </div>
  );
};

export const CartPanel = () => {
  const { items, showCart, hasItems, setShowCart, total } = useCart();
  const { notify } = useNotificationService();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("prints");
    setShowCart(false);
  };

  return (
    showCart && (
      <div className="cart-panel">
        <div className="cart-wrapper">
          {hasItems ? (
            <>
              <h1>Mi carrito</h1>
              <div className="">
                {items.map((item: ItemType) => (
                  <Item item={item} />
                ))}
              </div>
              <Divider small />
              <div className="total">
                <h3 className="bold">${currencyFormat(total)}</h3>
                <button onClick={() => notify()}>Realizar pedido</button>
              </div>
            </>
          ) : (
            <div className="centered">
              <h4>No hay productos en el carrito</h4>
              <h3 className="link" onClick={handleNavigate}>
                Ver productos
              </h3>
            </div>
          )}
        </div>
      </div>
    )
  );
};

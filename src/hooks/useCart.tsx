import { createContext, useContext, useEffect, useState } from "react";
import { CartProps, CartType, INITIAL_STATE, ItemType } from "../types";

export const CartContext = createContext<CartType>({
  cart: { items: [] },
  setCart: () => {},
  showCart: false,
  setShowCart: () => {},
});

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState<CartProps>(INITIAL_STATE);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const { cart, setCart, showCart, setShowCart } = useContext(CartContext);
  const [hasItems, setHasItems] = useState(false);
  const [total, setTotal] = useState(0);

  const addItem = (item: ItemType) => {
    if (cart.items.some((i) => i.name === item.name)) {
      // newItems = cart.items.map((i) =>
      //   i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
      // );
      setShowCart(true);
    } else {
      const newItems = [...cart.items, item];
      setCart({ ...cart, items: newItems });
    }
  };

  const removeItem = (name: number | string) => {
    const newItems = cart.items.filter((item) => item.name !== name);
    setCart({ ...cart, items: newItems });
  };

  useEffect(() => {
    setHasItems(cart?.items.length > 0);
    if (cart?.items.length === 0) {
      setShowCart(false);
    }
    if (cart?.items.length)
      setTotal(
        cart.items.reduce((acc, item) => {
          return acc + item.quantity * item.price;
        }, 0)
      );
  }, [cart]);

  return {
    cart,
    setCart,
    items: cart.items,
    addItem,
    hasItems,
    showCart,
    setShowCart,
    removeItem,
    total,
  };
};

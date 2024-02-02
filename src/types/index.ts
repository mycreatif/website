export type CartType = {
  cart: CartProps;
  setCart: (cart: any) => void;
  showCart: boolean;
  setShowCart: (showCart: any) => void;
};

export type CartProps = {
  items: ItemType[];
};

export type ItemType = {
  id?: number | string;
  name: string;
  price: number;
  image?: string;
  description?: string;
  quantity: number;
};

export const INITIAL_STATE: CartProps = {
  items: [],
};

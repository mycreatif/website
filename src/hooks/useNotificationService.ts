import { useCart } from ".";
import { ItemType } from "../types";
import { currencyFormat } from "../utils";

const PHONE_NUMBER = "+5491169188393";

const WPP_URL = "https://api.whatsapp.com/send";

export const useNotificationService = () => {
  const { items, total } = useCart();

  const messageBuilder = (phone: number | string, message: string) => {
    return `${WPP_URL}?phone=${phone}&text=${message}`;
  };

  const openWpp = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return {
    notify: (message?: string) => {
      if (message) {
        console.log(message);
      } else {
        const msg = `Hola, estoy interesado en los siguientes productos:%0a
            ${items.map((item: ItemType) => {
              return `-${item.name} x${item.quantity}%0a`;
            })}
            *Total: $${currencyFormat(total)}*
        `;

        return openWpp(messageBuilder(PHONE_NUMBER, msg));
      }
    },
  };
};

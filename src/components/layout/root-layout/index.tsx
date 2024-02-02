import { Outlet } from "react-router-dom";
import { Header, Footer } from "../..";
import { CartPanel } from "../../cart/panel";

export const RootLayout = () => {
  return (
    <div className="centered">
      <Header />
      <CartPanel />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

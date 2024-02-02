import { Outlet } from "react-router-dom";

export const PrintsLayout = () => {
  return (
    <div>
      <div className="card-fixed slide-right">
        <h1>Servicio de impresión</h1>
        <h4>
          Aquí encontrarás variedad de servicios que ofrecemos para imprimir,
          desde tus recuerdos en polaroid hasta las piezas graficas para tu
          negocio.
        </h4>
      </div>
      <Outlet />
    </div>
  );
};

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  service: string;
  description: string;
};

export const ContactPage = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log("logged data: ", data);
  };

  const { handleSubmit, register } = useForm<Inputs>();

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-fixed slide-right"
      >
        <h1>Únete a nosotros en este viaje creativo</h1>
        <h4>
          Ya sea que estés buscando dar vida a una idea, mejorar tu presencia en
          línea o llevar tu marca al siguiente nivel, en Creatif estamos listos
          para enfrentar cualquier desafío.
        </h4>
        <div className="formGroup">
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre.." {...register("name")} />

          <label>Correo electrónico</label>
          <input type="email" placeholder="Tu email.." {...register("email")} />
        </div>

        <div className="formGroup">
          <label>Servicio</label>
          <select id="service" {...register("service")}>
            <option value="" disabled>
              Selecciona un servicio...
            </option>
            <option value="Diseño Web/Mobile">Diseño Web/Mobile</option>
            <option value="Community Management">Community Management</option>
            <option value="Diseño UX/UI">Diseño UX/UI</option>
            <option value="Marketing">Marketing</option>
            <option value="Diseño gráfico">Diseño gráfico</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Descripción</label>
          <textarea {...register("description")} />
        </div>

        {/* <input type="submit" value="Submit" /> */}
        <button type="submit">Contactar</button>
      </form>
    </div>
  );
};

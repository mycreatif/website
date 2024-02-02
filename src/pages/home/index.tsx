import {
  Divider,
  GoDownButton,
  SimpleCard,
  TestimonyCard,
} from "../../components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdWhatsapp,
  MdOutlineLocationOn,
} from "react-icons/md";

// import logo from "../../assets/logo-large-dark.png";
// import logoSmall from "../../assets/logo-dark.png";
// import map from "../../assets/images/map.jpg";
import { Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

// import VisibilitySensor from "react-visibility-sensor";

import cloud from "../../assets/images/cloud.png";
import growth from "../../assets/images/growth.png";
import web from "../../assets/images/web.png";
import prints from "../../assets/images/prints.png";
import logoweb from "../../assets/images/logoweb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

export const HomePage = () => {
  const position = { lat: -34.4723, lng: -58.5144 };
  const [count, setCount] = useState(0);

  // const [state, setState] = useState(false);

  useEffect(() => {
    let counts = setInterval(updated, 50);
    // if (state) counts = setInterval(updated, 50);
    // else {
    //   clearInterval(counts);
    //   setCount(0);
    // }

    if (count > 1000) {
      clearInterval(counts);
      setCount(1000);
    }
    function updated() {
      setCount((prev) => prev + 1);
    }
  }, [count]);
  // }, [count, state]);

  const ref = useRef<any>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <div className="section sectionTitle big">
        <div className="card-fixed slide-right">
          {/* <div className="bigLogo">
          <img width={25} src={logoSmall} alt="creatif logo" />
        </div> */}
          <h1>
            Construimos marcas, creamos conexiones, impulsamos resultados.
          </h1>
        </div>
        <GoDownButton onClick={handleClick} />
      </div>

      <div className="section space" ref={ref}>
        <div className="ad-wrapper right zoomtext">
          <img alt="image home creatif ads" src={growth} />
          <h1>impulsa tu negocio</h1>
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper zoomtext">
          <h1>Descubre el potencial digital hoy</h1>
          <img alt="image home creatif ads" src={cloud} />
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper right zoomtext">
          <img alt="image home creatif ads" src={web} />
          <h1>Eleva tu presencia web ahora</h1>
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper zoomtext">
          <h1>Marca la diferencia con material impreso</h1>
          <img alt="image home creatif ads" src={prints} />
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper right zoomtext">
          <img alt="image home creatif ads" src={logoweb} />
          <h1>Descubre nuestro toque creativo</h1>
        </div>
      </div>

      <Divider />

      <div className="section">
        <div className="cardGroup">
          {/* <VisibilitySensor
            onChange={(isVisible: boolean) => {
              setState(isVisible);
            }}
          > */}
          <SimpleCard>
            <div className="cardTitle">+{count}</div>
            <span className="title bold">Usuarios</span>
          </SimpleCard>
          {/* </VisibilitySensor> */}
          <SimpleCard>
            <div className="rate">
              4.5 <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="title bold">Reseñas</span>
          </SimpleCard>
          <SimpleCard>
            <div className="cardTitle">+10</div>
            <span className="title bold">Servicios</span>
          </SimpleCard>
        </div>
      </div>
      <div className="section">
        <h1>Testimonios</h1>

        <Swiper
          // install Swiper modules
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "section" : "disable"}>
                <TestimonyCard>
                  <p>
                    "Creatif hizo un trabajo excepcional al diseñar nuestro
                    sitio web. Capturaron perfectamente nuestra visión y la
                    convirtieron en una experiencia en línea cautivadora. Su
                    enfoque creativo y atención al detalle realmente marcaron la
                    diferencia. ¡Recomendaría a Creatif a cualquiera que busque
                    servicios de diseño web de alta calidad!"
                  </p>
                  <span className="title left purple">- Candela de Chaga</span>
                </TestimonyCard>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "section" : "disable"}>
                <TestimonyCard>
                  <p>
                    "Estamos encantados con los servicios de marketing digital
                    de Creatif. Nos ayudaron a desarrollar una estrategia
                    efectiva que aumentó significativamente nuestra presencia en
                    línea y generó un mayor tráfico a nuestro sitio web. Su
                    equipo experto en marketing realmente comprende las últimas
                    tendencias y sabe cómo destacar en un mercado competitivo.
                    ¡Gracias a Creatif, estamos viendo resultados positivos!"
                  </p>
                  <span className="title left purple">- Candela de Chaga</span>
                </TestimonyCard>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "section" : "disable"}>
                <TestimonyCard>
                  <p>
                    "Creatif ha elevado nuestra presencia visual con sus
                    servicios de impresión de alta calidad. Desde banners
                    vibrantes que capturan la esencia de nuestra marca hasta
                    cuadros y polaroids que han transformado nuestro espacio,
                    Creatif ha demostrado ser un socio excepcional en el ámbito
                    de la impresión. La atención meticulosa al detalle y la
                    entrega puntual de cada proyecto nos han dejado
                    impresionados. Si buscas servicios de impresión que
                    realmente destaquen, Creatif es la elección acertada.
                    Estamos agradecidos por la creatividad y profesionalismo que
                    han aportado a nuestra empresa. Sin duda, recomendamos sus
                    servicios de impresión a cualquier empresa que busque
                    destacar visualmente en el mercado."
                  </p>
                  <span className="title left purple">- Candela de Chaga</span>
                </TestimonyCard>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      <Divider />

      <div className="section">
        <h1>Donde encontrarnos</h1>
        <div className="horizontal middle wrap">
          {/* <div className="middle"> */}
          <div className="border w-50 h-100">
            {/* <img src={map} style={{ borderRadius: "7px" }} /> */}
            <Map center={position} zoom={12}>
              <Marker position={position} />
            </Map>
            {/* </div> */}
          </div>
          <ul className="container">
            <div style={{ padding: "20px 0" }}>
              <p style={{ margin: "-5px 0" }}>
                <MdOutlineLocationOn /> Buenos aires, Argentina
              </p>
              <li className="title bold purple">
                Av. Centenario 235, San Isidro
              </li>
            </div>

            <div style={{ padding: "20px 0" }}>
              <p style={{ margin: "-5px 0" }}>
                <MdOutlineEmail /> Email
              </p>
              <li className="title bold purple">mycreatif@gmail.com</li>
            </div>

            <div style={{ padding: "20px 0" }}>
              <p style={{ margin: "-5px 0" }}>
                <MdWhatsapp /> Whatsapp
              </p>
              <li className="title bold purple"> 1166934739</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

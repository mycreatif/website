import { useEffect, useRef, useState } from "react";
import { Card } from "../../components";
import { content } from "./constants";
import Atropos from "atropos/react";

import { useNavigate } from "react-router-dom";

export const PrintsPage = () => {
  const navigate = useNavigate();
  const [small, setSmall] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    if (windowSize.current[0] < 600) {
      setSmall(true);
    }
    // const handleResize = () => {
    //   windowSize.current = [window.innerWidth, window.innerHeight];
    // };
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [windowSize]);

  return (
    <div className="section-fixed">
      <div className="list">
        {/* <Card img={personalCards} title="Tarjetas personales" />
          <Card img={personalCards} rose title="Tarjetas personales" />
          <Card img={personalCards} expand title="Tarjetas personales" /> */}
        {content.map((item) => (
          <div
            key={item.title}
            onClick={() => {
              navigate(item.route);
            }}
          >
            {small ? (
              <Card img={item.img} title={item.title} />
            ) : (
              <Atropos shadow={false}>
                <Card img={item.img} zoom title={item.title} />
              </Atropos>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

import logo from "../../assets/logo-dark.png";
import "./style.css";

type dividerProps = {
  small?: boolean;
};

export const Divider = ({ small }: dividerProps) => {
  return (
    <div className={small ? "dividerContainerSmall" : "dividerContainer"}>
      {/* <div className={small ? "dividerLineSmall" : "dividerLine"}></div> */}
      <div className="dividerLine"></div>
      <img src={logo} width={small ? 15 : 20} />
      <div className="dividerLine"></div>
      {/* <div className={small ? "dividerLineSmall" : "dividerLine"}></div> */}
    </div>
  );
};

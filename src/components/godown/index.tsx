import { BsArrowDownCircle } from "react-icons/bs";
import "./style.css";

export const GoDownButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="godown">
      <a className="icon" onClick={onClick}>
        <BsArrowDownCircle />
      </a>
    </div>
  );
};

import React from "react";
import ModalCrossIcon from "../../../assets/images/svg/ModalCross.svg";
import s from "./index.module.scss"; // You can style your ScoreCard using CSS

const ScoreCard = ({ playerName, score, onClose }) => {
  return (
    <div className={s["score-card"]}>
      <img
        src={ModalCrossIcon}
        alt="cross"
        className="h-[12px] w-[12px] absolute top-[16px] right-[16px] cursor-pointer"
        onClick={onClose}
      />
      <div className={s["score-card-header"]}>
        {
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          // <img src={imageSrc} alt="User" />
        }
        <h2>{playerName}</h2>
      </div>
      <div className={s["score-card-score"]}>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default ScoreCard;

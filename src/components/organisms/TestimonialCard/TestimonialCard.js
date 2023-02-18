import cx from "classnames";
import s from "./index.module.scss";

import ImagePlaceHolder from "../../../assets/images/svg/profilePlaceholder.svg";

const TestimonialCard = ({ index, activeIndex, candidateData }) => {
  return (
    <div
      key={`Card_${index + 1}`}
      className={cx(
        s.card,
        { [s.activeCard]: index === activeIndex },
        { [s.notActiveCard]: index !== activeIndex }
      )}
      style={{
        left: `calc( 50% + ${(activeIndex - index) * -564}px)`,
      }}
    >
      <div className={s.imgWrapper}>
        <div className={s.credsWrapper}>
          <p className={s.name}>{candidateData?.name}</p>
          <p className={s.desig}>{candidateData?.designation}</p>
        </div>
        <img
          src={candidateData?.image || ImagePlaceHolder}
          height="60"
          width="60"
          alt="profielImage"
          className="rounded-full"
        />
      </div>
      <p className={s.description}>{candidateData?.text}</p>
    </div>
  );
};

export default TestimonialCard;

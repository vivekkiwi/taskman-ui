import React from "react";
import cx from "classnames";
// import PropTypes from "prop-types";
import sideArrow from "../../assets/images/svg/sideArrow.svg";

import s from "./index.module.scss";

function NavigationButtons({ items, activeIndex, handlePrev, handleNext }) {
  return (
    <div className={s.navigation}>
      <div
        className={cx(s.navBtn, s.margin_right_90, {
          [s.disableBtn]: activeIndex <= 0
        })}
        onClick={activeIndex <= 0 ? undefined : handlePrev}
      >
        <img src={sideArrow} alt="prev" />
      </div>
      <div className={s.dots}>
        {items.map((card, i) => (
          <span
            className={cx(s.dot, { [s.active_dot]: i === activeIndex })}
            key={`Dot_${i + 1}`}
          />
        ))}
      </div>
      <div
        className={cx(s.navBtn, s.margin_left_90, {
          [s.disableBtn]: activeIndex + 1 >= items.length
        })}
        onClick={activeIndex + 1 >= items.length ? undefined : handleNext}
      >
        <img src={sideArrow} alt="next" className={s.rotate_180} />
      </div>
    </div>
  );
}

// NavigationButtons.defaultProps = {
//   items: [],
//   activeIndex: 0,
//   handlePrev: () => {},
//   handleNext: () => {}
// };

// NavigationButtons.propTypes = {
//   items: PropTypes.array,
//   activeIndex: PropTypes.number,
//   handlePrev: PropTypes.func,
//   handleNext: PropTypes.func
// };

export default NavigationButtons;

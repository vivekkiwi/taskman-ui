import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import NavigationButtons from "../../NavigationButtons";
import Button from "../../../ui-components/Button";
// import * as clickhouse from "@components/pages/AAALanding/ch-s-events";
// import routeConfig from "@src/utils/routeConfig";

// import CarouselCandidateCard from "./components/CarouselCandidateCard";
// import CarouselCandidateCardShimmer from "./components/CarouselCandidateCard/CarouselCandidateCardShimmer";

import fetchCarouselAAAcandidates from "./service";

import s from "./index.module.scss";
import TestimonialCard from "../TestimonialCard";
import { data } from "./config";

function Carousel({ heading = "Hear how bankers like you found their dream job!", isViewAll = false }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsData, setCardsData] = useState(data);
  const [isApiFailed, setIsApiFailed] = useState(false);

  useEffect(() => {
    fetchCarouselAAAcandidates({ setCardsData, setIsApiFailed });
  }, []);

  const handlePrev = () => {
    // clickhouse.trackClickLeftAndRightArrowBtn({ direction: "LEFT" });
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    // clickhouse.trackClickLeftAndRightArrowBtn({ direction: "RIGHT" });
    if (activeIndex + 1 < cardsData.length) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleViewAllBtn = () => {
    // clickhouse.trackClickViewAllBtn();
  };

  return (
    <>
      {!isApiFailed && (
        <div className={s.carouselWrapper}>
          <p className={s.heading}>{heading}</p>
          <div className={s.cardsWrapper}>
            {cardsData.length > 0 ? (
              cardsData?.map((_card, index) => {
                if (Math.abs(index - activeIndex) < 3) {
                  return (
                    <TestimonialCard
                      index={index}
                      activeIndex={activeIndex}
                      candidateData={_card}
                    />
                  );
                }
                return "";
              })
            ) : (
              <div>Loading</div>
            )}
          </div>
          <NavigationButtons
            items={cardsData}
            activeIndex={activeIndex}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
          {isViewAll && <Button
            variant="link"
            className={s.viewAll}
            onClick={handleViewAllBtn}
          >
            <span className={s.txt}>View all</span>
          </Button>}
        </div>
      )}
    </>
  );
}

// Carousel.defaultProps = {
//   heading: ""
// };

// Carousel.propTypes = {
//   heading: PropTypes.string,
//   updateInterestedAAACandidateIds: PropTypes.func.isRequired
// };

export default Carousel;

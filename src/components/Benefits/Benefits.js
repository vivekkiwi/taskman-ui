import React, {useEffect, useState} from "react";
import cx from "classnames";
import Track from "../../assets/images/svg/track.svg";
import Priortise from "../../assets/images/svg/priotitize.svg";
import Collaborate from "../../assets/images/svg/collaborate.svg";
import "./index.css";

const Benefits = ({isVisited}) => {
  const [isActive, setActive] = useState(false);
  const [isActiveTwo, setActiveTwo] = useState(false);
  const [isActiveThree, setActiveThree] = useState(false);

useEffect(() => {
  if(isVisited && !isActive){
    setActive(true);

      setTimeout(() => {
        setActiveTwo(true);
      }, 700);

      setTimeout(() => {
        setActiveThree(true);
      }, 1400);
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isVisited]);

    return( <section class={cx("benefits reveal",isActive ? "reveal-active" : "" )}>
    <h2 class="benefits_heading">Key benefits of using task management software</h2>
    <div class="benefits_cards_wrapper">
        <div class="benefits_card">
        {isActive && <><img src={Track} width="106" height="85" alt="track" class="staggeredAnimation benefits_img" />
            <p class="benefits_task staggeredAnimation">Keep tasks in one place</p>
            <p class="benefits_sub_task staggeredAnimation">
                Save time, avoid losing work and information, delegate, and track tasks to stay on schedule
            </p></>}
        </div>
        <div class="benefits_card">
        { isActive && isActiveTwo && <><img src={Priortise} width="106" height="85" alt="track" class="staggeredAnimation benefits_img" />
            <p class="benefits_task staggeredAnimation">Prioritize your work</p>
            <p class="benefits_sub_task staggeredAnimation">
                Tracking tasks allows everyone to understand which are more important or require more time, so
            </p></>}
        </div>
        <div class="benefits_card">
        {isActive && isActiveThree && <><img src={Collaborate} width="106" height="85" alt="track" class="staggeredAnimation benefits_img" />
            <p class="benefits_task staggeredAnimation">Improve collaboration</p>
            <p class="benefits_sub_task staggeredAnimation">
                Tracking tasks allows everyone to understand which are more important or require more time, so
            </p></>}
        </div>
    </div>
</section>)
}

export default Benefits;
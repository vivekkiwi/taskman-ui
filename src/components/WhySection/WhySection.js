import React, {useState, useEffect} from "react";
import cx from "classnames";
import Arrow from "../../assets/images/svg/arrow_icon.svg";
import Baton from "../../assets/images/svg/baton.svg";
import Donut from "../../assets/images/svg/donut.svg";
import Illustration1 from "../../assets/images/svg/Why_Illustration-1.svg";
import Illustration2 from "../../assets/images/svg/Why_Illustration-2.svg";

import "./index.css";

const WhySection = ({isVisited = false}) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
      if(isVisited && !isActive){
        setActive(true);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisited]);

    return (   
    <section class={cx("why_section reveal",isActive ? "reveal-active" : "" )}>
        <div class="img_wrapper">
            { isActive && <><img src={Illustration1} width="612" height="688" alt="track_projects" class="illus card1" />
            <img src={Illustration2} width="612" height="688" alt="track_projects" class="illus card2 slide-animate" /></>}
        </div>
        <div class="why_wrapper">
            <h2 class="why_heading">Why do you need task management software?</h2>
            {isActive && <><p class="why_text slide-animate">Do you waste time organizing sticky notes, searching your email and apps for
            to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage 
            your time, and meet your deadlines.</p>
            <button class="why_button">LEARN MORE<img src={Arrow} height="12" width="26" alt="right_arrow" class="animate-expand" /></button> </>}
        </div>
        {isActive && <><img src={Baton} width="612" height="688" alt="baton" class="baton-img" />
        <img src={Donut} width="612" height="688" alt="donut" class="donut-img" /></>}
    </section>)
}

export default WhySection;
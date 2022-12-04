import React, {useState, useEffect} from "react";
import cx from "classnames";
import SignUpShape from "../../assets/images/svg/Signup_Shape.svg";
import "./index.css";

const Footer = ({isVisited = false}) => {
    const [isActive, setActive] = useState(false);

    useEffect(() => {
      if(isVisited && !isActive){
        setActive(true);

        console.info("Footer mounting is active");
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisited]);

    return(   
    <section class={cx("sign_up reveal",isActive ? "reveal-active" : "" )}>
        <div class="sign_up_wrapper">
            <h2 class="sign_up_heading">Get better work done</h2>
            <p class="sign_up_text">See why millions of people across 195 countries use TaskMan.</p>
            {isActive && <div class="actions actions-animation margin-top-70 no-padding">
                <input type="email signup_email" class="email" placeholder="Name@company.com" />
                <button class="try_button signup_try_button"><span>Try for free</span></button>
            </div>}
        </div>
        {isActive && <img src={SignUpShape} height="645" alt="sign_up_shape" class="sign_up_shape" />}
    </section>)
}

export default Footer;
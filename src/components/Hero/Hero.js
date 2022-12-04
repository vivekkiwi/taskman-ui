import React from "react";

import CN from "../../assets/images/svg/Cartoon_Network_logo.png";
import Booking from "../../assets/images/svg/Booking.com_logo.png";
import CocaCola from "../../assets/images/svg/CocaCola_logo.png";
import DropBox from "../../assets/images/svg/Dropbox_logo.svg";
import Toshiba from "../../assets/images/svg/Toshiba_logo.svg";
import Slack from "../../assets/images/svg/Slack_logo.svg";
import NetFlix from "../../assets/images/svg/Netflix_logo.svg";
import Spotify from "../../assets/images/svg/Spotify_logo.svg";
import RedBull from "../../assets/images/svg/RedBull_logo.svg";

import HeroBlue from "../../assets/images/svg/hero_blue.svg";
import HeroYellow from "../../assets/images/svg/hero_yellow.svg";
import HeroBlack from "../../assets/images/svg/hero_black.svg";

import Hero_Card_1 from "../../assets/images/svg/Hero_Card-1.svg";
import Hero_Card_2 from "../../assets/images/svg/Hero_Card-2.svg";
import Hero_Card_3 from "../../assets/images/svg/Hero_Card-3.svg";
import Hero_Card_4 from "../../assets/images/svg/Hero_Card-4.svg";

import "./index.css";

const data = {
    heading: "Task Management And Lists Tool",
    subHeading: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    btnText: "Try for free"
}

const Hero = () => {
    return(<section class="hero_wrapper">
    <div class="hero">
        <h1 class="hero_heading">{data.heading}</h1>
        <p class="hero_sub_heading">{data.subHeading}</p>
        <div class="actions margin-top-60">
            <input type="email effect-9" class="email" placeholder="Name@company.com" />
            <button class="try_button btn_shadow"><span>{data.btnText}</span></button>
        </div>
        <div class="icons_wrapper">
            <div class="flex">
                <img src={CN} height="59" width="97" alt="cartoon_network" class="hero-logos cartoon_logo"/>
                <img src={Booking} height="44" width="262" alt="booking" class="booking_logo hero-logos" />
                <img src={DropBox} height="45" width="229" alt="drop_box" class="hero-logos dropbox_logo" />
            </div>
            <div class="flex margin_71_0">
                <img src={Toshiba} height="32" width="207" alt="toshiba" class="hero-logos toshiba_logo" />
                <img src={Slack} height="47" width="156" alt="slack"
                    class="slack_logo hero-logos" />
                <img src={NetFlix} height="39" width="142" alt="netflix" class="hero-logos netflix_logo" />
            </div>
            <div class="flex">
                <img src={Spotify} height="57" width="189" alt="spotify" class="hero-logos spotify_logo" />
                <img src={CocaCola} height="51" width="157" alt="coca_cola" class="coca_cola_logo hero-logos" />
                <img src={RedBull} height="74" width="122" alt="red_bull" class="hero-logos red_bull_logo" />
            </div>
        </div>
    </div>
    <div>
        <img src={HeroBlack} alt="hero" class="hero-black" />
        <img src={HeroYellow} alt="hero" class="hero-yellow" />
        <img src={HeroBlue} alt="hero" class="hero-blue" /> 

        <img src={Hero_Card_1} alt="hero-card-1" class="hero-card-1 cards" />
        <img src={Hero_Card_2} alt="hero-card-2" class="hero-card-2 cards" />
        <img src={Hero_Card_3} alt="hero-card-3" class="hero-card-3 cards" />
        <img src={Hero_Card_4} alt="hero-card-4" class="hero-card-4 cards" /> 
    </div>
</section>);
}

export default Hero;
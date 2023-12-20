import { useNavigate } from "react-router-dom";
import Chip from "../../../ui-components/Chip";
import HeroVideo from "../../../assets/videos/hero.mp4";

import s from "./index.module.scss";

const CHIPS = [
  "Discover",
  "Articles",
  "Feeds",
  // "Job Notifications",
  // "Mock Test",
  // "Past Year Papers",
  // "IGNOU Material",
  // "Translation Practice Sets",
];

const TRENDING_CHIPS = [
  "Letter for aspirants",
  "Translation sets",
  "Typing",
  "PGDT",
  "IGNOU",
  "IBPS",
  "Hindi Jobs",
];

const HeroMain = () => {
  const history = useNavigate();
  const handleChipClick = (e) => {
    if (e.label === "Feeds") {
      history(`/${e?.label}`);
    } else {
      history(`/search/${e?.label}`);
    }
  };

  return (
    <section className={s.hero}>
      <div className={s.categories}>
        {CHIPS.map((item) => (
          <Chip
            label={item}
            labelClassName={s.chipLabel}
            containerClassName={s.chipsCntr}
            onClick={(item) => handleChipClick(item)}
          />
        ))}
      </div>
      <div className={s.heroMedia}>
        <video
          src={HeroVideo}
          className={s["hero-media-asset"]}
          playsInline="playsinline"
          webkit-playsinline="webkit-playsinline"
          autoplay=""
          loop
          muted
        ></video>
      </div>
      <div className={s["text-content"]}>
        <h1 className={s["hero-text-content-h1"]}>
          Explore the world’s leading design portfolios
        </h1>
        <h2 className={s["hero-text-content-h2"]}>
          Millions of designers and agencies around the world showcase their
          portfolio work on Dribbble - the home to the world’s best design and
          creative professionals.
        </h2>
      </div>
      <div className={s.trending}>
        <p className={s.text}>Trending searches:</p>
        {TRENDING_CHIPS.map((item) => (
          <Chip
            label={item}
            labelClassName={s.labelClass}
            containerClassName={s.containerClass}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroMain;

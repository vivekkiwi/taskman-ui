import { Link } from "react-router-dom";
import s from "./index.module.scss";

const GlobalHeader = () => {
  const isSignUpOpen = false;
  const isNotPractice =
    !window?.location?.pathname?.includes("/practice") || false;
  return (
    <div className={s.container}>
      <div className={s.logoWrapper}>
        <Link to="/">
          <p className={s.logo}>The Hindi Buddy</p>
        </Link>
        {/* <ul className={s.navBtns}>
          <li className={s.items}>A</li>
          <li className={s.items}>B</li>
          <li className={s.items}>C</li>
        </ul> */}
      </div>
      <div className={s.ctaWrapper}>
        {isNotPractice && (
          <Link to="/practice">
            <button className={s.signIn}>Practice</button>
          </Link>
        )}
        <Link to="/about">
          <button className={s.signIn}>About Us</button>
        </Link>
        {isSignUpOpen && (
          <>
            <button className={s.signIn}>Sign in</button>
            <button className={s.signUp}>Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
};

export default GlobalHeader;

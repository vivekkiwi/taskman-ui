import { Link } from "react-router-dom";
import s from "./index.module.scss";
import { useAuth0 } from "@auth0/auth0-react";

const GlobalHeader = () => {
  const isSignUpOpen = false;
  const { isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();
  const isNotPractice =
    !window?.location?.pathname?.includes("/practice") || false;
  const logText = isLoading ? "" : isAuthenticated ? "Log Out" : "Log in";

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
        {!!logText && (
          <button
            className={s.signIn}
            onClick={
              isAuthenticated
                ? () =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                : () => loginWithRedirect()
            }
          >
            {logText}
          </button>
        )}
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

import { useEffect, useState, useRef } from 'react';
import Benefits from '../../Benefits';
import SignUp from '../../SignUp';
import Header from '../../Header';
import Hero from '../../Hero';
import WhySection from '../../WhySection';

// NOTE :: Handling edge cases for mobile screen devices
const SCROLL_OFFSET = 200;

const EMPTY_SCROLL_STATE = {
  benefitsEl: false,
  whyEl: false,
  signUpEl: false
}

function HomePage() {
  const heroEl = useRef(0);
  const benefitsEl = useRef(0);
  const whyEl = useRef(0);
  const signUpEl = useRef(0);

  const [scrollState, setScrollState] = useState(EMPTY_SCROLL_STATE);

  const updateInitialObject = ({fieldName}) => {
    const OFFSET = fieldName ==="sign_up" ? SCROLL_OFFSET : 0;
    return {
      top: document?.getElementsByClassName(`${fieldName}`)[0]?.getBoundingClientRect()?.top - OFFSET,
      bottom: document?.getElementsByClassName(`${fieldName}`)[0]?.getBoundingClientRect()?.bottom  - OFFSET,
      isVisisted: false
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    heroEl.current = updateInitialObject({fieldName: "hero_wrapper"});
    benefitsEl.current = updateInitialObject({fieldName: "benefits"});
    whyEl.current = updateInitialObject({fieldName: "why_section"});
    signUpEl.current = updateInitialObject({fieldName: "sign_up"});
    setScrollState(EMPTY_SCROLL_STATE);

    // NOTE :: Intensional delay 
    setTimeout(() => {
      scrollToTop();
      handleScroll();
    }, 50);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  function handleScroll() {
    if(benefitsEl.current.top >= (window.scrollY + window.innerHeight/3) && benefitsEl.current.top <= (window.scrollY + 2*window.innerHeight/3)){
      benefitsEl.current.isVisisted = true;
      setScrollState({...scrollState, benefitsEl: true});
    } 
    
    if(whyEl.current.top >= (window.scrollY + window.innerHeight/3) && whyEl.current.top <= (window.scrollY + 2*window.innerHeight/3)){
      whyEl.current.isVisisted = true;
      setScrollState({...scrollState, whyEl: true});
    } 
   
    if(signUpEl.current.top >= (window.scrollY + window.innerHeight/3) && signUpEl.current.top <= (window.scrollY + 2*window.innerHeight/3)){
      signUpEl.current.isVisisted = true;
      setScrollState({...scrollState, signUpEl: true});
    }
  }

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Benefits isVisited={scrollState?.['benefitsEl']}/>
      <WhySection isVisited={scrollState?.['whyEl']}/>
      <SignUp isVisited={scrollState?.['signUpEl']}/>
    </div>
  );
}

export default HomePage;

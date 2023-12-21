import { useEffect, useState } from "react";
import s from "./index.module.scss";
import cx from "classnames";

import defaultPlaceholder from "../../../assets/images/jpg/carousel-placeholder.jpg";

const TestingPage = ({
  imgsList = [defaultPlaceholder],
  content1,
  content2,
  index: cardIndex,
  imgsCount,
}) => {
  const [index, setIndex] = useState(0);

  const fallbackIndex = (prevIndex) => {
    return (prevIndex + 1) % imgsCount;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(fallbackIndex);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [imgsCount]);

  console.info();

  return (
    <div className="flex flex-col">
      <div className={s.slideshowContainer}>
        {imgsList?.map((el, i) => (
          <div
            className={cx(s.mySlides_hidden, s.fade, {
              [s.mySlides_active]: index === i,
            })}
          >
            <div className={s.numbertext}>
              {i + 1} / {imgsCount}
            </div>
            <img src={el} style={{ width: "100%" }} alt={`Image_${i + 1}`} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", position: "relative", top: "-24px" }}>
        {imgsList?.map((el, i) => (
          <span className={cx(s.dot, { [s.active]: i === index })}></span>
        ))}
      </div>
      <div className="flex">
        <div className="flex justify-center bg-white p-4 mx-auto max-w-[960px] top-[-60px] relative">
          <div
            className="max-w-2xl min-w-[450px] mx-2 my-4 p-8 bg-[#f0f8ff6b] shadow-md rounded-md"
            dangerouslySetInnerHTML={{ __html: content1 }}
          />
          <div
            className="max-w-2xl min-w-[450px] my-4 p-8 bg-[#f0f8ff6b] shadow-md rounded-md"
            dangerouslySetInnerHTML={{ __html: content2 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TestingPage;

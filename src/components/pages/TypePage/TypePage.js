import { useState } from "react";
import axios from "axios";

import Editor from "../../organisms/Editor";
import WordOfDay from "../../organisms/WordOfDay";
import Carousel from "../../organisms/Carousel";
import GlobalHeader from "../../organisms/GlobalHeader";
import HeroMain from "../../organisms/HeroMain";

import "./index.css";

const EnglishWOD = {
  heading: "Word of the day",
  date: "2022-03-25",
  word: "furphy",
  meaning: "a false report; rumor",
  sentence: "Nothing is everything",
};

const HindiWOD = {
  heading: "Word of the day",
  date: "2022-03-25",
  word: "furphy",
  meaning: "a false report; rumor",
  sentence: "Nothing is everything",
};

const TypePage = () => {
  const [translatedText, setTranslatedText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleTranslateClick = ({ value, type }) => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", value);
    encodedParams.append("client", "gtx");
    encodedParams.append("sl", "en");
    encodedParams.append("tl", "hi");
    encodedParams.append("dt", "t");

    const options = {
      method: "POST",
      url: `https://translate.googleapis.com/translate_a/single`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response?.data?.[0] || "";
        const result = data.map((key) => key?.[0]).join("");
        setTranslatedText(result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleResetClick = () => {
    setInputText("");
    setTranslatedText("");
  };

  return (
    <>
      <GlobalHeader />
      <HeroMain />
      <div className="main-section">
        <section className="type-page">
          <h1 className="type-heading">English-to-Hindi Typing</h1>
          <div className="type-wrapper">
            <Editor
              id="textInputArea"
              btnText="Translate"
              placeholder="Type in English e.g. Hello"
              name="textInputArea"
              className="type-input"
              btnClass="translate-btn"
              showCharacters
              handleBtnClick={handleTranslateClick}
              initialValue={inputText}
            />
            <Editor
              id="textResultArea"
              btnText="Reset"
              placeholder="Result"
              name="textResultArea"
              className="type-result"
              btnClass="reset-btn"
              isDownload
              isCopy
              handleBtnClick={handleResetClick}
              initialValue={translatedText}
            />
          </div>
          <Carousel />
        </section>
        <aside className="aside">
          <WordOfDay WOD={EnglishWOD} />
          <WordOfDay WOD={HindiWOD} />
        </aside>
      </div>
    </>
  );
};

export default TypePage;

import React, { useState } from "react";
import cx from "classnames";
import Chip from "../../../ui-components/Chip";
import ScoreCard from "../ScoreCard";
import Button from "../../../ui-components/Button";

import s from "./index.module.scss";
import Modal from "../../../ui-components/Modal";

const KEYBOARD_LANGUAGES = [
  { label: "Hindi", value: "krutidev" },
  { label: "English", value: "inherit" },
];

const KeyboardLanguageSwitchDropdown = () => {
  const [selectedLangIndex, setSelectedLangIndex] = useState(0);
  const [value, setValue] = useState("");
  const [wpm, setWPM] = useState(0);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [finalScore, setFinalScore] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionsClick = (index) => {
    setSelectedLangIndex(index);
  };

  const calculateWPM = () => {
    const wordsTyped = value?.trim().split(/\s+/)?.length;
    const minutesPassed = (endTime - startTime) / 60000; // milliseconds to minutes
    const _wpm = Math.round(wordsTyped / minutesPassed);
    setWPM(_wpm);
  };

  const handleInputChange = (e) => {
    if (!startTime) {
      setStartTime(new Date());
    }
    const inputValue = e.target.value;
    setValue(inputValue);
    setEndTime(new Date());
    calculateWPM();
  };

  const handleReset = () => {
    setValue("");
    setWPM(0);
    setStartTime(null);
    setEndTime(null);
    setFinalScore(0);
  };

  const handleGenerateReport = () => {
    calculateWPM();
    setFinalScore(wpm);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    handleReset();
  };

  console.info("WPM :: ", wpm);

  return (
    <div className="mx-auto lg:max-w-[1200px] sm:max-w-[500px] flex flex-col items-center">
      <div>
        {KEYBOARD_LANGUAGES.map((language, index) => (
          <Chip
            label={language?.label}
            labelClassName={s.chipLabel}
            containerClassName={cx(s.chipsCntr, {
              [s.selected]: index === selectedLangIndex,
            })}
            onClick={() => handleOptionsClick(index)}
            key={`languages_${index + 1}`}
          />
        ))}
      </div>
      <textarea
        id="textInput"
        rows="5"
        cols="40"
        className="border lg:w-[800px] md:w-[500px] sm:w-[400px] p-2 mt-4 text-3xl"
        style={{ fontFamily: KEYBOARD_LANGUAGES[selectedLangIndex]?.value }}
        placeholder={
          selectedLangIndex === 0 ? "टाइप करना शुरू करें" : "Start typing..."
        }
        onChange={handleInputChange}
        value={value}
      ></textarea>
      <p className="mt-4 px-3 py-4 bg-[#f0f8ff]">
        Words per Minute:{" "}
        <span id="wpm" className="font-bold">
          {wpm}
        </span>{" "}
        WPM
      </p>
      <div className="flex mt-4">
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={handleGenerateReport} className="ml-3" disabled={!wpm}>
          End & Generate Score
        </Button>
      </div>
      <Modal open={isModalOpen} onClose={handleModalClose}>
        <ScoreCard
          playerName="Type Score"
          score={finalScore}
          onClose={handleModalClose}
        />
      </Modal>
    </div>
  );
};

export default KeyboardLanguageSwitchDropdown;

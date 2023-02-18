import "./index.css";

const WordOfDay = ({ WOD }) => {
  return (
    <div className="wod">
      <h3 className="wod_heading">{WOD.heading}</h3>
      <p className="wod_date">{WOD.date}</p>
      <p className="wod_word">{WOD.word}</p>
      <p className="wod_meaning">{WOD.meaning}</p>
      <p className="wod_sentence">
        <span className="bold">Eg.</span> {WOD.sentence}
      </p>
    </div>
  );
};

export default WordOfDay;

import { useState, useEffect } from "react"; 
import cx from "classnames";
import CopyIcon from "../../../assets/images/svg/copy.png";
import DownloadIcon from "../../../assets/images/svg/download.svg";

import "./index.css";

const Editor = ({
    id,
    btnText = "Submit",
    placeholder = "Type in English e.g. Hello",
    name = "textArea",
    className = "",
    btnClass = "",
    isDownload = false,
    isCopy = false,
    showCharacters = false,
    handleBtnClick = undefined,
    initialValue=""
  }) => {
    const MAX_CHAR_COUNT = 500;
    const [charCount, setCharCount] = useState(0);
    const [value, setValue] = useState(initialValue);
  
    useEffect(() => {
      setValue(initialValue);
    }, [initialValue])
    
  
    useEffect(() => {
      setCharCount(value?.length);
    }, [value?.length]);
  
    const handleCopy = () => {
      if (navigator) {
        const copyEl = document?.getElementById("textInputArea") || "";
        copyEl.select();
        document.execCommand("copy");
      }
    };
  
    function dataUrl(data) {
      return "data:x-application/text," + escape(data);
    }
  
    const handleDownload = () => {
      const copyText =
        document?.getElementById("textResultArea")?.innerHTML || "";
      window.open(dataUrl(copyText));
    };
  
    return (
      <div className="editor-wrapper">
        <textarea
          className={className}
          placeholder={placeholder}
          name={name}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          maxLength={500}
          id={id}
        />
        <button
          className={`${btnClass} type-btns`}
          onClick={() => handleBtnClick({ value: value, type: "TRANSLATE" })}
        >
          {btnText}
        </button>
        {isCopy && (
          <img
            src={CopyIcon}
            width="20"
            height="20"
            alt="copy"
            className="editor-copy"
            onClick={handleCopy}
          />
        )}
        {isDownload && (
          <img
            src={DownloadIcon}
            width="20"
            height="20"
            alt="download"
            className="editor-downnload"
            onClick={handleDownload}
          />
        )}
        {showCharacters && (
          <p
            className={cx(
              "editor-char-count",
              value?.length > 400 ? "color-red" : ""
            )}
          >
            Characters : {charCount}/{MAX_CHAR_COUNT}
          </p>
        )}
      </div>
    );
  };
  
  export default Editor;
import { useEffect, useState } from "react";
import TestingPage from "../../pages/TestingPage";

const FeedsCard = ({ cardData, index }) => {
  function listImageUrls(inputStringEng, inputStringHindi) {
    const imagePattern =
      /(https?:\/\/[^\s]+\.(jpg|jpeg|png|gif|bmp|tiff|svg))/gi;
    const matchesEng = inputStringEng.match(imagePattern);
    const matchesHindi = inputStringHindi.match(imagePattern);
    const uniqueArray = Array.from(new Set([...matchesEng, ...matchesHindi]));
    return uniqueArray || [];
  }

  function replaceImageTagsWithBreak(htmlInput) {
    const imgPattern = /<img[^>]*>/gi;
    const result = htmlInput.replace(imgPattern, "<br />");
    return result;
  }

  const [imgArr, setImages] = useState([]);

  useEffect(() => {
    setImages(listImageUrls(cardData?.contentEng, cardData?.contentHindi));
  }, []);
  
  return (
    <>
      <div className="flex justify-center">
        <TestingPage
          imgsCount={imgArr?.length || 0}
          imgsList={imgArr}
          content1={replaceImageTagsWithBreak(cardData?.contentEng)}
          content2={replaceImageTagsWithBreak(cardData?.contentHindi)}
          index={index}
        />
      </div>
    </>
  );
};

export default FeedsCard;

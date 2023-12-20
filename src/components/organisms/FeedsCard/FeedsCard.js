import { useEffect, useState } from "react";

const FeedsCard = ({ cardData }) => {
  function listImageNames(inputStringEng, inputStringHindi) {
    const imagePattern = /([^\s]+\.(jpg|jpeg|png|gif|bmp|tiff|svg))/gi;
    const matchesEng = inputStringEng.match(imagePattern);
    const matchesHindi = inputStringHindi.match(imagePattern);
    const uniqueArray = Array.from(new Set([...matchesEng, ...matchesHindi]));
    return uniqueArray || [];
  }

  const [imgArr, setImages] = useState([]);

  useEffect(() => {
    setImages(listImageNames(cardData?.contentEng, cardData?.contentHindi));
  }, []);

  console.info(imgArr);

  return (
    <>
      <div className="flex">
        <div
          className="max-w-2xl mx-auto my-8 p-8 bg-[#f0f8ff6b] shadow-md rounded-md"
          dangerouslySetInnerHTML={{ __html: cardData?.contentEng }}
        />
        <div
          className="max-w-2xl mx-auto my-8 p-8 bg-[#f0f8ff6b] shadow-md rounded-md"
          dangerouslySetInnerHTML={{ __html: cardData?.contentHindi }}
        />
      </div>
    </>
  );
};

export default FeedsCard;

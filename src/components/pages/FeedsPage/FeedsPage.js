import { useEffect, useState } from "react";
import GlobalHeader from "../../organisms/GlobalHeader";
import axios from "axios";
import FeedsCard from "../../organisms/FeedsCard";

const FeedsPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.thehindibuddy.com/v1/feeds`,
      headers: {
        "content-type": "application/json",
      },
    };

    setError(false);
    setLoading(true);

    axios
      .request(options)
      .then(function (response) {
        const feedsList = response?.data?.data?.feeds || [];
        console.log(feedsList);
        setData(feedsList);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  const getContent = (data, isLoading, isError) => {
    if (isLoading) {
      return "Loading...";
    }
    if (isError) {
      return "Unable to load.";
    }
    if (!data?.length) {
      return "No content to display at the moment.";
    }
    return "";
  };

  const content = getContent(data, isLoading, isError);

  return (
    <div className="bg-white min-h-screen">
      <GlobalHeader />
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Feeds</h2>
        <p className="text-gray-600 mb-8">
          We are currently working on this site.
        </p>
        <p className="text-gray-600 mb-8">{content}</p>
        {!isLoading &&
          !isError &&
          data?.map((el) => <FeedsCard cardData={el} />)}
      </div>
    </div>
  );
};

export default FeedsPage;

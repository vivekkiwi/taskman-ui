import React, { useEffect, useState } from "react";
import GlobalHeader from "../../organisms/GlobalHeader";
import axios from "axios";

const ListingPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.thehindibuddy.com/v1/articles`,
      headers: {
        "content-type": "application/json",
      },
    };

    setLoading(true);
    setError(false);

    axios
      .request(options)
      .then(function (response) {
        console.log(response?.data?.data?.articles || []);
        setData(response?.data?.data?.articles || []);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <GlobalHeader />
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 text-center">Listing Page</h2>
        {isError && <p>Some Error occurred</p>}
        {isLoading && <p>Loading...</p>}
        {!isError && !isLoading && !data?.length && <p>0 content found.</p>}
        {!isError &&
          !isLoading &&
          !!data?.length &&
          data.map((el) => (
            <div
              className="max-w-2xl mx-auto my-8 p-8 bg-[#f0f8ff6b] shadow-md rounded-md"
              dangerouslySetInnerHTML={{ __html: el?.content }}
            />
          ))}
      </div>
    </div>
  );
};

export default ListingPage;

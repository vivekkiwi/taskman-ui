import { useEffect, useState } from "react";
import GlobalHeader from "../../organisms/GlobalHeader";

const SearchPage = () => {
  const [topic, setTopic] = useState("");

  useEffect(() => {
    const slug = decodeURI(window?.location.pathname);
    setTopic(slug.replace("/search/", ""));
    return () => {};
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <GlobalHeader />
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">{topic}</h2>
        <p className="text-gray-600 mb-8">
          We are currently working on this site.
        </p>
        <p className="text-gray-600 mb-8">No content to display at the moment.</p>
      </div>
    </div>
  );
};

export default SearchPage;

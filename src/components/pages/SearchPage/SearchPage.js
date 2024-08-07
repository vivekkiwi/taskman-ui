import { useEffect, useState } from "react";
import GlobalHeader from "../../organisms/GlobalHeader";
import TextEditor from "../../TextEditor";
import { useAuth0 } from "@auth0/auth0-react";

const SearchPage = () => {
  const [topic, setTopic] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  const { isAuthenticated, isLoading, logout, loginWithRedirect } = useAuth0();

  useEffect(() => {
    const slug = decodeURI(window?.location.pathname);
    setTopic(slug.replace("/search/", ""));
    return () => {};
  }, []);

  useEffect(() => {
    setLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  if (isLoading) {
    return (
      <div className="bg-white min-h-screen">
        <GlobalHeader />
        <div className="mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-4">{topic}</h2>
          <p className="text-gray-600 mb-8">Loading....</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <GlobalHeader />
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">{topic}</h2>
        {isLoggedIn ? (
          <>
            <p className="text-gray-600 mb-8">
              We are currently working on this site.
            </p>
            {/* <p className="text-gray-600 mb-8">No content to display at the moment.</p> */}
            <p className="text-gray-600 mb-8">Add content to this site.</p>
            <TextEditor />
          </>
        ) : (
          <p>Please login to add content.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

// import { useEffect, useState } from "react";
// import GlobalHeader from "../../organisms/GlobalHeader";
import KeyboardDropDown from "../../organisms/KeyboardDropDown";

const PracticePage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* <GlobalHeader /> */}
      <div className="mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4 mx-auto lg:max-w-[1200px] sm:max-w-[500px]">Practice</h2>
        {/* <p className="text-gray-600 mb-8">
          We are currently working on this site.
        </p>
        <p className="text-gray-600 mb-8">
          No content to display at the moment.
        </p> */}

        <KeyboardDropDown />
      </div>
    </div>
  );
};

export default PracticePage;

import React from "react";
import PropTypes from "prop-types";

function CustomLoader({ icon: LoaderIcon }) {
  return <LoaderIcon className="customLoader" />;
}

CustomLoader.propTypes = {
  icon: PropTypes.element.isRequired
};

export default CustomLoader;

import PropTypes from "prop-types";

function Step({ children }) {
  return children;
}

Step.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Step;

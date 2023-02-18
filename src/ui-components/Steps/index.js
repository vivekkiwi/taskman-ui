import PropTypes from "prop-types";
import Step from "../Step";

function Steps({ children, active = 0 }) {
  return children[active];
}

Steps.propTypes = {
  active: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.instanceOf(Step)).isRequired
};

export default Steps;

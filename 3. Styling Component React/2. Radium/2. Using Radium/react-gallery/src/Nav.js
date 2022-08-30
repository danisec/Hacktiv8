import PropTypes from "prop-types";
import React from "react";
import Radium from "radium";
import styles from "./nav-styles.js";

function Nav(props) {
  return (
    <div style={styles.root}>
      <button key='prev' style={styles.prev}>
        &#10094;
      </button>
      <button key='next' style={styles.next}>
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool,
};

export default Radium(Nav);

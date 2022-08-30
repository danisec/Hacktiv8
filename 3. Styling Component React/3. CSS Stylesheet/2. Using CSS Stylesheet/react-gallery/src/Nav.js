import PropTypes from "prop-types";
import React from "react";

function Nav(props) {
  return (
    <div className='gallery__nav'>
      <button className='gallery__nav__btn gallery__nav__button--prev'>
        &#10094;
      </button>
      <button className='gallery__nav__btn gallery__nav__button--next'>
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

export default Nav;

import PropTypes from "prop-types";
import React from "react";

function Slide(props) {
  return (
    <article className='gallery__slide' style={props.style}>
      <img src={props.image} alt={props.title} />
      <footer className='gallery__footer'>
        <h2 className='gallery__slide__footer__title'>{props.title}</h2>
        <div>{props.children}</div>
      </footer>
    </article>
  );
}

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
  title: PropTypes.string,
};

export default Slide;

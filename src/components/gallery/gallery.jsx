import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {ChiefSlider} from "./chiefSlider";

const Gallery = ({Component, items, onGalleryOpen}) => {

  const closeGallery = () => onGalleryOpen(() => false);

  const handleButtonCloseClick = () => closeGallery();

  const handleEscapeKeyDown = (evt) => {
    evt.preventDefault();

    if (evt.code === `Escape`) {
      closeGallery();
    }
  };

  useEffect(() => {
    window.addEventListener(`keydown`, handleEscapeKeyDown);

    const slider = document.querySelector(`[data-slider="chiefslider"]`);

    // eslint-disable-next-line no-new
    new ChiefSlider(slider, {
      loop: false,
      autoplay: false,
      refresh: true,
    });

    return () => {
      window.removeEventListener(`keydown`, handleEscapeKeyDown);
    };
  }, []);

  return (
    <section className="gallery" data-slider="chiefslider">
      <h2 className="visually-hidden">Gallery</h2>

      <div className="slider__controls">
        <button className="slider__button slider__button--prev slider__control" type="button" data-slide="prev">
          <span className="visually-hidden">Prev project</span>
        </button>

        <button className="slider__button slider__button--close" type="button" onClick={handleButtonCloseClick}>
          <span className="visually-hidden">Close gallery</span>
        </button>

        <button className="slider__button slider__button--next slider__control" type="button" data-slide="next">
          <span className="visually-hidden">Next project</span>
        </button>

      </div>
      <div className="gallery__slider slider">
        <div className="gallery__wrapper slider__wrapper">
          <ul className="gallery__list slider__list slider__items">
            {items.map((item, index) => <Component key={index} item={item}/>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

Gallery.propTypes = {
  Component: PropTypes.func.isRequired,
  items: PropTypes.array,
  onGalleryOpen: PropTypes.func.isRequired
};

export default Gallery;

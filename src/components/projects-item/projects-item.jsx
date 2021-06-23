import React from 'react';
import PropTypes from "prop-types";

const ProjectsItem = ({project, onGalleryOpen, index}) => {
  const {id, imgUrl, name, languages} = project;

  const handleItemClick = () => {
    onGalleryOpen(index);
  };

  const handleItemEnterKeyDown = (event) => {
    if (event.key === `Enter`) {
      onGalleryOpen(index);
    }
  };

  return (
    <li className="projects__item" onClick={handleItemClick} onKeyDown={handleItemEnterKeyDown} tabIndex={0}>
      <figure className="projects__group">
        <img src={imgUrl} alt="" className="projects__image"/>
        <figcaption className="projects__description">
          <p className="projects__description--name">{name}</p>
          <p className="projects__description--languages">{languages}</p>
        </figcaption>
      </figure>
    </li>
  );
};

ProjectsItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    languages: PropTypes.string.isRequired,
  }),
  onGalleryOpen: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default React.memo(ProjectsItem);

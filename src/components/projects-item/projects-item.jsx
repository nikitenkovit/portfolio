import React from 'react';
import PropTypes from "prop-types";

const ProjectsItem = ({project, onGalleryOpen}) => {
  const {id, imgUrl, name} = project;

  const handleItemClick = () => {
    onGalleryOpen(id);
  };

  const handleItemEnterKeyDown = (event) => {
    if (event.key === `Enter`) {
      onGalleryOpen(id);
    }
  };

  return (
    <li className="projects__item" onClick={handleItemClick} onKeyDown={handleItemEnterKeyDown} tabIndex={0}>
      <figure className="projects__group">
        <img src={imgUrl} alt="" className="projects__image"/>
        <figcaption className="projects__description">{name}</figcaption>
      </figure>
    </li>
  );
};

ProjectsItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onGalleryOpen: PropTypes.func.isRequired
};

export default ProjectsItem;

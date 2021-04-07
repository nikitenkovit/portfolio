import React from 'react';
import PropTypes from "prop-types";

const ProjectsItem = ({project, onGalleryOpen}) => {
  const {imgUrl, name} = project;

  const handleProjectsItemClick = () => {
    onGalleryOpen(() => true);
  };

  return (
    <li className="projects__item" onClick={handleProjectsItemClick}>
      <figure className="projects__group">
        <img src={imgUrl} alt="" className="projects__image"/>
        <figcaption className="projects__description">{name}</figcaption>
      </figure>
    </li>
  );
};

ProjectsItem.propTypes = {
  project: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  onGalleryOpen: PropTypes.func.isRequired
};

export default ProjectsItem;

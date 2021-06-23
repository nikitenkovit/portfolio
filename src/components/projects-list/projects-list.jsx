import React, {useEffect} from 'react';
import ProjectsItem from "../projects-item/projects-item";
import HoverMove from "./hover-move";
import PropTypes from "prop-types";

const ProjectsList = ({projects, onGalleryOpen}) => {
  useEffect(() => {
    const containers = document.querySelectorAll(`.projects__item`);

    containers.forEach((container) => {
      const hoverMove = new HoverMove(container, `.projects__description`);
      hoverMove.init();
    });
  });

  return (
    <section className="projects">
      <h2 className="visually-hidden">My works</h2>

      <ul className="projects__list">
        {
          projects.map((project, index) =>
            <ProjectsItem key={project.name + index} project={project} index={index} onGalleryOpen={onGalleryOpen}/>)
        }
      </ul>
    </section>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.array,
  onGalleryOpen: PropTypes.func.isRequired
};

export default React.memo(ProjectsList);

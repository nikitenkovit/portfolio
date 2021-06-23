import React from 'react';
import PropTypes from "prop-types";

const Skills = ({needShowEnglish}) => {
  return (
    <section className="skills">
      <h2 className="skills__title">
        {needShowEnglish ? `Stack of Technology` : `Стек технологий`}
      </h2>

      <ul className="skills__list">
        <li className="skills__item">
          <i className="skills__icon icon-html-five"/>
          <p className="skills__description">HTML</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-css3"/>
          <p className="skills__description">CSS</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-javascript"/>
          <p className="skills__description">JavaScript</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-react"/>
          <p className="skills__description">React</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-jest"/>
          <p className="skills__description">Jest</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-sass"/>
          <p className="skills__description">SASS</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-typescript"/>
          <p className="skills__description">TypeScript</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-redux"/>
          <p className="skills__description">Redux</p>
        </li>
      </ul>
    </section>
  );
};

Skills.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default Skills;

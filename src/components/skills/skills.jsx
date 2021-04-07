import React from 'react';

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="skills__title">My skills</h2>

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
          <i className="skills__icon icon-webpack"/>
          <p className="skills__description">Webpack</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-sass"/>
          <p className="skills__description">SASS</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-git"/>
          <p className="skills__description">Github</p>
        </li>
        <li className="skills__item">
          <i className="skills__icon icon-bootstrap"/>
          <p className="skills__description">bootstrap</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;

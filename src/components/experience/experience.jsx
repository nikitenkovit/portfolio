import React from "react";

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__title">Experience & Education</h2>

      <ul className="experience__list">
        <li className="experience__item">
          <span className="experience__date">2020 - present</span>
          <h3 className="experience__subtitle">Freelancer <span className="experience__subtitle--details">
          Front-end</span></h3>
          <p className="experience__description">
            Layout based on layouts, development of interfaces in JavaScript
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2020 - 2021</span>
          <h3 className="experience__subtitle">
            Front-end specialist
            <span className="experience__subtitle--details">HTML Academy</span></h3>
          <p className="experience__description">
            studied adaptive layout, the Java script language, the architecture of client applications,
            and the architecture of complex client applications on React
          </p>
          <i className="experience__icon icon-graduation-cap"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2019 - present</span>
          <h3 className="experience__subtitle">Individual entrepreneur <span className="experience__subtitle--details">
          Security systems</span></h3>
          <p className="experience__description">
            Engineering, installation and maintenance of security systems
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2011 - present</span>
          <h3 className="experience__subtitle">Engineer <span className="experience__subtitle--details">
          Security systems</span></h3>
          <p className="experience__description">
            Engineering, installation and maintenance of security systems
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2009 - 2011</span>
          <h3 className="experience__subtitle">Specialist Sales <span className="experience__subtitle--details">
          Computers</span></h3>
          <p className="experience__description">
            Sale of computer equipment
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2004 - 2009</span>
          <h3 className="experience__subtitle">Specialty psychologist <span className="experience__subtitle--details">
          Rostov State University</span></h3>
          <p className="experience__description">
            Sale of computer equipment
          </p>
          <i className="experience__icon icon-graduation-cap"/>
        </li>
      </ul>
    </section>
  );
};

export default Experience;

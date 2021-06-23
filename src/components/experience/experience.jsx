import React from "react";
import PropTypes from "prop-types";

const Experience = ({needShowEnglish}) => {
  return (
    <section className="experience">
      <h2 className="experience__title">
        {needShowEnglish ? `Experience & Education` : `Опыт и образование`}
      </h2>

      <ul className="experience__list">
        <li className="experience__item">
          <span className="experience__date">
            {needShowEnglish ? `2020 - present` : `2020 - настоящее время`}
          </span>
          <h3 className="experience__subtitle">
            {needShowEnglish ? `Freelancer` : `Фрилансер`}
            <span className="experience__subtitle--details">
              {needShowEnglish ? `Front-end` : `фронтенд`}
            </span></h3>
          <p className="experience__description">
            {needShowEnglish ? `Layout based on layouts, development of interfaces in JavaScript`
              : `Верстка по макетам, разработка интерфейсов на JavaScript`}
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2020 - 2021</span>
          <h3 className="experience__subtitle">
            {needShowEnglish ? `Front-end specialist` : `Фронтенд специалист`}
            <span className="experience__subtitle--details">HTML Academy</span></h3>
          <p className="experience__description">
            {needShowEnglish ? `studied adaptive layout, the JavaScript language, the architecture
             of client applications, and the architecture of complex client applications on React`
              : `изучал адаптивную верстку, язык JavaScript, архитектуру клиентских приложений,
             и архитектуру сложных клиентских приложений на React`}
          </p>
          <i className="experience__icon icon-graduation-cap"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">
            {needShowEnglish ? `2019 - present` : `2019 - настоящее время`}
          </span>
          <h3 className="experience__subtitle">
            {needShowEnglish ? `Individual entrepreneur` : `Индивидуальный предприниматель`}
            <span className="experience__subtitle--details">
              {needShowEnglish ? `Security systems` : `Системы безопасности`}
            </span></h3>
          <p className="experience__description">
            {needShowEnglish ? `Engineering, installation and maintenance of security systems`
              : `Инжиниринг, установка и обслуживание систем безопасности`}
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">
            {needShowEnglish ? `2011 - present` : `2011 - настоящее время`}
          </span>
          <h3 className="experience__subtitle">
            {needShowEnglish ? `Engineer` : `Инженер`}
            <span className="experience__subtitle--details">
              {needShowEnglish ? `Security systems` : `Системы безопасности`}
            </span>
          </h3>
          <p className="experience__description">
            {needShowEnglish ? `Engineering, installation and maintenance of security systems`
              : `Инжиниринг, установка и обслуживание систем безопасности`}
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2009 - 2011</span>
          <h3 className="experience__subtitle">
            {needShowEnglish ? `Specialist Sales` : `Специалист продаж`}
            <span className="experience__subtitle--details">
              {needShowEnglish ? `Computers` : `Компьютеры`}
            </span>
          </h3>
          <p className="experience__description">
            {needShowEnglish ? `Sale of computer equipment` : `Продажа компьютерной техники`}
          </p>
          <i className="experience__icon icon-briefcase"/>
        </li>
        <li className="experience__item">
          <span className="experience__date">2004 - 2009</span>
          <h3 className="experience__subtitle">
            {needShowEnglish ? `Specialty psychologist` : `Психолог специалист`}
            <span className="experience__subtitle--details">
              {needShowEnglish ? `South Federal University` : `Южный федеральный университет`}
            </span>
          </h3>
          <p className="experience__description">
            {needShowEnglish ? `Studied psychology specialty` : `Изучал психологию`}
          </p>
          <i className="experience__icon icon-graduation-cap"/>
        </li>
      </ul>
    </section>
  );
};

Experience.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default Experience;

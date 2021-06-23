import React from 'react';
import SocialList from "../social-list/social-list";
import PropTypes from "prop-types";

const ContactsSection = ({needShowEnglish}) => {
  return (
    <section className="contacts-section contacts">
      <h2 className="contacts__title">
        {needShowEnglish ? `Don't be shy !` : `Не стесняйся!`}
      </h2>

      <p className="contacts__description">
        {needShowEnglish ? `I am always open to discuss new projects, creative ideas or the opportunity
         to be part of your team.`
          : `Я всегда открыт для обсуждения новых проектов, творческих идей, или возможности быть
           частью вашией команды.`}
      </p>

      <div className="contacts__links">
        <a href="mailto:nelot@mail.ru" className="contacts__link">
          <i className="contacts__icon icon-contacts"/>
          <span className="contacts__span-title">
            {needShowEnglish ? `Mail me` : `Напиши мне`}
          </span>
          <span className="contacts__span-description">nelot@mail.ru</span>
        </a>
        <a href="tel:+79185576887" className="contacts__link">
          <i className="contacts__icon icon-phone-square"/>
          <span className="contacts__span-title">
            {needShowEnglish ? `Call me` : `Позвони мне`}
          </span>
          <span className="contacts__span-description">+7 (918) 557-68-87</span>
        </a>
      </div>

      <SocialList/>
    </section>
  );
};

ContactsSection.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default ContactsSection;

import React from 'react';
import PropTypes from "prop-types";

const AboutList = ({needShowEnglish}) => {
  return (
    <dl className="personal-infos__list about-list">
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `First name : ` : `Имя : `}
        </dt>
        <dd className="about-list__definition">
          {needShowEnglish ? `Vitaliy : ` : `Виталий`}
        </dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `Last name : ` : `Фамилия`}
        </dt>
        <dd className="about-list__definition">
          {needShowEnglish ? `Nikitenko` : `Никитенко`}
        </dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `Age : ` : `Возраст : `}
        </dt>
        <dd className="about-list__definition">35</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `Nationality : ` : `Национальность : `}
        </dt>
        <dd className="about-list__definition">
          {needShowEnglish ? `Russian` : `Русский`}
        </dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `Address : ` : `Город : `}
        </dt>
        <dd className="about-list__definition">
          {needShowEnglish ? `Russia, Rostov-on-Don` : `Ростов-на-Дону`}
        </dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `Phone : ` : `Телефон : `}
        </dt>
        <dd className="about-list__definition">+79185576887</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Telegram : </dt>
        <dd className="about-list__definition">@Neilot</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Email : </dt>
        <dd className="about-list__definition">Nelot@mail.ru</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `Languages : ` : `Языки : `}
        </dt>
        <dd className="about-list__definition">
          {needShowEnglish ? `Russia, English` : `Русский, Английский`}
        </dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">
          {needShowEnglish ? `City change : ` : `Переезд : `}
        </dt>
        <dd className="about-list__definition">
          {needShowEnglish ? `Available` : `Возможен`}
        </dd>
      </div>
    </dl>
  );
};

AboutList.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default AboutList;

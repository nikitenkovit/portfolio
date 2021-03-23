import React from 'react';

const AboutList = () => {
  return (
    <dl className="personal-infos__list about-list">
      <div className="about-list__group">
        <dt className="about-list__term">First name : </dt>
        <dd className="about-list__definition">Vitaliy</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Last name : </dt>
        <dd className="about-list__definition">Nikitenko</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Age : </dt>
        <dd className="about-list__definition">35</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Nationality : </dt>
        <dd className="about-list__definition">Russian</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Address : </dt>
        <dd className="about-list__definition">Russia, Rostov-on-Don</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Phone : </dt>
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
        <dt className="about-list__term">Languages : </dt>
        <dd className="about-list__definition">Russia, English</dd>
      </div>
      <div className="about-list__group">
        <dt className="about-list__term">Freelance : </dt>
        <dd className="about-list__definition">Available</dd>
      </div>
    </dl>
  );
};

export default AboutList;

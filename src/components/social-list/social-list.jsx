import React from 'react';

const SocialList = () => {
  return (
    <ul className="contacts__social social social__list">
      <li className="social__item social__item--fb">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href="https://www.facebook.com/vitaliy.nikitenko.77" className="social__link">
          <i className="social__icon icon-facebook"/>
        </a>
      </li>
      <li className="social__item social__item--gh">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href="https://github.com/nikitenkovit" className="social__link">
          <i className="social__icon icon-git"/>
        </a>
      </li>
      <li className="social__item social__item--cp">
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a target="_blank" href="https://codepen.io/vitalij-nikitenko" className="social__link">
          <i className="social__icon icon-codepen"/>
        </a>
      </li>
    </ul>
  );
};

export default SocialList;

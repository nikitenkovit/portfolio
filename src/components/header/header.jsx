import React, {useState, useContext} from 'react';
import HeaderNavigationLink from "../header-navigation-link/header-navigation-link";
import {linksNameEn} from "../../const";
import PropTypes from "prop-types";
import {Context} from "../../context";
import {getAnotherLanguage} from "../../utils/selectors";

const Header = ({screen}) => {
  const [currentLanguage, setCurrentLanguage] = useContext(Context);
  const [isButtonActive, setIsButtonActive] = useState(() => false);

  const handleLanguageSwitcherClick = () => {
    setCurrentLanguage(getAnotherLanguage);
  };

  const handleToggleButtonClick = () => setIsButtonActive(!isButtonActive);

  return (
    <>
      <header className={`header header--${screen}`}>
        <nav className={`header-navigation ${isButtonActive ? `header-navigation--active` : ``}`}>
          <ul className="header-navigation__list">
            {linksNameEn.map((link, index) =>
              <HeaderNavigationLink key={link} link={link} index={index} isActive={link === screen}/>)}
          </ul>

          <div className="language-switcher language-switcher--header" tabIndex='0' aria-label='language switcher block'>
            <span className="language-switcher__span" aria-label='current language indicator'>{currentLanguage}</span>
            <button className="language-switcher__button" onClick={handleLanguageSwitcherClick}
              aria-label='language switcher button'>
              {getAnotherLanguage(currentLanguage)}
            </button>
          </div>
        </nav>

        <button className={`header__toggle-button ${isButtonActive ? `header__toggle-button--active` : ``}`}
          aria-label='show navigation menu' onClick={handleToggleButtonClick}/>
      </header>
    </>
  );
};

Header.propTypes = {
  screen: PropTypes.string.isRequired
};

export default React.memo(Header);

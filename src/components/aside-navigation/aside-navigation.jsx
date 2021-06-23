import React, {useContext} from 'react';
import {Context} from "../../context";
import {linksNameEn} from "../../const";
import {getAnotherLanguage} from "../../utils/selectors";
import PropTypes from "prop-types";
import AsideNavigationLink from "../aside-navigation-link/aside-navigation-link";

const AsideNavigation = ({screen}) => {
  const [currentLanguage, setCurrentLanguage] = useContext(Context);

  const handleLanguageSwitcherClick = () => {
    setCurrentLanguage(getAnotherLanguage);
  };

  return (
    <>
      <aside className="aside">
        <h2 className="visually-hidden">Navigation and language switcher</h2>

        <div className="language-switcher" tabIndex='0' aria-label='language switcher block'>
          <span className="language-switcher__span" aria-label='current language indicator'>{currentLanguage}</span>
          <button className="language-switcher__button" onClick={handleLanguageSwitcherClick}
            aria-label='language switcher button'>
            {getAnotherLanguage(currentLanguage)}
          </button>
        </div>

        <nav className="aside-navigation">
          <ul className="aside-navigation__list">
            {linksNameEn.map((link, index) =>
              <AsideNavigationLink key={link} link={link} index={index} isActive={link === screen}/>)}
          </ul>
        </nav>
      </aside>
    </>
  );
};

AsideNavigation.propTypes = {
  screen: PropTypes.string.isRequired
};

export default React.memo(AsideNavigation);

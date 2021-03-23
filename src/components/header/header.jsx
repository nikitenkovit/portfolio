import React, {useState} from 'react';
import HeaderNavigationLink from "../header-navigation-link/header-navigation-link";
import {links} from "../../const";
import PropTypes from "prop-types";

const Header = ({screen}) => {
  const [isButtonActive, setIsButtonActive] = useState(() => false);

  const handleToggleButtonClick = () => setIsButtonActive(!isButtonActive);

  return (
    <>
      <header className={`header header--${screen}`}>
        <nav className={`header-navigation ${isButtonActive ? `header-navigation--active` : ``}`}>
          <ul className="header-navigation__list">
            {links.map((link) =>
              <HeaderNavigationLink key={link} link={link} isActive={link === screen}/>)}
          </ul>
        </nav>

        <button className={`header__toggle-button ${isButtonActive ? `header__toggle-button--active` : ``}`}
          aria-label={`show navigation menu`} onClick={handleToggleButtonClick}/>
      </header>
    </>
  );
};

Header.propTypes = {
  screen: PropTypes.string.isRequired
};

export default Header;

import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Screen, AppRoute} from "../../const";

const HeaderNavigationLink = ({link, isActive}) => {
  return (
    <li className="header-navigation__item">
      <Link to={`${link === Screen.HOME ? AppRoute.HOME : `/${link}`}`}
        className={`header-navigation__link ${isActive ? `header-navigation__link--active` : ``}`}>
        <i className={`header-navigation__icon icon-${link}`}/>{link}</Link>
    </li>
  );
};

HeaderNavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default HeaderNavigationLink;

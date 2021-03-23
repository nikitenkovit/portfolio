import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute, Screen} from "../../const";

const AsideNavigationLink = ({link, isActive}) => {
  return (
    <li className="aside-navigation__item">
      <i className={`aside-navigation__icon icon-${link === Screen.PORTFOLIO ? `briefcase` : link}`}/>
      <Link to={`${link === Screen.HOME ? AppRoute.HOME : `/${link}`}`}
        className={`aside-navigation__link ${isActive ? `aside-navigation__link--active` : ``}`}>
        <span className='aside-navigation__span'>{link}</span>
      </Link>
    </li>
  );
};

AsideNavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default AsideNavigationLink;

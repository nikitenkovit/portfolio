import React, {useContext} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {Screen, AppRoute, linksNameRu, Language} from "../../const";
import {Context} from "../../context";

const HeaderNavigationLink = ({link, isActive, index}) => {
  const [currentLanguage] = useContext(Context);

  return (
    <li className="header-navigation__item">
      <Link to={`${link === Screen.HOME ? AppRoute.HOME : `/${link}`}`}
        className={`header-navigation__link ${isActive ? `header-navigation__link--active` : ``}`}>
        <i className={`header-navigation__icon icon-${link}`}/>
        {currentLanguage === Language.Ru ? linksNameRu[index] : link}
      </Link>
    </li>
  );
};

HeaderNavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default React.memo(HeaderNavigationLink);

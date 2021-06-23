import React, {useContext} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute, Screen, linksNameRu, Language} from "../../const";
import {Context} from "../../context";

const AsideNavigationLink = ({link, index, isActive}) => {
  const [currentLanguage] = useContext(Context);

  return (
    <li className="aside-navigation__item">
      <i className={`aside-navigation__icon icon-${link === Screen.PORTFOLIO ? `briefcase` : link}`}/>
      <Link to={`${link === Screen.HOME ? AppRoute.HOME : `/${link}`}`}
        className={`aside-navigation__link ${isActive ? `aside-navigation__link--active` : ``}`}>
        <span className='aside-navigation__span'>
          {currentLanguage === Language.Ru ? linksNameRu[index] : link}
        </span>
      </Link>
    </li>
  );
};

AsideNavigationLink.propTypes = {
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default React.memo(AsideNavigationLink);

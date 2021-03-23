import React from 'react';
import {links} from "../../const";
import PropTypes from "prop-types";
import AsideNavigationLink from "../aside-navigation-link/aside-navigation-link";

const AsideNavigation = ({screen}) => {
  return (
    <>
      <aside className="aside">
        <h2 className="visually-hidden">Aside navigation</h2>
        <nav className="aside-navigation">
          <ul className="aside-navigation__list">
            {links.map((link) =>
              <AsideNavigationLink key={link} link={link} isActive={link === screen}/>)}
          </ul>
        </nav>
      </aside>
    </>
  );
};

AsideNavigation.propTypes = {
  screen: PropTypes.string.isRequired
};

export default AsideNavigation;

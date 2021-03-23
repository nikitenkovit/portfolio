import React from 'react';
import Header from "../header/header";
import AsideNavigation from "../aside-navigation/aside-navigation";
import {Link} from "react-router-dom";
import {AppRoute, PageWidth, Screen} from "../../const";

const HomeScreen = () => {
  return (
    <>
      <Header screen={Screen.HOME}/>

      <main className="home">

        <div className="home__wrapper">
          <picture>
            <source srcSet="./images/myPhoto.webp" media={`(min-width: ${PageWidth.DESKTOP})`} type="image/webp"/>
            <source srcSet="./images/myPhoto.jpg" media={`(min-width: ${PageWidth.DESKTOP})`}/>
            <source srcSet="./images/myPhoto-small.webp" media={`(min-width: ${PageWidth.TABLET})`}
              type="image/webp"/>
            <source srcSet="./images/myPhoto-small.jpg" media={`(min-width: ${PageWidth.TABLET})`}/>
            <img className="home__image" src="#" alt="My photo"/>
          </picture>

          <section className="greeting">
            <h2 className="greeting__subtitle">Hi There!</h2>
            <h1 className="greeting__title">{`I'm`} <span className="greeting__title--color">Vitaly Nikitenko</span>
            </h1>
            <p className="greeting__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Animi delectus inventore itaque officia possimus ratione! Exercitationem iure possimus quas.
              A aliquid consectetur dicta dolore ea eum ipsum natus quis voluptatem.</p>

            <Link className="greeting__link link-to-about button icon-about" to={AppRoute.ABOUT}>
              <span className="button__span">More about me</span>
            </Link>
          </section>
        </div>
        <AsideNavigation screen={Screen.HOME}/>
      </main>
    </>
  );
};

export default HomeScreen;

import React, {useEffect, useContext} from 'react';
import {Context} from "../../context";
import Header from "../header/header";
import AsideNavigation from "../aside-navigation/aside-navigation";
import {Link} from "react-router-dom";
import {AppRoute, PageWidth, Screen, Language} from "../../const";
import {startPreloader} from "../../assets/js/start-preloader";
import AnimateWord from "./word";

const HomeScreen = () => {
  const [currentLanguage] = useContext(Context);

  const needShowEnglish = currentLanguage === Language.En;

  useEffect(() => {
    startPreloader();
  }, []);

  useEffect(() => {
    const words = document.querySelectorAll(`.word`);

    if (words.length > 0) {
      const animateWord = new AnimateWord(words);

      animateWord.init();
    }
  }, [currentLanguage]);

  return (
    <>
      <Header screen={Screen.HOME}/>

      <AsideNavigation screen={Screen.HOME}/>

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
            <h2 className="greeting__subtitle">
              {needShowEnglish ? `Hi There!` : `Всем привет!`}
            </h2>
            <h1 className="greeting__title">
              {needShowEnglish ? `I'm ` : `Я `}
              <span className="greeting__title--color word">
                {needShowEnglish ? `Vitaly Nikitenko` : `Виталий Никитенко`}
              </span>
              <span className="greeting__title--color word">
                {needShowEnglish ? `Front-end developer` : `Фронтенд разработчик`}
              </span>
            </h1>
            <p className="greeting__description">
              {needShowEnglish
                ? `I'm a front-end developer specializing in creating clean, user-friendly and accessible interfaces.
                 I consider work an ongoing education, and i\`m looking for opportunities to work with those who are
                 willing to share their knowledge as much as i want to learn`
                : `Я фронтенд разработчик, специализирующийся на создании чистых, удобных и доступных интерфейсов.
                Считаю свою работу непрерывным образованием и я ищу возможности работать с теми, кто готов делиться
                своими знаниями так же, как я хочу учиться.`}
            </p>

            <Link className="greeting__link link-to-about button icon-about" to={AppRoute.ABOUT}>
              <span className="button__span">{needShowEnglish ? `More about me` : `Больше обо мне`}</span>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomeScreen;

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
                ? `I am a front-end developer. I create clean, user-friendly and accessible interfaces.
                I consider my work to be continuous education. I want to work with those who set themselves ambitious goals.`
                : `Я фронтенд разработчик. Создаю чистые, удобные и доступные интерфейсы. Считаю свою работу
                 непрерывным образованием. Хочу работать с теми, кто ставит перед собой амбициозные задачи..`}
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

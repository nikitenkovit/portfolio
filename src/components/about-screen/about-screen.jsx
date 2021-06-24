import React, {useContext, useEffect} from 'react';
import Header from "../header/header";
import AboutList from "../about-list/about-list";
import AsideNavigation from "../aside-navigation/aside-navigation";
import Results from "../results/results";
import Skills from "../skills/skills";
import Experience from "../experience/experience";
import {Language, Screen} from "../../const";
import {startPreloader} from "../../assets/js/start-preloader";
import {Context} from "../../context";

const AboutScreen = () => {
  const [currentLanguage] = useContext(Context);

  const needShowEnglish = currentLanguage === Language.En;

  useEffect(() => {
    startPreloader();
  }, []);

  return (
    <>
      <Header screen={Screen.ABOUT}/>

      <AsideNavigation screen={Screen.ABOUT}/>

      <main className="about">
        <div className="main-title">
          <h1 className="main-title__title">
            {needShowEnglish ? `About` : `Обо`} <span className="main-title__title--span">{needShowEnglish ? `Me` : `мне`}</span></h1>
          <span className="main-title__bg">{needShowEnglish ? `Resume` : `Резюме`}</span>
        </div>

        <div className="about__wrapper">
          <section className="resume">
            <h2 className="visually-hidden">Resume</h2>

            <article className="personal_infos">
              <h3 className="personal_infos__title">
                {needShowEnglish ? `Personal infos` : `Персональная информация`}
              </h3>

              <picture>
                <source srcSet="./images/myPhoto-small.webp" type="image/webp"/>
                <img className="personal_infos__image" src="./images/myPhoto-small.jpg" alt="My photo"/>
              </picture>

              <AboutList needShowEnglish={needShowEnglish}/>

              <a download className="personal_infos__download-CV-Button button icon-download" href="nikitenko.pdf">
                <span className="button__span">
                  {needShowEnglish ? `Download CV` : `Резюме`}
                </span>
              </a>
            </article>

            <Results needShowEnglish={needShowEnglish}/>
          </section>

          <Skills needShowEnglish={needShowEnglish}/>

          <Experience needShowEnglish={needShowEnglish}/>
        </div>
      </main>
    </>
  );
};

export default AboutScreen;

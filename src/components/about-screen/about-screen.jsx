import React from 'react';
import Header from "../header/header";
import AboutList from "../about-list/about-list";
import AsideNavigation from "../aside-navigation/aside-navigation";
import Results from "../results/results";
import Skills from "../skills/skills";
import Experience from "../experience/experience";
import {Screen} from "../../const";

const AboutScreen = () => {
  return (
    <>
      <Header screen={Screen.ABOUT}/>

      <main className="about">
        <div className="main-title">
          <h1 className="main-title__title">About <span className="main-title__title--span">Me</span></h1>
          <span className="main-title__bg">Resume</span>
        </div>

        <section className="resume">
          <h2 className="visually-hidden">Resume</h2>

          <article className="personal_infos">
            <h3 className="personal_infos__title">Personal infos</h3>

            <picture>
              <source srcSet="./images/myPhoto-small.webp"
                type="image/webp"/>
              <img className="personal_infos__image" src="./images/myPhoto-small.jpg" alt="My photo"/>
            </picture>

            <AboutList/>

            <a download className="personal_infos__download-CV-Button button icon-download" href="#">
              <span className="button__span">Download CV</span>
            </a>
          </article>

          <Results/>
        </section>

        <Skills/>

        <Experience/>

        <AsideNavigation screen={Screen.ABOUT}/>
      </main>
    </>
  );
};

export default AboutScreen;
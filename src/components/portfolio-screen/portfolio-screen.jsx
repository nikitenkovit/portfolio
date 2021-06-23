import React, {useEffect, useState, useContext} from 'react';
import Header from "../header/header";
import Gallery from "../gallery/gallery";
import GalleryProjectItem from "../gallery-project-item/gallery-project-item";
import {Language, Screen} from "../../const";
import AsideNavigation from "../aside-navigation/aside-navigation";
import ProjectsList from "../projects-list/projects-list";
import {Projects} from "./projects";
import {startPreloader} from "../../assets/js/start-preloader";
import {Context} from "../../context";

const PortfolioScreen = () => {
  const [currentLanguage] = useContext(Context);

  const needShowEnglish = currentLanguage === Language.En;

  useEffect(() => {
    startPreloader();
  }, []);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentItemNumber, setCurrentItemNumber] = useState(``);

  const handleGalleryOpen = (itemId) => {
    setIsGalleryOpen(() => true);

    setCurrentItemNumber(() => itemId);
  };

  return (
    <>
      {isGalleryOpen ? <Gallery Component={GalleryProjectItem} items={Projects}
        currentItemNumber={currentItemNumber} onGalleryOpen={setIsGalleryOpen}/>
        : <Header screen={Screen.PORTFOLIO}/>}

      <AsideNavigation screen={Screen.PORTFOLIO}/>

      <main className='portfolio'>
        <div className={`portfolio__wrapper ${isGalleryOpen ? `portfolio--open` : ``}`}>
          <div className="main-title">
            <h1 className="main-title__title">
              {needShowEnglish ? `My ` : `Моё `}
              <span className="main-title__title--span">
                {needShowEnglish ? `Portfolio` : `Портфолио`}
              </span>
            </h1>
            <span className="main-title__bg">
              {needShowEnglish ? `Works` : `Работы`}
            </span>
          </div>

          <ProjectsList projects={Projects} onGalleryOpen={handleGalleryOpen}/>
        </div>
      </main>
    </>
  );
};

export default PortfolioScreen;

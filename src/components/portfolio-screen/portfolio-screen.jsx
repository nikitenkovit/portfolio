import React, {useState} from 'react';
import Header from "../header/header";
import Gallery from "../gallery/gallery";
import GalleryProjectItem from "../gallery-project-item/gallery-project-item";
import {Screen} from "../../const";
import AsideNavigation from "../aside-navigation/aside-navigation";
import ProjectsList from "../projects-list/projects-list";
import {Projects} from "./projects";

const PortfolioScreen = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      {isGalleryOpen ? <Gallery Component={GalleryProjectItem} items={Projects} onGalleryOpen={setIsGalleryOpen}/>
        : <Header screen={Screen.PORTFOLIO}/>}

      <main className="portfolio">
        <div className="main-title">
          <h1 className="main-title__title">My <span className="main-title__title--span">Portfolio</span></h1>
          <span className="main-title__bg">Works</span>
        </div>

        <ProjectsList projects={Projects} onGalleryOpen={setIsGalleryOpen}/>

        <AsideNavigation screen={Screen.PORTFOLIO}/>
      </main>
    </>
  );
};

export default PortfolioScreen;

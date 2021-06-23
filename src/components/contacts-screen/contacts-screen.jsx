import React, {useEffect, useContext} from 'react';
import {Language, Screen} from "../../const";
import Header from "../header/header";
import AsideNavigation from "../aside-navigation/aside-navigation";
import Form from "../form/form";
import {startPreloader} from "../../assets/js/start-preloader";
import ContactsSection from "../contacts-section/contacts-section";
import {Context} from "../../context";

const ContactsScreen = () => {
  const [currentLanguage] = useContext(Context);

  const needShowEnglish = currentLanguage === Language.En;

  useEffect(() => {
    startPreloader();
  }, []);

  return (
    <>
      <Header screen={Screen.CONTACTS}/>

      <AsideNavigation screen={Screen.CONTACTS}/>

      <main className="main-contacts">
        <div className="main-title">
          <h1 className="main-title__title">
            {needShowEnglish ? `Get in ` : `Связаться со `}
            <span className="main-title__title--span">
              {needShowEnglish ? `Touch ` : `мной`}
            </span>
          </h1>
          <span className="main-title__bg">
            {needShowEnglish ? `Contacts` : `Контакты`}
          </span>
        </div>

        <div className="main-contacts__wrapper">
          <ContactsSection needShowEnglish={needShowEnglish}/>

          <Form needShowEnglish={needShowEnglish}/>
        </div>
      </main>
    </>
  );
};

export default ContactsScreen;

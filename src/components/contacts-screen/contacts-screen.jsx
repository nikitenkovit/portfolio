import React from 'react';
import {Screen} from "../../const";
import Header from "../header/header";
import AsideNavigation from "../aside-navigation/aside-navigation";
import Form from "../form/form";

const ContactsScreen = () => {

  return (
    <>
      <Header screen={Screen.CONTACTS}/>

      <main className="main-contacts">
        <div className="main-title">
          <h1 className="main-title__title">Get in <span className="main-title__title--span">Touch</span></h1>
          <span className="main-title__bg">Contact</span>
        </div>

        <div className="main-contacts__wrapper">
          <section className="contacts-section contacts">
            <h2 className="contacts__title">{`Don't`} be shy !</h2>

            <p className="contacts__description">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or
              opportunities to be part or you visions.
            </p>

            <div className="contacts__links">
              <a href="mailto:nelot@mail.ru" className="contacts__link">
                <i className="contacts__icon icon-contacts"/>
                <span className="contacts__span-title">Mail me</span>
                <span className="contacts__span-description">nelot@mail.ru</span>
              </a>
              <a href="tel:+79185576887" className="contacts__link">
                <i className="contacts__icon icon-phone-square"/>
                <span className="contacts__span-title">Call me</span>
                <span className="contacts__span-description">+7 (918) 557-68-87</span>
              </a>
            </div>

            <ul className="contacts__social social social__list">
              <li className="social__item social__item--fb">
                <a href="" className="social__link">
                  <i className="social__icon icon-facebook"/>
                </a>
              </li>
              <li className="social__item social__item--li">
                <a href="" className="social__link">
                  <i className="social__icon icon-linkedin"/>
                </a>
              </li>
              <li className="social__item social__item--gh">
                <a href="" className="social__link">
                  <i className="social__icon icon-git"/>
                </a>
              </li>
              <li className="social__item social__item--cp">
                <a href="" className="social__link">
                  <i className="social__icon icon-codepen"/>
                </a>
              </li>
            </ul>
          </section>

          <Form/>
        </div>

        <AsideNavigation screen={Screen.CONTACTS}/>
      </main>
    </>
  );
};

export default ContactsScreen;

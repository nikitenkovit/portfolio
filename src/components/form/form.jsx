import React from 'react';
import PropTypes from "prop-types";

const Form = ({needShowEnglish}) => {
  return (
    <section className="form-section">
      <h2 className="visually-hidden">Send message</h2>

      <form action="#" className="form">
        <div className="form__group">
          <input type="text" className="form__input form__input--name"
            placeholder={needShowEnglish ? `Your name` : `Твоё имя`} name='name'/>
          <input type="email" className="form__input form__input--email"
            placeholder={needShowEnglish ? `Your email` : `Твой email`} name='email'/>
          <input type="text" className="form__input form__input--subject"
            placeholder={needShowEnglish ? `Your subject` : `Твоя тема`} name='subject'/>
        </div>

        <textarea className="form__textarea" placeholder={needShowEnglish ? `Your message` : `Твоё сообщение`}/>

        <button type="submit" className="form__button button icon-paper-plane" name='message'>
          <span className="button__span">
            {needShowEnglish ? `Send message` : `Отправить`}
          </span>
        </button>

        <p className="form__success-message">
          <i className="form__success-message--icon icon-check-square"/>
          <span className="form__success-message--span">
            {needShowEnglish ? `Message sent!` : `Сообщение отправлено!`}
          </span>
        </p>
      </form>
    </section>
  );
};

Form.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default Form;

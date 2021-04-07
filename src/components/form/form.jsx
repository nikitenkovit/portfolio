import React from 'react';

const Form = () => {
  return (
    <section className="form-section">
      <h2 className="visually-hidden">Send message</h2>

      <form action="#" className="form">
        <div className="form__group">
          <input type="text" className="form__input form__input--name" placeholder='Your name' name='name'/>
          <input type="email" className="form__input form__input--email" placeholder='Your email' name='email'/>
          <input type="text" className="form__input form__input--subject" placeholder='Your subject' name='subject'/>
        </div>

        <textarea className="form__textarea" placeholder='Your message'/>

        <button type="submit" className="form__button button icon-paper-plane" name='message'>
          <span className="button__span">Send message</span>
        </button>

        <p className="form__success-message">
          <i className="form__success-message--icon icon-check-square"/>
          <span className="form__success-message--span">
            Message sent!
          </span>
        </p>
      </form>
    </section>
  );
};

export default Form;

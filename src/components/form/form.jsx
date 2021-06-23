import React, {useRef, useState} from 'react';
import PropTypes from "prop-types";

const Form = ({needShowEnglish}) => {
  const [sendStatus, setSendStatus] = useState(`initial`);
  const statusSuccess = sendStatus === `success`;
  const statusFailure = sendStatus === `failure`;

  const formRef = useRef();

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const ajaxSend = async (formData) => {
      const fetchResp = await fetch(`mail.php`, {
        method: `POST`,
        body: formData
      });
      if (!fetchResp.ok) {
        throw new Error(`статус ошибки ${fetchResp.status}`);
      }
      return await fetchResp.text();
    };

    const formData = new FormData(formRef.current);

    ajaxSend(formData)
      .then(() => {
        formRef.current.reset();
        setSendStatus(() => `success`);
        setTimeout(() => {
          setSendStatus(() => `initial`);
        }, 5000);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
        setSendStatus(() => `failure`);
        setTimeout(() => {
          setSendStatus(() => `initial`);
        }, 5000);
      });
  };

  return (
    <section className="form-section">
      <h2 className="visually-hidden">Send message</h2>

      <form ref={formRef} action="./mail.php" method='post' className="form" onSubmit={handleFormSubmit}>
        <div className="form__group">
          <input type="text" className="form__input form__input--name"
            placeholder={needShowEnglish ? `Your name` : `Твоё имя`} name='name'/>
          <input type="email" className="form__input form__input--email"
            placeholder={needShowEnglish ? `Your email` : `Твой email`} name='email'/>
          <input type="text" className="form__input form__input--subject"
            placeholder={needShowEnglish ? `Your subject` : `Твоя тема`} name='subject'/>
        </div>

        <textarea className="form__textarea" name='message' placeholder={needShowEnglish ? `Your message` : `Твоё сообщение`}/>

        <button type="submit" className="form__button button icon-paper-plane">
          <span className="button__span">
            {needShowEnglish ? `Send message` : `Отправить`}
          </span>
        </button>

        {statusSuccess &&
        <p className="form__success-message">
          <i className="form__success-message--icon icon-check-square"/>
          <span className="form__success-message--span">
            {needShowEnglish ? `Message sent!` : `Сообщение отправлено!`}
          </span>
        </p>
        }

        {statusFailure &&
        <p className="form__failure-message">
          <span className="form__failure-message--span">
            {needShowEnglish ? `Something went wrong!` : `Что-то пошло не так!`}
          </span>
        </p>
        }
      </form>
    </section>
  );
};

Form.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default Form;

import React from "react";
import PropTypes from "prop-types";

const Results = ({needShowEnglish}) => {
  return (
    <article className="results">
      <h3 className="visually-hidden">Results</h3>

      <dl className="results__list">
        <div className="results__group">
          <dt className="results__term">1</dt>
          <dd className="results__definition">
            {needShowEnglish ? `Years of` : `Лет в`}
            <br/>
            {needShowEnglish ? `experience` : `Фронтенде`}
          </dd>
        </div>
        <div className="results__group">
          <dt className="results__term">15</dt>
          <dd className="results__definition">
            {needShowEnglish ? `Completed` : `Завершенных`}
            <br/>
            {needShowEnglish ? `projects` : `проектов`}
          </dd>
        </div>
        <div className="results__group">
          <dt className="results__term">7</dt>
          <dd className="results__definition">
            {needShowEnglish ? `Happy` : `Счастливых`}
            <br/>
            {needShowEnglish ? `customers` : `клиентов`}
          </dd>
        </div>
        <div className="results__group">
          <dt className="results__term">999</dt>
          <dd className="results__definition">
            {needShowEnglish ? `Coffee` : `Чашек`}
            <br/>
            {needShowEnglish ? `cups` : `Кофе`}
          </dd>
        </div>
      </dl>
    </article>
  );
};

Results.propTypes = {
  needShowEnglish: PropTypes.bool.isRequired
};

export default Results;

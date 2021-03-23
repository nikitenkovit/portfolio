import React from "react";

const Results = () => {
  return (
    <article className="results">
      <h3 className="visually-hidden">Results</h3>

      <dl className="results__list">
        <div className="results__group">
          <dt className="results__term">1</dt>
          <dd className="results__definition">Years of <br/>experience</dd>
        </div>
        <div className="results__group">
          <dt className="results__term">10</dt>
          <dd className="results__definition">Completed <br/>projects</dd>
        </div>
        <div className="results__group">
          <dt className="results__term">5</dt>
          <dd className="results__definition">Happy <br/>customers</dd>
        </div>
        <div className="results__group">
          <dt className="results__term">1255</dt>
          <dd className="results__definition">Coffee <br/>cups</dd>
        </div>
      </dl>
    </article>
  );
};

export default Results;

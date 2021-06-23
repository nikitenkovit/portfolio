import React, {useContext} from 'react';
import PropTypes from "prop-types";
import {Context} from "../../context";
import {Language} from "../../const";

const GalleryProjectItem = ({item}) => {
  const [currentLanguage] = useContext(Context);

  const needShowEnglish = currentLanguage === Language.En;

  const {type, name, languages, previewLink, githubLink, descriptionEn, descriptionRu, imgUrl} = item;

  return (
    <li className="gallery__item slider__item project">
      <div className="project__wrapper">
        <h3 className="project__title">{name}</h3>

        <ul className="project__information-list">
          <li className="project__information-item">
            <i className="project__information-icon icon-file-text2"/>
            Project : <span className="project__information-item--span">{type}</span>
          </li>
          <li className="project__information-item">
            <i className="project__information-icon icon-code"/>
            Languages : <span className="project__information-item--span">{languages}</span>
          </li>
          <li className="project__information-item">
            <i className="project__information-icon icon-external-link-alt"/>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            Preview : <a target="_blank" href={previewLink} className="project__information-item--link">{previewLink}</a>
          </li>
          <li className="project__information-item">
            <i className="project__information-icon icon-git"/>
            {/* eslint-disable-next-line react/jsx-no-target-blank */}
            Github : <a target="_blank" href={githubLink} className="project__information-item--link">look at github</a>
          </li>
        </ul>

        <img src={imgUrl} alt={name} className="project__image"/>

        <p className="project__description">
          {needShowEnglish ? descriptionEn : descriptionRu}
        </p>
      </div>
    </li>
  );
};

GalleryProjectItem.propTypes = {
  item: PropTypes.object
};

export default GalleryProjectItem;

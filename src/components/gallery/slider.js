import {DIRECTION, DEFAULT_TRANSITION_DURATION, DEFAULT_TRANSITION} from "../../const";
import {touchStart} from "./touch";

export default class Slider {
  constructor(root, currentItemNumber, cb) {
    this._slider = root;
    this._currentItemNumber = parseInt(currentItemNumber, 10);
    this._callBack = cb;
    this._wrapper = this._slider.querySelector(`.slider__wrapper`);
    this._sliderList = this._slider.querySelector(`.slider__list`);
    this._sliderItem = this._slider.querySelector(`.slider__item`);
    this._sliderNextButton = this._slider.querySelector(`.slider__button--next`);
    this._sliderPrevButton = this._slider.querySelector(`.slider__button--prev`);

    this._numberOfAllChildren = this._sliderList.children.length;
    this._currentChildNumber = this._currentItemNumber;

    this._isNeedMove = true;
    this._sliderDirection = DIRECTION.RIGHT;
    this._sliderStep = this._sliderItem.offsetWidth;

    this._currentTranslate = 0;

    this._setNextButtonClickHandler = this._setNextButtonClickHandler.bind(this);
    this._setPrevButtonClickHandler = this._setPrevButtonClickHandler.bind(this);

    this._moveNext = this._moveNext.bind(this);
    this._movePrev = this._movePrev.bind(this);
  }

  init() {
    this._sliderStep = this._sliderItem.offsetWidth;

    this._setInitialPosition();

    this._setNextButtonClickHandler();
    this._setPrevButtonClickHandler();

    this._setTransitionStartHandler();
    this._setTransitionEndHandler();

    this._setTouchStartHandler();
  }

  _checkIsNeedCloseGallery() {
    const needCloseGallery = this._currentChildNumber < 0 || this._currentChildNumber > this._numberOfAllChildren - 1;

    if (needCloseGallery) {
      this._callBack();
    }
  }

  _getTranslate(tx = 0, ty = 0, tz = 0) {
    return `translate3d(${tx}px, ${ty}px, ${tz}px)`;
  }

  _setCurrentTranslate(direction) {
    this._currentTranslate += direction * this._sliderStep;
  }

  _setTransform() {
    this._sliderList.style.transform = this._getTranslate(this._currentTranslate);
  }

  _setInitialPosition() {
    this._currentTranslate = this._sliderDirection * ((this._currentItemNumber * this._sliderStep));

    this._setTransform();

    setTimeout(() => {
      this._sliderList.style.transition = DEFAULT_TRANSITION;
    }, DEFAULT_TRANSITION_DURATION);
  }

  _increaseCurrentChildNumber() {
    this._currentChildNumber++;
  }

  _decreaseCurrentChildNumber() {
    this._currentChildNumber--;
  }

  _moveNext() {
    if (this._isNeedMove) {
      if (this._sliderDirection === DIRECTION.LEFT) {
        this._sliderDirection = DIRECTION.RIGHT;
      }

      this._increaseCurrentChildNumber();

      this._checkIsNeedCloseGallery();

      this._setCurrentTranslate(this._sliderDirection);

      this._setTransform(this._sliderDirection);
    }
  }

  _movePrev() {
    if (this._isNeedMove) {
      if (this._sliderDirection === DIRECTION.RIGHT) {
        this._sliderDirection = DIRECTION.LEFT;
      }

      this._decreaseCurrentChildNumber();

      this._checkIsNeedCloseGallery();

      this._setCurrentTranslate(this._sliderDirection);

      this._setTransform();
    }
  }

  _setNextButtonClickHandler() {
    this._sliderNextButton.addEventListener(`click`, this._moveNext);
  }

  _setPrevButtonClickHandler() {
    this._sliderPrevButton.addEventListener(`click`, this._movePrev);
  }

  _setTransitionStartHandler() {
    this._sliderList.addEventListener(`transitionstart`, () => {
      this._isNeedMove = false;
    });
  }

  _setTransitionEndHandler() {
    this._sliderList.addEventListener(`transitionend`, () => {
      this._isNeedMove = true;
    });
  }

  _setTouchStartHandler() {
    this._wrapper.addEventListener(`touchstart`, (evt) => {
      touchStart(evt, this._sliderList, this._moveNext, this._movePrev);
    });
  }
}

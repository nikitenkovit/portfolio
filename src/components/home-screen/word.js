import {INTERVAL_CHANGE_WORD} from "../../const";

export default class AnimateWord {
  constructor(words) {
    this._words = words;
    this._wordArray = [];
    this._currentWord = 0;

    this._splitLetters = this._splitLetters.bind(this);
    this._changeWord = this._changeWord.bind(this);
  }

  init() {
    [...this._words].map(this._splitLetters);

    this._changeWord();

    setInterval(this._changeWord, INTERVAL_CHANGE_WORD);
  }

  _splitLetters(word) {
    const content = word.innerHTML;

    word.innerHTML = ``;

    const letters = [];

    content.split(``).forEach((it) => {
      let letter = document.createElement(`span`);

      letter.className = `letter`;

      letter.innerHTML = it;

      if (letter.innerHTML === ` `) {
        const br = document.createElement(`br`);
        word.appendChild(br);
      }

      word.appendChild(letter);

      letters.push(letter);
    });

    this._wordArray.push(letters);
  }

  _changeWord() {
    let currentWord = this._wordArray[this._currentWord];

    let newWord = this._currentWord === this._words.length - 1
      ? this._wordArray[0]
      : this._wordArray[this._currentWord + 1];

    currentWord.forEach((letter, index) => this._animateLetterOut(letter, index));

    newWord.forEach((letter, index) => {
      letter.className = `letter behind`;

      this._animateLetterIn(letter, index);
    });

    this._currentWord = (this._currentWord === this._wordArray.length - 1) ? 0 : this._currentWord + 1;
  }

  _animateLetterOut(letter, index) {
    setTimeout(() => {
      letter.className = `letter out`;
    }, index * 80);
  }

  _animateLetterIn(letter, index) {
    setTimeout(() => {
      letter.className = `letter in`;
    }, 340 + (index * 80));
  }
}

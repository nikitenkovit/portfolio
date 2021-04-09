export const startPreloader = () => {
  const div = document.createElement(`div`);
  div.classList.add(`preloader`);
  document.body.insertBefore(div, document.body.firstChild);

  const preloader = document.querySelector(`.preloader`);

  document.querySelector(`main`).classList.add(`main--on`);

  setTimeout(() => {
    preloader.classList.add(`preloader--off`);
  }, 0);

  setTimeout(() => {
    div.remove();
  }, 1300);
};

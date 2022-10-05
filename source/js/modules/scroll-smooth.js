const addScrollSmooth = () => {
  const anchors = document.querySelectorAll('a[data-anchor]'); // получение якорных ссылок
  // выполнение функции для каждой ссылки
  anchors.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      const blockID = item.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export {addScrollSmooth};

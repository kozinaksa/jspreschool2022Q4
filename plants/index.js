// console.log('Score: 105/110 \n 1. Вёрстка валидная +10 \n 2. Вёрстка cемантическая +20 \n    <header>, <main>, <footer> +3 \n    пять элементов <section> +3 \n    один заголовок <h1> +3 \n    четыре заголовка <h2> +3 \n    один элемент <nav> +3 \n    два списка ul > li > a +3 \n    пять кнопок <button> +2 \n 3. Вёрстка соответствует макету +48 \n    блок <header> +6 \n    секция welcome +7 \n    секция about +7 \n    секция service +7 \n    секция prices +7 \n    секция contacts +7 \n    блок <footer> +7 \n 4. Требования к css + 12 \n    для построения сетки используются флексы +2 \n    при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2 \n    фоновый цвет тянется на всю ширину страницы +2 \n    иконки добавлены в формате .svg +2 \n    изображения добавлены в формате .jpg и .png +2 \n    есть favicon +2 \n 5. Интерактивность, реализуемая через css +20 \n    плавная прокрутка по якорям +5 \n    cсылки в футере ведут на гитхаб и на страницу курса +5 \n    интерактивность включает в себя не только изменение внешнего вида курсора, но и другие визуальные эффекты +5 \n    плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5');

window.addEventListener("load", function() {
  const burgerIcon = document.querySelector(".burger-icon");
  const burgerIcon_open = document.querySelector(".burger-icon__open");
  const burgerIcon_close = document.querySelector(".burger-icon__close");
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelectorAll('.nav__link[href]');

  if (burgerIcon) {
    burgerIcon.addEventListener("click", function(e) {
      burgerIcon.classList.toggle('_active');
      burgerIcon_open.classList.toggle('_hidden');
      burgerIcon_close.classList.toggle('_active');
      nav.classList.toggle('_active');
    });
  }

  function toggleBurger(e) {
    burgerIcon_open.classList.toggle('_hidden');
    burgerIcon_close.classList.toggle('_active');
    burgerIcon.classList.remove('_active');
    nav.classList.remove('_active');
  }

  if (navLinks.length > 0) {
    navLinks.forEach(navLink => {
      navLink.addEventListener("click", onNavLinkClick);
    });

    function onNavLinkClick(e) {
      const navLink = e.target;
      if (navLink.dataset.goto && document.querySelector(navLink.dataset.goto)) {
        const gotoBlock = document.querySelector(navLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
      }

      if (burgerIcon.classList.contains('_active')) {
        toggleBurger(e);
      }
    }
  }

  document.addEventListener("click", (e) => {
    let target = e.target;
    let itsIcon = target == burgerIcon || burgerIcon.contains(target);
    let itsNav = target == nav || nav.contains(target);

    if (!itsIcon && !itsNav && burgerIcon.classList.contains('_active')) {
      toggleBurger(e);
    }
  });
});
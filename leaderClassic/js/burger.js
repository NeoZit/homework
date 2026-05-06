export default function burgerMenu(burger, box) {
  document.querySelector(burger).addEventListener("click", (e) => {
    document.querySelector(box).classList.toggle("header__box--open");
    document.querySelector(burger).classList.toggle("burger--open");
    document.body.classList.toggle("page__body--no-scroll");
  });
}

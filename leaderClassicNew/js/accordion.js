export const accordionFaq = () => {
  const boxBtns = document.querySelector(".faq__items");
  const btns = boxBtns.querySelectorAll(".faq__question");
  const answers = boxBtns.querySelectorAll(".faq__answer");

  if (!boxBtns) return;

  boxBtns.addEventListener("click", (e) => {
    const target = e.target;
    const item = target.closest(".faq__item");
    const answer = item.querySelector(".faq__answer");
    const question = item.querySelector(".faq__question");
    if (item) {
      answers.forEach((item) => {
        item.classList.remove("faq__answer--open");
        item.style.maxHeight = null;
      });
      btns.forEach((item) => item.classList.remove("faq__question--open"));
      question.classList.add("faq__question--open");
      answer.classList.add("faq__answer--open");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
};

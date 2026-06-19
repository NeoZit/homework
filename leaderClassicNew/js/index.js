import burgerMenu from "./burger.js";
import { catalogSlider } from "./catalog-slider.js";
import { rangeSlider } from "./range.js";
import { accordionFaq } from "./accordion.js";
import { dateTimer } from "./data.js";

try {
  burgerMenu(".burger", ".header__box");
  catalogSlider();
  rangeSlider();
  accordionFaq();
  const element = document.getElementById("cta__tel");
  const maskOptions = {
    mask: "+{7} (000) 000-00-00",
  };
  const mask = IMask(element, maskOptions);
  dateTimer();
} catch (error) {
  console.error(error);
}

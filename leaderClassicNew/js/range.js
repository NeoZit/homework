export const rangeSlider = () => {
  const range = document.querySelector(".briefcase__range");
  const badge = document.querySelector(".briefcase__badge");
  const percentValue = document.querySelector(".briefcase__value");

  const risk = {
    level: ["Низкий риск", "Средний риск", "Высокий риск"],
    percent: [5, 15, 25],
  };

  function updateWidget(value) {
    range.style.background = `linear-gradient(
          to right,
          #405548 0%,
          #4ADE80 ${value}%,
          #303030 ${value}%,
          #303030 100%
        )`;

    if (value < 33) {
      badge.textContent = risk.level[0];
      percentValue.textContent = `до ${risk.percent[0]}% `;
    } else if (value > 33 && value < 66) {
      badge.textContent = risk.level[1];
      percentValue.textContent = `до ${risk.percent[1]}% `;
    } else if (value > 66) {
      badge.textContent = risk.level[2];
      percentValue.textContent = `до ${risk.percent[2]}% `;
    }
  }

  function setArc(percent) {
    const offset = 100 - percent;
    document.querySelector("#arc").style.strokeDashoffset = offset;
    document.querySelector("#arcGlow").style.strokeDashoffset = offset;
  }

  range.addEventListener("input", (e) => {
    updateWidget(e.target.value);
    setArc(e.target.value);
  });
  updateWidget(range.value);
  setArc(range.value);
};

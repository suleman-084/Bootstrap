const slider = document.querySelector("input");
const value = document.querySelector(".value");
const cards = document.querySelectorAll(".pricing-card");

value.textContent = slider.value;

slider.addEventListener("input", updateSliderValue);

function updateSliderValue() {
  value.textContent = slider.value;

  const sliderValue = parseInt(slider.value);

  if (sliderValue >= 0 && sliderValue <= 10) {
    highlightCard(1);
  } else if (sliderValue >= 11 && sliderValue <= 20) {
    highlightCard(2);
  } else if (sliderValue >= 21 && sliderValue <= 30) {
    highlightCard(3);
  } else {
  }
}
function highlightCard(cardNumber) {
  cards.forEach((card) => {
    card.classList.remove("highlighted");

    cards[cardNumber - 1].classList.add("highlighted");
  });
}

// }

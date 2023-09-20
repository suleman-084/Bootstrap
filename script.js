const slider = document.querySelector("input");
const value = document.querySelector(".value");
const cards = document.querySelectorAll(".pricing-card");
const submitButton = document.querySelector('button[type="submit"]');
const form = document.getElementById("myForm");

const submit = document.getElementById("sub");

submit.addEventListener("click", async (event) => {
  event.preventDefault();

  const name = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const comments = document.getElementById("comments").value;
  console.log("name", name, "email", email, "comments", comments);
  await fetch(
    "https://cors-anywhere.herokuapp.com/https://forms.maakeetoo.com/formapi/638",
    {
      method: "POST",

      body: JSON.stringify({
        firstname: name,
        email: email,
        message: comments,
      }),

      headers: {
        "Content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((response) => console.log(response));
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    const nameInput = document.getElementById("fname");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");

    if (!nameInput.value || !emailInput.value || !commentsInput.value) {
      event.preventDefault();
      alert("Please fill in all required fields.");
    } else if (!isValidEmail(emailInput.value)) {
      event.preventDefault();
      alert("Please enter a valid email address (e.g., email@gmail.com).");
    }
  });

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

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

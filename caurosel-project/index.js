const pictures = [
  "Screenshot (132)",
  "Screenshot (133)",
  "Screenshot (135)",
  "Screenshot (136)",
  "screenshot (159)",
];

const btn = document.querySelectorAll(".btn");
const imageContainer = document.querySelector(".main-wrapper");
let count = 0;
let length = pictures.length;

btn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const style = e.currentTarget.classList;

    if (style.contains("next-btn")) {
      count === length - 1 ? 0 : count++;
    } else {
      count === 0 ? length : count--;
    }

    imageContainer.innerHTML = `<div class="${
      count ? "img-container active" : "img-container"
    }"><img src="images/${pictures[count]}.png" alt="${
      pictures[count]
    }"></div>`;
  });
});

function changeBackgroundHandler(
  documentClass,
  paragraphId,
  defaultBackground,
  buttonId,
  buttonTextNd
) {
  const appWrapper = document.querySelector(documentClass);

  const clr = ["a", "b", "c", "d", "e", "f", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const p = document.createElement("p");
  p.setAttribute("id", paragraphId);
  p.textContent = defaultBackground;
  appWrapper.appendChild(p);

  const b = document.createElement("button");
  b.setAttribute("id", buttonId);
  b.textContent = buttonTextNd;
  appWrapper.appendChild(b);

  function changeBackgroundonClick() {
    const length = clr.length;
    let activeClr = "#";

    function clrsN() {
      return Math.floor(Math.random() * length);
    }

    for (i = 0; i < 6; i++) {
      activeClr += clr[clrsN()];
    }
    document.body.style.background = activeClr;
    p.innerHTML = activeClr;
  }

  b.addEventListener("click", () => {
    changeBackgroundonClick();
  });
}

changeBackgroundHandler(
  ".main-wrapper",
  "colorHex",
  "b09abe",
  "btn",
  "click to change background"
);

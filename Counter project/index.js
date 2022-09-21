let el = document.getElementById("count");

const btns = document.querySelectorAll(".btn");

let count = 0;

el.innerHTML = count;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let style = btn.classList;

    style.contains("add") ? count++ : count--;

    el.innerHTML = count;
  });
});

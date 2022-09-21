const buttons = document.querySelectorAll("button");
const storeItems = document.querySelectorAll(".item");
const form = document.getElementById("search-form");
const pel = document.querySelector("#voidItem");
const itemName = document.getElementById("item");
const textEl = form["text"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchPhrase = textEl.value;
  storeItems.forEach((item) => {
    if (item.classList.contains(searchPhrase)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let filter = e.target.dataset.filter;
    storeItems.forEach((item) => {
      if (item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        filter === "all"
          ? (item.style.display = "block")
          : (item.style.display = "none");
      }
    });
  });
});

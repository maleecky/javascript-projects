const form = document.getElementById("msg-form");
const textInput = form["text"];
const errorClass = document.getElementById("error");
const msgel = document.getElementById("messagedelivered");
const storelist = document.querySelector(".items");
let data = [];
let dataFromLocalStorage = JSON.parse(localStorage.getItem("database"));

form.addEventListener("submit", (e) => {
  let inputValue = textInput.value;
  if (inputValue === "") {
    errorClass.innerHTML = `<img style="margin-right: 3px;"  width="16" height="auto" src="./info.png" alt="info icon"/>Please type your message to proceed`;
  } else if (stringContainsNumber(inputValue) === true) {
    errorClass.innerHTML = `<img style="margin-right: 3px;"  width="16" height="auto" src="./info.png" alt="info icon"/>Message contains number`;
  } else {
    errorClass.innerHTML = "";
    msgel.innerHTML = inputValue;
    data.push(inputValue);
    render(data);
    localStorage.setItem("database", JSON.stringify(data));
  }

  textInput.value = "";
  e.preventDefault();
});

function stringContainsNumber(string) {
  return /[0-9]/.test(string);
}

if (dataFromLocalStorage) {
  data = dataFromLocalStorage;
  render(data);
}
function clearMessages() {
  localStorage.removeItem("database");
  location.reload(true);
}

function render(element) {
  let listitems = "";
  for (i = 0; i < element.length; i++) {
    listitems += `<li data-name = "${element[i]}">${element[i]}</li>`;
  }
  storelist.innerHTML = listitems;
}

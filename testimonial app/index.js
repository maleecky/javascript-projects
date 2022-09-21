const pEl = document.getElementById("hel");
const btns = document.querySelectorAll("button");
const clientImg = document.querySelector("#img");
const clientname = document.querySelector("#name");
const clientmessage = document.querySelector(".message");
const clientrating = document.querySelector(".ratings");
let customers = [];
let count = 0;

function client(img, name, message, ratings) {
  this.image = img;
  this.name = name;
  this.message = message;
  this.ratings = ratings;
}
function createClient(img, name, message, ratings) {
  let fullImg = `<img src="./${img}.png" alt="client${img}"/>`;
  let clientRatings = Array(ratings)
    .fill()
    .map((_, i) => {
      return "<p>⭐</p>";
    })
    .join("");
  let customer = new client(fullImg, name, message, clientRatings);

  customers.push(customer);
}

createClient(
  1,
  "john sylivester",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?",
  4
);
createClient(
  2,
  "Emmanuel marvel",
  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock",
  5
);
createClient(
  3,
  "Juma philbert",
  "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
  2
);
createClient(
  4,
  "lexa swaggler",
  "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  3
);

clientImg.innerHTML = customers[count].image;
clientname.innerHTML = customers[count].name;
clientrating.innerHTML = customers[count].ratings;
clientmessage.innerHTML = customers[count].message;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const length = customers.length;
    let style = btn.classList;
    if (style.contains("next-btn")) {
      count >= length - 1 ? 0 : count++;
    } else {
      count === 0 ? length - 1 : count--;
    }

    clientImg.innerHTML = customers[count].image;
    clientname.innerHTML = customers[count].name;
    clientrating.innerHTML = customers[count].ratings;
    clientmessage.innerHTML = customers[count].message;
  });
});

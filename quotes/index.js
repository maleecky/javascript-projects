const arrayOfQuotes = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
];

const app = document.getElementById("app");

const h1 = document.createElement("h1");
h1.textContent = "QUOTES OF THE DAY";
app.appendChild(h1);

const btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.textContent = "Get Quote";
app.appendChild(btn);

const p = document.createElement("p");
p.setAttribute("id", "quote");
app.appendChild(p);

const p2 = document.createElement("p");
p2.setAttribute("id", "author");
app.appendChild(p2);

const length = arrayOfQuotes.length;

btn.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * length);
  p.textContent = `"${arrayOfQuotes[randomNumber].quote}"`;
  p2.textContent = `--${arrayOfQuotes[randomNumber].author}`;
});

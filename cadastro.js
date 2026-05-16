const jaCadastrados = [
  {
    name: "Sonic",
    year: 1992,
    sells: 12000000,
    protagonist: "Sonic",
  },
  {
    name: "Mario",
    year: 1982,
    sells: 999020000,
    protagonist: "Mario",
  },
  {
    name: "Donkey Kong",
    year: 1987,
    sells: 81231223,
    protagonist: "Donkey Kong",
  },
];

const div = document.getElementById("content");
jaCadastrados.map((item, index) => {
  const title = document.createElement("h2");
  title.classList.add("name");
  title.textContent = `${index + 1}. ${item.name}`;
  div.appendChild(title);

  const year = document.createElement("h2");
  year.classList.add("year");
  year.textContent = `${item.year}`;
  div.appendChild(year);

  const sells = document.createElement("h2");
  sells.classList.add("sells");
  sells.textContent = `${item.sells}`;
  div.appendChild(sells);

  const protagonist = document.createElement("h2");
  protagonist.classList.add("protagonist");
  protagonist.textContent = `${item.protagonist}`;
  div.appendChild(protagonist);
});

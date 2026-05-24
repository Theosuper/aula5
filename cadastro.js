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
  {
    name: "Final Fantasy",
    year: 2006,
    sells: 1231223,
    protagonist: "Vaan",
  },
];
const div = document.getElementById("tablebody");
jaCadastrados.map((item, index) => {
  let par = index % 2 == 0;
  let impar = index % 2 == 1;
  if (par) {
  }
  if (impar) {
    console.log = indice;
  }
  const row = document.createElement("tr");

  const indice = document.createElement("th");
  indice.textContent = `${index}`;
  indice.classList = "indice";
  row.appendChild(indice);

  const name = document.createElement("th");
  name.textContent = `${item.name}`;
  name.classList = "name";
  row.appendChild(name);

  const sells = document.createElement("th");
  sells.textContent = `${item.sells}`;
  sells.classList = "sells";
  row.appendChild(sells);

  const protagonist = document.createElement("th");
  protagonist.textContent = `${item.protagonist}`;
  protagonist.classList = "protagonist";
  row.appendChild(protagonist);

  const year = document.createElement("th");
  year.textContent = `${item.year}`;
  year.classList = "year";
  row.appendChild(year);

  const actions = document.createElement("th");
  const deletarBtn = document.createElement("button");
  deletarBtn.textContent = "Deletar";
  const editarBtn = document.createElement("button");
  editarBtn.textContent = "Editar";
  actions.appendChild(deletarBtn);
  actions.appendChild(editarBtn);
  actions.classList = "actions";
  row.appendChild(actions);

  div.appendChild(row);
});

const jedis = [
  {
    name: "Yoda",
    lightsaber: "green",
    power: 10,
  },
  {
    name: "Cal Kestis",
    lightsaber: "yellow",
    power: 8,
  },
  {
    name: "Obi wan Kenobi",
    lightsaber: "blue",
    power: 9,
  },
  {
    name: "Mace Windu",
    lightsaber: "purple",
    power: 10,
  },
];

const div = document.getElementById("tablebody");
jedis.map((item, index) => {
  const row = document.createElement("tr");

  const name = document.createElement("th");
  name.textContent = `${item.name}`;
  name.classList = "name";
  row.appendChild(name);

  const lightsaber = document.createElement("th");
  lightsaber.textContent = `${item.lightsaber}`;
  lightsaber.classList = "lightsaber";
  row.appendChild(lightsaber);

  const power = document.createElement("th");
  power.textContent = `${item.power}`;
  power.classList = "power";
  row.appendChild(power);
});

var jaCadastrados = [];
async function chamarApi() {
  console.log("chamou");
  const reposta = await fetch("http://localhost:8080/api/games");
  const jogos = await reposta.json();
  jaCadastrados = jogos;
  renderizar();
}
chamarApi();
var editMode = false;
function renderizar() {
  const div = document.getElementById("tablebody");
  div.innerHTML = "";
  jaCadastrados.map((item, index) => {
    const row = document.createElement("tr");

    const indice = document.createElement("th");
    indice.textContent = `${index}`;
    indice.classList = "indice";
    row.appendChild(indice);
    const impar = index % 2 == 1;
    const par = index % 2 == 0;

    if (impar) {
      indice.classList = "indice impar";
    }
    if (par) {
      indice.classList = "indice par";
    }

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
    deletarBtn.addEventListener("click", () => {
      deletar(index);
    });

    const editarBtn = document.createElement("button");
    editarBtn.textContent = "Editar";
    editarBtn.addEventListener("click", () => {
      editMode = true;
      preEditar(item, index);
    });

    actions.appendChild(deletarBtn);
    actions.appendChild(editarBtn);
    actions.classList = "actions";
    row.appendChild(actions);

    div.appendChild(row);
  });
}
renderizar();

function deletar(index) {
  jaCadastrados.splice(index, 1);
  renderizar();
}
const button = document.getElementById("buttonSubmit");
button.addEventListener("click", () => {
  if (editMode) {
    editar();
  } else {
    criar();
  }
});
function criar() {
  const valorName = document.getElementById("name").value;
  const valorYear = document.getElementById("year").value;
  const valorSells = document.getElementById("sells").value;
  const valorProtagonist = document.getElementById("protagonist").value;
  const objeto = {
    name: valorName,
    year: valorYear,
    sells: valorSells,
    protagonist: valorProtagonist,
  };
  jaCadastrados.push(objeto);
  renderizar();
}
function editar() {
  const valorName = document.getElementById("name").value;
  const valorYear = document.getElementById("year").value;
  const valorSells = document.getElementById("sells").value;
  const valorProtagonist = document.getElementById("protagonist").value;
  const objeto = {
    name: valorName,
    year: valorYear,
    sells: valorSells,
    protagonist: valorProtagonist,
  };
  const indice = button.getAttribute("indice");
  jaCadastrados = jaCadastrados.map((item, index) => {
    if (index == indice) {
      return objeto;
    } else {
      return item;
    }
  });
  renderizar();
  document.getElementById("name").value = "";
  document.getElementById("year").value = "";
  document.getElementById("sells").value = "";
  document.getElementById("protagonist").value = "";
}
function preEditar(objeto, index) {
  document.getElementById("name").value = objeto.name;
  document.getElementById("year").value = objeto.year;
  document.getElementById("sells").value = objeto.sells;
  document.getElementById("protagonist").value = objeto.protagonist;
  button.setAttribute("indice", index);
}

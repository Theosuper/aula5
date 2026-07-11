var jaCadastrados = [];
async function chamarApi() {
  console.log("chamou");
  const reposta = await fetch("http://localhost:8080/api/enterprises", {
    method: "GET",
  });
  const empresas = await reposta.json();
  jaCadastrados = empresas;
}

var editMode = false;
async function renderizar() {
  await chamarApi();
  const div = document.getElementById("tablebody");
  div.innerHTML = "";
  jaCadastrados.map((item, index) => {
    const row = document.createElement("tr");

    const indice = document.createElement("th");
    indice.textContent = `${item.id}`;
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

    const yearOfFundation = document.createElement("th");
    yearOfFundation.textContent = `${item.yearOfFundation}`;
    yearOfFundation.classList = "yearOfFundation";
    row.appendChild(yearOfFundation);

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

async function deletar(id) {
  await fetch(`http://localhost:8080/api/enterprises/${id}`, {
    method: "DELETE",
  });
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
async function criar() {
  const valorName = document.getElementById("name").value;
  const valoryearOfFundation = document.getElementById("yearOfFundation").value;
  const objeto = {
    name: valorName,
    yearOfFundation: valoryearOfFundation,
  };
  await fetch("http://localhost:8080/api/enterprises", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(objeto),
  });
  await renderizar();
}
async function editar() {
  const valorName = document.getElementById("name").value;
  const valoryearOfFundation = document.getElementById("yearOfFundation").value;
  const objeto = {
    id,
    name: valorName,
    yearOfFundation: valoryearOfFundation,
  };
  const objetoAtualizado = await fetch(
    "http://localhost:8080/api/enterprises",
    {
      method: "PUT",
      body: JSON.stringify(objeto),
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  jaCadastrados = jaCadastrados.map((item) => {
    if (id == item.id) {
      return objeto;
    } else {
      return item;
    }
  });
  renderizar();
  document.getElementById("name").value = "";
  document.getElementById("yearOfFundation").value = "";
}
function preEditar(objeto) {
  document.getElementById("name").value = objeto.name;
  document.getElementById("yearOfFundation").value = objeto.yearOfFundation;
}

var jaCadastrados = [];
async function chamarApi() {
  console.log("chamou");
  const reposta = await fetch("http://localhost:8080/api/games", {
    method: "GET",
  });
  const jogos = await reposta.json();
  jaCadastrados = jogos;
}

async function pegarEmpresas() {
  const empresasApi = await fetch("http://localhost:8080/api/enterprises", {
    method: "GET",
  });
  const listaDeEmpresas = await empresasApi.json();
  const avisoDiv = document.getElementById("aviso");
  if (!listaDeEmpresas.length) {
    avisoDiv.innerHTML = `<div>
        <span>PRECISA REGISTRAR UMA EMPRESA PARA CADASTRAR OS JOGOS</span>
        <a href="/enterprise">Ir para o cadastro de empresas</a>
      </div>`;
    const button = document.getElementById("buttonSubmit");
    button.disabled = true;
  }
  console.log("achei essas empresas: ", listaDeEmpresas);

  const select = document.getElementById("enterpriseId");
  select.innerHTML = `<option value="">Selecione uma empresa</option>`;

  listaDeEmpresas.forEach((enterprise) => {
    const option = document.createElement("option");
    option.value = enterprise.id;
    option.textContent = enterprise.name;
    select.appendChild(option);
  });
}

pegarEmpresas();
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
    const imageCell = document.createElement("td");
    if (item.url) {
      const image = document.createElement("img");
      image.src = item.url;
      image.alt = item.name;
      image.classList.add("game-image");

      imageCell.appendChild(image);
    } else {
      imageCell.textContent = "Sem logo";
    }
    row.appendChild(imageCell);

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

    const enterpriseName = document.createElement("th");
    enterpriseName.textContent = `${item.enterprise_name}`;
    enterpriseName.classList = "enterpriseName";
    row.appendChild(enterpriseName);

    const actions = document.createElement("th");
    const deletarBtn = document.createElement("button");
    deletarBtn.textContent = "Deletar";
    deletarBtn.addEventListener("click", () => {
      deletar(item.id);
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

async function deletar(id) {
  await fetch(`http://localhost:8080/api/games/${id}`, { method: "DELETE" });
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
async function uploadArquivo() {
  const file = document.getElementById("image").files[0];

  if (!file) {
    alert("escolha um arquivo");
    return;
  }
  const formData = new FormData();
  formData.append("image", file);
  const respostaDoServidor = await fetch("http://localhost:8080/upload", {
    method: "POST",
    body: formData,
  });
  const data = await respostaDoServidor.json();
  return data.url;
}

async function criar() {
  const valorName = document.getElementById("name").value;
  const valorYear = document.getElementById("year").value;
  const valorSells = document.getElementById("sells").value;
  const valorProtagonist = document.getElementById("protagonist").value;
  const valorEnterpriseId = document.getElementById("enterpriseId").value;

  let url = await uploadArquivo();

  const objeto = {
    name: valorName,
    year: valorYear,
    sells: valorSells,
    protagonist: valorProtagonist,
    enterpriseId: valorEnterpriseId,
    url: url,
  };
  await fetch("http://localhost:8080/api/games", {
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
  const valorYear = document.getElementById("year").value;
  const valorSells = document.getElementById("sells").value;
  const id = button.getAttribute("id");
  const valorProtagonist = document.getElementById("protagonist").value;
  const valorEnterpriseId = document.getElementById("enterpriseId").value;
  const objeto = {
    id,
    name: valorName,
    year: valorYear,
    sells: valorSells,
    protagonist: valorProtagonist,
    enterpriseId: valorEnterpriseId,
  };
  const objetoAtualizado = await fetch("http://localhost:8080/api/games", {
    method: "PUT",
    body: JSON.stringify(objeto),
    headers: {
      "Content-Type": "application/json",
    },
  });
  jaCadastrados = jaCadastrados.map((item) => {
    if (id == item.id) {
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
function preEditar(objeto) {
  document.getElementById("name").value = objeto.name;
  document.getElementById("year").value = objeto.year;
  document.getElementById("sells").value = objeto.sells;
  document.getElementById("protagonist").value = objeto.protagonist;
  document.getElementById("enterpriseId").value = objeto.enterprise_id;
  button.setAttribute("id", objeto.id);
}

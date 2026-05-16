const div = document.getElementById("content");
// troca o conteúdo do HTML
// div.innerHTML = "coma batata!"
const title = document.getElementById("title");
function trocarParaRegistro() {
  title.innerHTML = "Registro no sistema";
  div.innerHTML = `
    <form>
        <input type="text" placeholder="Digite seu email" />
        <input type="password" placeholder="digite sua senha" />
        <input type="password" placeholder="confirme sua senha" />
        <button>
        criar conta
        </button>
      </form>
      <span id="trocar" onclick="trocarParaLogin()">Ir para login</span>
      `;
}
function trocarParaLogin() {
  title.innerHTML = "Logue no sistema";
  div.innerHTML = `
     <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button>
        logar
        </button>
      </form>
      <span id="trocar" onclick="trocarParaRegistro()"">Registar conta</span>
    `;
}

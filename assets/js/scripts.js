const sobre = document.querySelector("#about");
const formulario = document.querySelector("#form");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

async function getApiGithub() {
  try {
    const dadosPerfil = await fetch(`https://api.github.com/users/ustavoteles`); //fetch api envia requisições
    const perfil = await dadosPerfil.json();

    let conteudo = `
            <img src="${perfil.avatar_url}" alt="Foto do Perfil do Github - ${perfil.name}" />

            <article id="about-text">
            <h2><span>Sobre mim</span></h2>
            <p>
            Sou formado em Análise e Desenvolvimento de Sistemas pela Unisanta e concluí o Bootcamp da Generation Brasil, onde desenvolvi habilidades em Node.js, NestJS, TypeORM, MySQL e Python. Também fiz um curso de Análise de Dados no Instituto Federal, onde adquiri conhecimento sobre manipulação e análise de dados. Como estagiário na SEDUC, fui responsável pela manutenção de sistemas PHP e também atuei em manutenção de sistemas e suporte técnico. Busco novas oportunidades como desenvolvedor, focado em back-end e soluções tecnológicas.            </p>

            <div id="about_github" class="flex about-github">
            <a href="${perfil.html_url}" target="_blank" class="button">
                Github
            </a>
            <p>${perfil.followers} seguidores</p>
            <p>${perfil.public_repos} repositórios</p>
            </div>

        </article>
        `;

    sobre.innerHTML += conteudo;
  } catch (error) {
    console.error(error); //pega algum eventual erro
  }
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //

  const campoNome = documenquerySelector("#name");
  const txtNome = document.querySelector("#txtName");

  if (campoNome.length < 3) {
    txtNome.innerHTML = "O Nome deve ter no mínimo 3 caracteres";
    campoNome.focus();
    return;
  } else {
    txtNome.innerHTML = "";
  }

  const campoEmail = documenquerySelector("#email");
  const txtEmail = document.querySelector("#txtemail");

  if (!campoEmail.value.match(emailRegex)) {
    txtEmail.innerHTML = "Digite um e-mail válido";
    campoEmail.focus();
    return;
  } else {
    txtEmail.innerHTML = "";
  }

  const campoAssunto = documenquerySelector("#subject");
  const txtAssunto = document.querySelector("#txtSubject");

  if (campoAssunto.length < 5) {
    txtAssunto.innerHTML = "O assunto deve ter no mínimo 5 caracteres";
    campoAssunto.focus();
    return;
  } else {
    txtAssunto.innerHTML = "";
  }

  formulario.submit();
});
getApiGithub();

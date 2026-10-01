import {
    configurarFormulario,
    preencherFormulario
} from "./formulario.js";


const conteudo =
    document.getElementById("conteudo");


// ======================================
// ABA INÍCIO
// ======================================

function templateInicio() {

    return `
        <main class="apresent">

            <h2 class="titulo-pagina">
                Bem-vindo
            </h2>

            <section class="apresentação">

                <section>

                    <h2>Quem somos</h2>

                    <p>
                        A ONG Esperança é uma organização
                        não governamental, dedicada ao
                        desenvolvimento de ações sociais
                        e ao apoio de pessoas em situação
                        de vulnerabilidade.
                    </p>

                </section>


                <section>

                    <h2>Nossa missão</h2>

                    <p>
                        Promover ações sociais que contribuam
                        para melhorar a qualidade de vida
                        da comunidade e incentivar
                        a solidariedade.
                    </p>

                </section>


                <section>

                    <h2>Como ajudamos</h2>

                    <p>
                        Desenvolvemos projetos sociais,
                        mobilizamos voluntários e buscamos
                        recursos para atender às necessidades
                        da comunidade.
                    </p>

                </section>


                <section>

                    <h2>
                        Faça parte dessa transformação
                    </h2>

                    <p>
                        Você pode contribuir participando
                        como voluntário ou realizando
                        uma doação.
                    </p>

                    <a
                        class="botao-ajuda"
                        href="#cadastro"
                    >
                        Clique aqui
                    </a>

                </section>

            </section>

        </main>
    `;
}


// ======================================
// ABA PROJETOS
// ======================================

function templateProjetos() {

    return `
        <section class="proj">

            <h2 class="titulo-pagina">
                Projetos Sociais
            </h2>


            <section class="projetos">

                <article class="congo">

                    <h3>
                        Acolhimento Do Congo
                    </h3>

                    <p>
                        No auge da violência na República
                        Democrática do Congo, quando a guerra
                        forçou milhões a deixar suas casas,
                        nós estávamos lá. Nossa missão foi
                        fornecer abrigo de emergência,
                        água potável e cuidados médicos
                        essenciais para as famílias que
                        fugiam dos combates nas províncias
                        do leste. Trabalhamos incansavelmente
                        para reabilitar poços de água e
                        distribuir kits de higiene,
                        garantindo a sobrevivência em meio
                        ao caos e devolvendo um senso de
                        dignidade a uma população devastada.
                    </p>

                </article>


                <img
                    class="img-congo"
                    src="../imagens/republica-do-congo.jpg"
                    alt="Voluntários auxiliando crianças durante uma ação humanitária no Congo"
                >


                <article class="ucrania">

                    <h3>
                        Ajuda Na Ucrania
                    </h3>

                    <p>
                        Quando o conflito na Ucrânia se
                        intensificou, nossa equipe agiu
                        rápido para apoiar os civis afetados.
                        Entregamos alimentos essenciais,
                        kits de higiene e aquecedores em
                        cidades devastadas pela guerra.
                        Focamos em ajudar os mais vulneráveis,
                        como idosos e crianças, a sobreviver
                        aos invernos rigorosos e ao
                        deslocamento forçado, restaurando
                        a dignidade e a esperança em
                        comunidades isoladas.
                    </p>

                </article>


                <img
                    class="img-ucrania"
                    src="../imagens/ajuda-na-ucrania.jpg"
                    alt="Voluntários entregando suprimentos para idosos e crianças na Ucrânia"
                >

            </section>


            <section id="ajuda">

                <article>

                    <h2>
                        Nos ajude a fazer a diferença
                    </h2>

                    <p>
                        Cadastre-se e seja voluntário
                        para fazer a diferença no mundo.
                    </p>

                    <a
                        class="botao-ajuda"
                        href="#cadastro"
                    >
                        Clique aqui
                    </a>

                </article>

            </section>

        </section>
    `;
}


// ======================================
// ABA CADASTRO
// ======================================

function templateCadastro() {

    return `

        <section class="cadast">

            <form
                id="formCadastro"
                novalidate
            >
               <fieldset class="pessoais">
        <legend class="titulo-cadastro">Dados pessoais</legend><br>

        <label for="name">Nome:</label>
        <input
        class="campo"
        id="name"
        type="text"
        placeholder="Digite seu nome..."
        pattern="[A-Za-zÀ-ÿ]+([ ][A-Za-zÀ-ÿ]+)+"
        >
        <br><br>

        <label for="cpf">CPF:</label>
        <input
        class="campo"
        id="cpf"
        type="text"
        placeholder="000.000.000-00"
        pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
        maxlength="14"
        
        >
        <br><br>

        <label for="birth">Nascimento:</label>
        <input
        class="campo"
        id="birth"
        type="date"
        
        >
        <br><br>

      </fieldset>

      <br>

      <fieldset class="Contato">
        <legend class="titulo-cadastro">Contato</legend>
        <label for="mail">E-mail:</label>
        <input
        class="campo"
        id="mail"
        type="email"
        placeholder="exemplo@gmail.com"
        
        
        >
        <br><br>

        <label for="tele">Telefone:</label>
        <input
        class="campo"
            type="tel"
            id="tele"
            placeholder="(41) 99999-9999"
            pattern="[0-9]{2}[0-9]{5}[0-9]{4}"
            maxlength="11"
            
          >
          <br><br>

           <label for="whats">WhatsApp:</label>
           <input
           class="campo"
            type="tel"
            id="whats"
            placeholder="(41) 99999-9999"
            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
            maxlength="15"
            
          >
          <br><br>
        
      </fieldset>

      <br>

      <fieldset class="endereco">
        <legend class="titulo-cadastro">Endereço</legend>

        <label for="cep">CEP:</label>
         <input
         class="campo"
            type="text"
            id="cep"
            placeholder="00000-000"
            pattern="[0-9]{5}-[0-9]{3}"
            maxlength="9"
            
        >
        <br><br>

         <label for="endereco">Endereço:</label>
          <input
          class="campo"
            type="text"
            id="endereco"
            placeholder="Digite aqui..."
            
            maxlength="150"
          >
          <br><br>

          <label for="home">Número:</label>
          <input
          class="campo"
            type="number"
            id="home"
            placeholder="Ex: 1"
            min="1"
            
          >
          <br><br>

          <label for="bairro">Bairro:</label>
          <input
          class="campo"
            type="text"
            id="bairro"
            
            placeholder="Digite aqui..."
            maxlength="150"
        >
        <br><br>

      </fieldset>
      <fieldset>
        <legend class="titulo-cadastro">Voluntariado</legend>
         <p>Você deseja atuar como voluntário?</p>
         <input
         class="campo"
            type="radio"
            id="yes"
            value="sim"
            
            name="voluntario"
        >
        <label for="yes">Sim:</label>

        <input
         class="campo"
            type="radio"
            id="no"
            value="nao"
            name="voluntario"
        >
        <label for="no">Não:</label>

        <br><br>

        <p>Quais áreas você gostaria de ajudar?</p>

         <input
         class="campo"
            type="checkbox"
            id="doacoes"
            value="doacoes"
        >
        <label for="doacoes">Arrecadação e doações</label>

        <br>

        <input
        class="campo"
            type="checkbox"
            id="eventos"
            value="eventos"
        >
        <label for="eventos">Eventos e ações sociais</label>

        <br>

        <input
        class="campo"
            type="checkbox"
            id="educacao"
            value="educacao"
        >
        <label for="educacao">Educação</label>
        <input
        class="campo"
            type="checkbox"
            id="saude"
            value="saude">
        <label for="saude">Saúde</label>
      </fieldset>
      <button 
      class="botao-envio"
      type="submit">Enviar</button>

            

               

            </form>

        </section>

    `;
}


// ======================================
// NAVEGAÇÃO
// ======================================

function navegar() {

    const rota =
        window.location.hash;


    if (rota === "#projetos") {

        conteudo.innerHTML =
            templateProjetos();

    }

    else if (rota === "#cadastro") {

        conteudo.innerHTML =
            templateCadastro();


        configurarFormulario();

        preencherFormulario();

    }

    else {

        conteudo.innerHTML =
            templateInicio();

    }

}


// ======================================
// EVENTOS
// ======================================

window.addEventListener(
    "hashchange",
    navegar
);

window.addEventListener(
    "load",
    navegar
);
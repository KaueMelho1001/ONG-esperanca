import {
    salvarCadastro,
    carregarCadastro
} from "./armazenamento.js";


export function configurarFormulario() {

    const form = document.getElementById("formCadastro");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        limparErros();

        let valido = true;


        // =========================
        // NOME
        // =========================

        const nome = document.getElementById("name");

        if (!nome.value.trim()) {

            mostrarErro(
                nome,
                "Digite seu nome completo."
            );

            valido = false;

        } else if (!nome.checkValidity()) {

            mostrarErro(
                nome,
                "Digite um nome válido."
            );

            valido = false;
        }


        // =========================
        // E-MAIL
        // =========================

        const email = document.getElementById("mail");

        if (!email.value.trim()) {

            mostrarErro(
                email,
                "Digite seu e-mail."
            );

            valido = false;

        } else if (!email.checkValidity()) {

            mostrarErro(
                email,
                "Digite um e-mail válido."
            );

            valido = false;
        }


        // =========================
        // TELEFONE
        // =========================

        const telefone = document.getElementById("tele");

        if (!telefone.value.trim()) {

            mostrarErro(
                telefone,
                "Digite seu telefone."
            );

            valido = false;

        } else if (!telefone.checkValidity()) {

            mostrarErro(
                telefone,
                "Digite um telefone válido."
            );

            valido = false;
        }


        // =========================
        // SE HOUVER ERRO
        // =========================

        if (!valido) {
            return;
        }


        // =========================
        // ÁREAS DE INTERESSE
        // =========================

        const areasSelecionadas = [];

        const checkboxes =
            document.querySelectorAll(
                'input[type="checkbox"]'
            );

        checkboxes.forEach(function(checkbox) {

            if (checkbox.checked) {

                areasSelecionadas.push(
                    checkbox.value
                );
            }
        });


        // =========================
        // VOLUNTARIADO
        // =========================

        const voluntarioSelecionado =
            document.querySelector(
                'input[name="voluntario"]:checked'
            );


        // =========================
        // DADOS DO CADASTRO
        // =========================

        const dadosCadastro = {

            nome: document.getElementById("name").value,

            cpf: document.getElementById("cpf").value,

            nascimento:
                document.getElementById("birth").value,

            email:
                document.getElementById("mail").value,

            telefone:
                document.getElementById("tele").value,

            whatsapp:
                document.getElementById("whats").value,

            cep:
                document.getElementById("cep").value,

            endereco:
                document.getElementById("endereco").value,

            numero:
                document.getElementById("home").value,

            bairro:
                document.getElementById("bairro").value,

            voluntario:
                voluntarioSelecionado
                    ? voluntarioSelecionado.value
                    : "",

            areas: areasSelecionadas
        };


        // =========================
        // SALVAR
        // =========================

        salvarCadastro(dadosCadastro);


        alert(
            "Cadastro realizado com sucesso!"
        );

    });
}


// ======================================
// LIMPAR MENSAGENS DE ERRO
// ======================================

function limparErros() {

    const erros =
        document.querySelectorAll(".erro");

    erros.forEach(function(erro) {
        erro.remove();
    });

}


// ======================================
// MOSTRAR ERRO
// ======================================

function mostrarErro(campo, mensagem) {

    const erro =
        document.createElement("span");

    erro.className = "erro";

    erro.textContent = mensagem;

    campo.insertAdjacentElement(
        "afterend",
        erro
    );
}


// ======================================
// PREENCHER FORMULÁRIO
// ======================================

export function preencherFormulario() {

    const dados = carregarCadastro();

    if (!dados) {
        return;
    }


    document.getElementById("name").value =
        dados.nome || "";

    document.getElementById("cpf").value =
        dados.cpf || "";

    document.getElementById("birth").value =
        dados.nascimento || "";

    document.getElementById("mail").value =
        dados.email || "";

    document.getElementById("tele").value =
        dados.telefone || "";

    document.getElementById("whats").value =
        dados.whatsapp || "";

    document.getElementById("cep").value =
        dados.cep || "";

    document.getElementById("endereco").value =
        dados.endereco || "";

    document.getElementById("home").value =
        dados.numero || "";

    document.getElementById("bairro").value =
        dados.bairro || "";


    // =========================
    // RADIO
    // =========================

    if (dados.voluntario) {

        const radio =
            document.querySelector(
                `input[name="voluntario"][value="${dados.voluntario}"]`
            );

        if (radio) {
            radio.checked = true;
        }
    }


    // =========================
    // CHECKBOXES
    // =========================

    const areas =
        dados.areas || [];

    const checkboxes =
        document.querySelectorAll(
            'input[type="checkbox"]'
        );

    checkboxes.forEach(function(checkbox) {

        checkbox.checked =
            areas.includes(
                checkbox.value
            );

    });

}
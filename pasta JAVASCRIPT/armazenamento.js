export function salvarCadastro(dados) {

    localStorage.setItem(
        "cadastroONG",
        JSON.stringify(dados)
    );

}

export function carregarCadastro() {

    const dadosSalvos =
        localStorage.getItem("cadastroONG");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}